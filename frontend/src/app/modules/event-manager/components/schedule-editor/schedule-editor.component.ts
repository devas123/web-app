import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDescription, Schedule} from '../../../../reducers/global-reducers';
import {Category, Period, ScheduleRequirement, ScheduleRequirementType} from '../../../../commons/model/competition.model';
import {SuiModalService} from '@devas123/ng2-semantic';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {AddSchedulePeriodModal, IAddSchedulePeriodResult} from '../../containers/schedule-editor-container/add-shedule-period-form.component';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';
import * as uuidv4 from 'uuid/v4';
import {AddSchedulePauseModal, IAddSchedulePauseResult} from './add-pause-form.component';
import {ISplitCategoryResult, SplitCategoryModal} from './split-category-modal.component';
import {EditFightsRequirementModal, IEditFightsRequirementResult} from './edit-fights-requirement-modal.component';

export interface CatReq {
  cat?: Category;
  req?: ScheduleRequirement;
}

const collectingReducer = <T>(previousValue: T[], currentValue: T[]) => [...previousValue, ...currentValue];
const uniqueFilter = <T>(e: T, i: number, a: T[]) => a.indexOf(e) === i;

@Component({
  selector: 'app-schedule-editor',
  templateUrl: './schedule-editor.component.html',
  styleUrls: ['./schedule-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleEditorComponent implements OnInit, OnChanges {

  @Input()
  timeZone = 'UTC';

  @Input()
  scheduleEmpty = false;

  @Input()
  competitionId: string;

  @Input()
  schedule: Schedule;

  @Input()
  categories: Category[];

  @Input()
  mats: MatDescription[];

  @Input()
  showEditor;

  @Output()
  scheduleDropped = new EventEmitter<string>();

  @Output()
  periodAdded = new EventEmitter<{ period: Period, mats: MatDescription[] }>();

  @Output()
  periodRemoved = new EventEmitter<string>();

  @Output()
  generateSchedule = new EventEmitter<{ competitionId: String, periods: Period[] }>();

  @Output()
  periodsUpdated = new EventEmitter<Period[]>();

  filteredCategories = [] as CatReq[];
  undispatchedRequirements = new Set<CatReq>();
  _selectedReqs: Set<string> = new Set<string>();

  @Input()
  private periods: Period[];

  @Input()
  private fightIdsByCategoryId: Dictionary<string[]>;

  constructor(public modalService: SuiModalService, public cd: ChangeDetectorRef) {
  }

  getPeriodMats(periodId: string) {
    return (this.mats && this.mats.filter(m => m.periodId === periodId)) || [];
  }

  getScheduleRequirementsForMat(matId: string, periodId: string) {
    return this.getPeriodForId(periodId).scheduleRequirements.filter(sr => sr.matId === matId);
  }

  getScheduleRequirementsWithoutMat(periodId: string) {
    return this.getPeriodForId(periodId).scheduleRequirements.filter(sr => !sr.matId);
  }

  sendGenerateSchedule() {
    this.generateSchedule.next({competitionId: this.competitionId, periods: this.periods});
  }

  removePeriod(p: Period) {
    if (p && p.id) {
      this.periodRemoved.next(p.id);
    }
  }

  sendDropSchedule() {
    this.scheduleDropped.next(this.competitionId);
  }

  public openAddSchedulePeriodModal() {
    this.modalService
      .open(new AddSchedulePeriodModal(this.competitionId, this.timeZone))
      .onApprove((result: IAddSchedulePeriodResult) => {
        const period = result.properties;
        const mats = result.mats;
        if (period) {
          this.periodAdded.next({period, mats});
        }
      });
  }

  requirementId = () => `${uuidv4().toString()}-requirement`;

  createSrFromFightIds = (matId: string) => (periodId: string) => (entryType: ScheduleRequirementType) => (fightIds: string[], categoryIds: string[]) => (<ScheduleRequirement>{
    id: this.requirementId(),
    categoryIds,
    fightIds,
    entryType,
    periodId: periodId,
    matId
  });

  createSrFromCategory = (matId: string) => (catId: string, periodId: string) =>
    this.createSrFromFightIds(matId)(periodId)('CATEGORIES')(this.fightIdsByCategoryId[catId], [catId]);

  moveCategory(e: CdkDragDrop<String[]>, to: string, req: ScheduleRequirement) {
    // Get the dropped data here
    const {fromPeriod, fromRequirementId, cat} = e.item.data;
    if (to) {
      this.addCategoryScheduleRequirementToPeriod(to, cat, req);
    }
    if (fromPeriod && fromRequirementId) {
      this.removeCategoryFromRequirement(fromPeriod, fromRequirementId, cat);
    }
  }

  private moveRequirement(e: CdkDragDrop<String[]>, to: string, req: ScheduleRequirement, toMatId: string, fromMatId: string) {
    // Get the dropped data here
    const {fromPeriod} = e.item.data;
    if (fromPeriod !== to) {
      if (to) {
        const toPeriod = this.getPeriodForId(to);
        if (!toPeriod.scheduleRequirements.find(sr => sr.id === req.id)) {
          const newReq = produce(req, draft => {
            draft.periodId = to;
          });
          this.periods = produce(this.periods, draft => {
            draft.find(p => p.id === to).scheduleRequirements = [...(toPeriod.scheduleRequirements || []), newReq];
          });
        }
      } else {
        this.moveRequirementToUndispatched(fromPeriod, req);
      }
      if (fromPeriod) {
        const fromPer = this.getPeriodForId(fromPeriod);
        this.periods = produce(this.periods, draft => {
          draft.find(p => p.id === fromPeriod).scheduleRequirements = fromPer.scheduleRequirements.filter(sr => sr.id !== req.id);
        });
      } else {
        this.markRequirementAsDispatched({req}, false);
      }
    } else if (!!fromPeriod && !!to) {
      // move inside period;
      this.periods = produce(this.periods, draft => {
        const periodRequirements = draft.find(per => per.id === to).scheduleRequirements;
        const reqAtCurrentIndex = periodRequirements.filter(r => r.matId === toMatId && r.entryType !== 'FIXED_PAUSE')[e.currentIndex];
        const reqAtPreviousIndex = periodRequirements.filter(r => r.matId === fromMatId && r.entryType !== 'FIXED_PAUSE')[e.previousIndex];
        const globalCurrentIndex = (reqAtCurrentIndex && periodRequirements.map(pr => pr.id).indexOf(reqAtCurrentIndex.id)) || 0;
        const globalPreviousIndex = periodRequirements.map(pr => pr.id).indexOf(reqAtPreviousIndex.id);
        moveItemInArray(draft.find(per => per.id === to).scheduleRequirements,
          globalPreviousIndex,
          globalCurrentIndex);
      });
    }
  }


  private removeCategoryFromRequirement(fromPeriodId, fromRequirementId, cat) {
    const fromRequirement = this.getPeriodForId(fromPeriodId).scheduleRequirements.find(sr => sr.id === fromRequirementId);
    if (fromRequirement.categoryIds.find(c => c === cat.id)) {
      if (fromRequirement.categoryIds.length === 1) {
        this.periods = produce(this.periods, draft => {
          draft.find(p => p.id === fromPeriodId).scheduleRequirements = draft.find(p => p.id === fromPeriodId).scheduleRequirements.filter(sr => sr.id !== fromRequirementId);
        });
      } else {
        this.periods = produce(this.periods, draft => {
          draft.find(p => p.id === fromPeriodId).scheduleRequirements
            .find(sr => sr.id === fromRequirementId).categoryIds = fromRequirement.categoryIds.splice(fromRequirement.categoryIds.indexOf(cat.id));
        });
      }
    }
  }

  private addCategoryScheduleRequirementToPeriod(to: string, cat: Category, req: ScheduleRequirement) {
    const toPeriod = this.getPeriodForId(to);
    if (!toPeriod.scheduleRequirements.find(sr => sr.categoryIds.indexOf(cat.id) >= 0)) {
      const newSr = req;
      this.periods = produce(this.periods, draft => {
        if (!toPeriod.scheduleRequirements.find(sr => sr.id === newSr.id)) {
          draft.find(p => p.id === to).scheduleRequirements = [...(toPeriod.scheduleRequirements || []), newSr];
        } else {
          draft.find(p => p.id === to).scheduleRequirements.find(sr => sr.id === newSr.id).categoryIds.push(cat.id);
        }
      });
    }
  }

  private addPauseScheduleRequirementToPeriod(to: string, matId: string, requirement: ScheduleRequirement) {
    const toPeriod = this.getPeriodForId(to);
    const reqWithMat = produce(requirement, r => {
      if (!r.id || r.id.length <= 0) {
        r.id = this.requirementId();
      }
      r.categoryIds = [];
      r.fightIds = [];
      r.matId = matId;
    });
    this.periods = produce(this.periods, draft => {
      draft.find(p => p.id === to).scheduleRequirements = [...(toPeriod.scheduleRequirements || []), reqWithMat];
    });
  }


  getPeriodCategories(period: Period) {
    return (period && period.scheduleRequirements &&
      period.scheduleRequirements
        .map(r => r.categoryIds || [])
        .reduce(collectingReducer, [])
        .filter((value, index, array) => array.indexOf(value) === index)) || [];
  }

  ngOnInit() {
    this.refreshAll();
  }

  persistUpdates() {
    this.cleanupEmptyRequirements();
    this.periodsUpdated.next(this.periods);
  }

  cleanupEmptyRequirements() {
    const reqFilter = (sr: ScheduleRequirement) => sr.entryType === 'FIXED_PAUSE' || sr.entryType === 'RELATIVE_PAUSE' || (sr.fightIds && sr.fightIds.length > 0 && sr.categoryIds && sr.categoryIds.length > 0);
    this.periods = produce(this.periods, draft => {
      draft.forEach(p => p.scheduleRequirements = p.scheduleRequirements.filter(reqFilter));
    });
    this.updateUndispatched(undisp => undisp.filter(cr => cr.cat || (cr.req && reqFilter(cr.req))));
  }

  refreshAll() {
    this.refreshFilteredCategories();
    this.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshAll();
  }

  allCategoryFightsDispatched(categoryId: string) {
    const allScheduleRequirements = this.getAllRequirements(this.periods);
    const distributedCategories = allScheduleRequirements.filter(r => r.entryType === 'CATEGORIES' && !!r.categoryIds)
      .map(r => r.categoryIds.filter(c => !!c)).reduce(collectingReducer, []);
    const distributedFights = allScheduleRequirements.filter(r => r.entryType === 'FIGHTS' && !!r.fightIds)
      .map(r => r.fightIds.filter(c => !!c)).reduce(collectingReducer, []);

    const categoryFights = (this.fightIdsByCategoryId && this.fightIdsByCategoryId[categoryId]) || [];

    return distributedCategories.indexOf(categoryId) >= 0 || categoryFights
      .reduce((previousValue, currentValue) => previousValue && distributedFights.indexOf(currentValue) >= 0, true);
  }

  refreshFilteredCategories() {
    if (this.categories && this.periods) {
      this.periods.map(p => p.scheduleRequirements.map(r => r.categoryIds.filter(c => !!c)).reduce(collectingReducer, []))
        .reduce(collectingReducer, []).concat();
      this.filteredCategories = this.categories.filter(cat => !this.allCategoryFightsDispatched(cat.id))
        .map(cat => ({cat}));
    } else {
      this.filteredCategories = (this.categories || []).map(cat => ({cat}));
    }
    this.filteredCategories = produce(this.filteredCategories, draft => {
      draft.push(...Array.from(this.undispatchedRequirements));
    });
  }

  onItemDrop(e: CdkDragDrop<any, any>, to: string, toMatId?: string) {
    if (e.item.data.cat) {
      this.moveCategory(e, to, this.createSrFromCategory(toMatId)(e.item.data.cat.id, to));
    } else if (e.item.data.req) {
      const {req, fromMatId} = e.item.data;
      const type = req.entryType;
      if (type === 'CATEGORIES' || type === 'FIGHTS') {
        this.moveRequirement(e, to, req, toMatId, fromMatId);
        this.changeRequirementMatId(req, to, toMatId);
      }
      if (type === 'RELATIVE_PAUSE' && toMatId) {
        this.moveRequirement(e, to, req, toMatId, fromMatId);
        this.changeRequirementMatId(req, to, toMatId);
      }
    }
    this.persistUpdates();
    console.log(this.periods);
  }

  syncSelectedReqs() {
    const allReqs = this.getAllRequirements(this.periods);
    const selectedReqs = Array.from(this._selectedReqs);
    this._selectedReqs.clear();
    selectedReqs.filter(sr => !!allReqs.find(r => r.id === sr)).forEach(e => this._selectedReqs.add(e));
  }

  onItemDropBack(e: CdkDragDrop<any, any>, to: string) {
    const {fromPeriod, fromRequirement} = e.item.data;
    if (to !== fromPeriod) {
      if (e.item.data.cat) {
        const {cat} = e.item.data;
        this.periods = produce(this.periods, draft => {
          if (fromRequirement) {
            draft.find(p => p.id === fromPeriod).scheduleRequirements.forEach(sr => {
              if (sr.categoryIds && sr.categoryIds.indexOf(cat.id) >= 0) {
                sr.categoryIds.splice(sr.categoryIds.indexOf(cat.id), 1);
              }
            });
          }

          draft.find(p => p.id === fromPeriod).scheduleRequirements =
            draft.find(p => p.id === fromPeriod).scheduleRequirements
              .filter(sr => sr.entryType === 'RELATIVE_PAUSE' || sr.entryType === 'FIXED_PAUSE'
                || sr.categoryIds.length > 0
                || sr.fightIds.length > 0);
        });
        this.syncSelectedReqs();
      } else if (e.item.data.req) {
        const {req} = e.item.data;
        const type = req.entryType;
        switch (type) {
          case 'CATEGORIES':
          case 'FIGHTS':
            this.moveRequirementToUndispatched(fromPeriod, req);
            break;
          case 'RELATIVE_PAUSE':
          case 'FIXED_PAUSE':
            this.removeDispatchedRequirement(req, fromPeriod, false);
            break;
        }
        this.changeSelectionStatus({id: req.id, value: false});
      }
      this.persistUpdates();
    }
    this.refreshAll();
  }

  private moveRequirementToUndispatched(fromPeriod: string, req: ScheduleRequirement) {
    const period = this.getPeriodForId(fromPeriod);
    const requirement = produce(period.scheduleRequirements.find(sr => sr.id === req.id), draft => {
      draft.matId = null;
      draft.periodId = null;
    });
    this.undispatchedRequirements.add({req: requirement});
    this.periods = produce(this.periods, draft => {
      draft.find(p => p.id === fromPeriod).scheduleRequirements = period.scheduleRequirements.filter(sr => sr.id !== req.id);
    });
  }

  detectChanges() {
    this.cd.markForCheck();
  }

  removeDispatchedRequirement(req: ScheduleRequirement, period: Period, persist = true) {
    this.periods = produce(this.periods, draft => {
      const reqs = draft.find(p => p.id === period.id).scheduleRequirements || [];
      draft.find(p => p.id === period.id).scheduleRequirements = reqs.filter(sr => sr.id !== req.id);
    });
    this.adjustRequirementsAfterDeletion(req);
    this._selectedReqs.delete(req.id);
    if (persist) {
      this.persistUpdates();
    }
  }

  addPauseToPeriod(periodId: string) {
    this.modalService.open(new AddSchedulePauseModal(this.competitionId, periodId, this.timeZone, this.mats.filter(m => m.periodId === periodId)))
      .onApprove((result: IAddSchedulePauseResult) => {
        this.mats.filter(m => !!m.id && result.toMats.indexOf(m.id) >= 0)
          .forEach(mat => this.addPauseScheduleRequirementToPeriod(periodId, mat.id, result.pauseRequirement));
        this.persistUpdates();
      });
  }

  private changeRequirementMatId(req: ScheduleRequirement, periodId: string, matId: string) {
    this.periods = produce(this.periods, draft => {
      const period = draft.find(p => p.id === periodId);
      if (period && period.scheduleRequirements && period.scheduleRequirements.find(sr => sr.id === req.id)) {
        period.scheduleRequirements.find(sr => sr.id === req.id).matId = matId;
      }
    });
  }

  removeRequirementsForCategoryIds(categoryIds: string[]) {
    this.periods = produce(this.periods, draft => {
      draft.forEach(p => {
        p.scheduleRequirements = p.scheduleRequirements
          .filter(sr => !sr.categoryIds.find(c => categoryIds.includes(c)));
      });
    });
    this.updateUndispatched(tmpUnd => tmpUnd.filter(cr => cr.cat || !cr.req.categoryIds.find(c => categoryIds.includes(c))));
  }

  dispatchSpareFights(categoryIds: string[], fightIds: string[]) {
    const fightGroups = categoryIds.map(cid => ({cid, fights: this.fightIdsByCategoryId[cid].filter(fid => fightIds.includes(fid))})).filter(dic => dic.fights && dic.fights.length > 0);
    fightGroups.forEach(fg => this.moveFightsToDefaultCategoryRequirement(fg.cid, fg.fights));
  }

  moveFightsToDefaultCategoryRequirement(categoryId: string, fightIds: string[]) {
    this.periods = produce(this.periods, draft => {
      const defaultReq = draft.map(p => p.scheduleRequirements || []).reduce(collectingReducer, [] as ScheduleRequirement[]).find(sr => sr.entryType === 'CATEGORIES' && sr.categoryIds.includes(categoryId));
      if (defaultReq) {
        defaultReq.fightIds.push(...fightIds);
        draft.forEach(p => p.scheduleRequirements.forEach(sr => {
          if (sr.id === defaultReq.id) {
            sr.fightIds = defaultReq.fightIds;
          }
        }));
      }
    });
    this.updateUndispatched(undisp => produce(undisp, draft => {
      const defaultReq = draft.find(cr => cr.req && cr.req.entryType === 'CATEGORIES' && cr.req.categoryIds.includes(categoryId));
      if (defaultReq) {
        defaultReq.req.fightIds.push(...fightIds);
      }
    }));
  }

  updateUndispatched(transform: (c: CatReq[]) => CatReq[]) {
    const undispatched = Array.from(this.undispatchedRequirements);
    this.undispatchedRequirements.clear();
    transform(undispatched).forEach(cr => this.undispatchedRequirements.add(cr));
  }

  deleteUndispatchedRequirement(catReq: CatReq) {
    if (catReq.req) {
      this.markRequirementAsDispatched(catReq, false);
      this.adjustRequirementsAfterDeletion(catReq.req);
      this.persistUpdates();
    }
  }


  private adjustRequirementsAfterDeletion(req: ScheduleRequirement) {
    if (req.entryType === 'CATEGORIES') {
      this.removeRequirementsForCategoryIds(req.categoryIds);
    }
    if (req.entryType === 'FIGHTS') {
      this.dispatchSpareFights(req.categoryIds, req.fightIds);
    }
  }

  markRequirementAsDispatched(catReq: CatReq, persist: boolean) {
    if (!this.undispatchedRequirements.delete(catReq)) {
      this.updateUndispatched(tmpUnd => tmpUnd.filter(cr => cr.req.id !== catReq.req.id));
    }
    if (persist) {
      this.persistUpdates();
    }
  }

  changeSelectionStatus(event: { id: string; value: boolean }) {
    const {id, value} = event;
    if (value) {
      this._selectedReqs.add(id);
    } else {
      this._selectedReqs.delete(id);
    }
  }

  mergeSelectedReqs() {
    const selectedReqs = this.getRequirementsForIds(this._selectedReqs);
    const entryTypes = selectedReqs.length > 1 && selectedReqs.map(r => r.entryType).filter(uniqueFilter);
    const periods = selectedReqs.length > 1 && selectedReqs.map(r => r.periodId).filter(uniqueFilter);
    const mats = selectedReqs.length > 1 && selectedReqs.map(r => r.matId).filter(uniqueFilter);
    if (entryTypes.length === 1) {
      const entryType = entryTypes[0];
      const unionCategoryIds = selectedReqs.map(sr => sr.categoryIds).reduce(collectingReducer, []).filter(uniqueFilter);
      const unionFightIds = selectedReqs.map(sr => sr.fightIds).reduce(collectingReducer, []).filter(uniqueFilter);
      const newSr = this.createSrFromFightIds(null)(null)(entryType)(unionFightIds, unionCategoryIds);
      if (periods && periods.length === 1) {
        newSr.periodId = periods[0];
        if (mats && mats.length === 1) {
          newSr.matId = mats[0];
        }
      }
      this.removeRequirementsWithIds(selectedReqs.map(re => re.id));
      this.addRequirementToPeriodAndMatOrUndispatched(newSr.periodId, newSr.matId, newSr);
      this._selectedReqs.clear();
      this.persistUpdates();
    }
  }

  getPeriodForId = (id) => this.periods.find(p => p.id === id);

  getPeriodFights(id: string) {
    return this.getPeriodForId(id).scheduleRequirements.map(c => c.fightIds || []).reduce(collectingReducer, []);
  }

  getRequirementsForIds(ids: Set<string>) {
    const allReqs = this.getAllRequirements(this.periods);
    return Array.from(ids).map(id => allReqs.find(sr => sr.id === id));
  }

  private getAllRequirements(periods: Period[]) {
    if (periods) {
      const dispatchedRequirements = periods.map(per => per.scheduleRequirements || [])
        .reduce(collectingReducer, []);
      const undispatched = Array.from(this.undispatchedRequirements).map(cr => cr.req).filter(r => !!r);
      return [...dispatchedRequirements, ...undispatched];
    }
    return [] as ScheduleRequirement[];
  }

  categoryForFightId = (fightId: string) => Object.keys(this.fightIdsByCategoryId).find(key => this.fightIdsByCategoryId[key].indexOf(fightId) >= 0);

  private getDefaultRequirementForFightId(fightId: string, allReqs: ScheduleRequirement[]) {
    const cat = this.categoryForFightId(fightId);
    return allReqs.find(sr => {
      return (sr.entryType === 'CATEGORIES' && sr.categoryIds.indexOf(cat) >= 0);
    });
  }

  openSplitModal(catReq: CatReq) {
    let categoryIds = [];
    if (catReq.cat) {
      const categoryId = catReq.cat.id;
      this.getAllRequirements(this.periods).filter(sr => sr.entryType === 'FIGHTS' && sr.categoryIds.indexOf(categoryId) >= 0);
      this.modalService.open(new SplitCategoryModal(this.competitionId, categoryId, this.createSrFromFightIds(null)(null)('FIGHTS'),
        this.getAllRequirements(this.periods).filter(sr => sr.entryType === 'FIGHTS' && sr.categoryIds.indexOf(categoryId) >= 0)))
        .onApprove((result: ISplitCategoryResult) => {
          if (result.requirements && result.requirements.filter(fs => fs.fightIds && fs.fightIds.length > 0).length > 0) {
            const remainingFights = this.fightIdsByCategoryId[categoryId].filter(f => !result.requirements.find(sf => sf.fightIds.indexOf(f) >= 0));
            const undispatchedRequirements = result.requirements.filter(sr => !sr.periodId);
            undispatchedRequirements.filter(fs => fs && fs.fightIds.length > 0).forEach(fs => {
              this.undispatchedRequirements.add({req: fs});
            });
            const dispatchedRequirements = result.requirements.filter(sr => !!sr.periodId);
            this.updateRequirements(dispatchedRequirements);
            if (remainingFights && remainingFights.length > 0) {
              const defaultSr = this.createSrFromFightIds(null)(null)('CATEGORIES')(remainingFights, [categoryId]);
              this.undispatchedRequirements.add({req: defaultSr});
            }
            this.persistUpdates();
          }
        });
    } else if (catReq.req) {
      categoryIds = catReq.req.categoryIds;
      this.modalService.open(new EditFightsRequirementModal(this.competitionId, this.categories, categoryIds, this.fightIdsByCategoryId,
        catReq.req, this.createSrFromFightIds(null)(null)('FIGHTS')))
        .onApprove((result: IEditFightsRequirementResult) => {
          if (result.requirement) {
            const affectedCategoryIds = result.requirement.categoryIds || [];
            const remainingFights = affectedCategoryIds.map(categoryId => this.fightIdsByCategoryId[categoryId]
              .filter(f => result.requirement.fightIds.indexOf(f) < 0))
              .reduce(collectingReducer, [] as string[]);
            if (remainingFights && remainingFights.length > 0) {
              this.periods = produce(this.periods, draft => {
                const allReqs = this.getAllRequirements(draft);
                let growingAllReqs = [...allReqs];
                // for the fights that are not in the updated requirement but are have a category requirement, we have to convert
                // the category requirement to fights requirement for consistency.
                remainingFights.forEach(rf => {
                  if (!allReqs.find(sr => sr.id !== result.requirement.id && sr.fightIds.indexOf(rf) >= 0)) {
                    // find default requirement for this fight
                    const fightRequirement = this.getDefaultRequirementForFightId(rf, growingAllReqs);
                    if (fightRequirement) {
                      fightRequirement.fightIds.push(rf);
                    } else {
                      const categoryForFight = this.categoryForFightId(rf);
                      const fightIds = this.fightIdsByCategoryId[categoryForFight]
                        .filter(id => result.requirement.fightIds.indexOf(id) < 0);
                      const defaultSr = this.createSrFromFightIds(null)(null)('CATEGORIES')(fightIds, [categoryForFight]);
                      this.undispatchedRequirements.add({req: defaultSr});
                      growingAllReqs = [...growingAllReqs, defaultSr];
                    }
                  }
                });
                result.requirement.fightIds.forEach(fid => {
                  draft.forEach(p => this.removeFightIdsFromScheduleReqs(fid, p.scheduleRequirements));
                });
              });
              this.updateUndispatched(undispatched => produce(undispatched, draft => {
                draft.forEach(cr => {
                  if (cr.req) {
                    cr.req.fightIds = cr.req.fightIds.filter(f => !result.requirement.fightIds.includes(f));
                  }
                });
              }));
            }
            this.persistUpdates();
          }
        });
    }
  }

  removeFightIdsFromScheduleReqs(fightId: string, scheduleRequirements: ScheduleRequirement[]) {
    scheduleRequirements.forEach(psr => {
      if (psr.fightIds.indexOf(fightId) >= 0) {
        psr.fightIds = psr.fightIds.filter(id => id !== fightId);
      }
    });
  }

  private updateRequirements(dispatchedRequirements: ScheduleRequirement[]) {
    this.periods = produce(this.periods, draft => {
      dispatchedRequirements.forEach(dsr => {
        const {periodId} = dsr;
        const period = draft.find(p => p.id === periodId);
        if (period) {
          const indexOf = period.scheduleRequirements.map(s => s.id).indexOf(dsr.id);
          if (indexOf >= 0) {
            period.scheduleRequirements = [...period.scheduleRequirements.slice(0, indexOf), dsr, ...period.scheduleRequirements.slice(indexOf + 1)];
          }
        }
      });
    });
  }

  private removeRequirementsWithIds(strings: string[]) {
    this.periods = produce(this.periods, draft => {
      draft.forEach(p => {
        if (p.scheduleRequirements) {
          p.scheduleRequirements = p.scheduleRequirements.filter(sr => !strings.includes(sr.id));
        }
      });
    });
  }

  private addRequirementToPeriodAndMatOrUndispatched(periodId: string, matId: string, newSr: ScheduleRequirement) {
    if (periodId) {
      const srToAdd = produce(newSr, n => {
        n.periodId = periodId;
        n.matId = matId;
      });
      this.periods = produce(this.periods, draft => {
        const periodToUpdate = draft.find(p => p.id === periodId);
        if (!periodToUpdate.scheduleRequirements.find(sr => sr.id === srToAdd.id)) {
          periodToUpdate.scheduleRequirements.push(srToAdd);
        }
      });
    } else {
      const srToAdd = produce(newSr, n => {
        n.periodId = null;
        n.matId = null;
      });
      this.updateUndispatched(undisp => produce(undisp, draft => {
        draft.push({req: srToAdd});
      }));
    }
  }
}
