import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDescription, Schedule} from '../../../../reducers/global-reducers';
import {Category, Period, ScheduleRequirement, ScheduleRequirementType} from '../../../../commons/model/competition.model';
import {SuiModalService} from '@frontend-nx/ng2-semantic-ui';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {AddSchedulePeriodModal, IAddSchedulePeriodResult} from '../../containers/schedule-editor-container/add-shedule-period-form.component';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';
import {AddSchedulePauseModal, IAddSchedulePauseResult} from './add-pause-form.component';
import {ISplitCategoryResult, SplitCategoryModal} from './split-category-modal.component';
import {EditRequirementModal, IEditRequirementResult} from './edit-requirement-modal.component';
import {collectingReducer, defaultSelectionColor, generateUuid, uniqueFilter} from '../../../account/utils';

export interface CatReq {
  cat?: Category;
  req?: ScheduleRequirement;
}

@Component({
  selector: 'app-schedule-editor',
  templateUrl: './schedule-editor.component.html',
  styleUrls: ['./schedule-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleEditorComponent implements OnInit, OnChanges {

  @Input()
  private set periods(value: Period[]) {
    if (value) {
      this._requirements = value.map(p => p.scheduleRequirements).reduce(collectingReducer, []);
    } else {
      this._requirements = [];
    }
    this._periods = value;
  }

  @Input()
  set undispatched(value: ScheduleRequirement[]) {
    if (value) {
      this._requirements = [...this._requirements, ...value].filter(uniqueFilter);
    }
  }

  private get periods(): Period[] {
    const requirementsWithOrder = produce(this._requirements, draft => {
      draft.forEach((req, index) => req.entryOrder = index);
    });
    return produce(this._periods, draft => {
      draft.forEach(p => {
        p.scheduleRequirements = requirementsWithOrder.filter(sr => sr.periodId === p.id);
      });
    });
  }

  constructor(public modalService: SuiModalService, public cd: ChangeDetectorRef) {
  }

  get undispatchedRequirements() {
    return this._requirements.filter(sr => !sr.periodId).map(req => ({req}));
  }

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
  generateSchedule = new EventEmitter<{ competitionId: String, periods: Period[], mats: MatDescription[] }>();

  @Output()
  periodsUpdated = new EventEmitter<{ periods: Period[], undispatchedRequirements: ScheduleRequirement[] }>();

  filteredCategories = [] as CatReq[];
  _requirements = [] as ScheduleRequirement[];
  _selectedReqs: Set<string> = new Set<string>();
  _periods: Period[];

  @Input()
  private fightIdsByCategoryId: Dictionary<string[]>;

  startDrag() {
    console.log("test");
    this.cd.detach();
  }

  finishDrag() {
    this.cd.reattach();
    this.cd.markForCheck();
  }

  getPeriodMats(periodId: string) {
    return (this.mats && this.mats.filter(m => m.periodId === periodId).sort((a, b) => a.matOrder - b.matOrder)) || [];
  }

  getScheduleRequirementsForMat(matId: string, periodId: string) {
    return this._requirements.filter(sr => sr.periodId === periodId && sr.matId === matId);
  }

  getScheduleRequirementsWithoutMat(periodId: string) {
    return this._requirements.filter(sr => sr.periodId === periodId && !sr.matId);
  }

  sendGenerateSchedule() {
    this.generateSchedule.next({
      competitionId: this.competitionId, periods: this.periods, mats: this.mats
    });
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

  requirementId = () => `${generateUuid().toString()}`;

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
      this.removeCategoryFromRequirement(fromRequirementId, cat);
    }
  }

  private moveRequirement(e: CdkDragDrop<String[]>, to: string, reqId: string, toMatId: string, fromMatId: string) {
    // Get the dropped data here
    const {fromPeriod} = e.item.data;
    this._requirements = produce(this._requirements, draft => {
      const ids = draft.map(pr => pr.id);

      // eslint-disable-next-line eqeqeq
      const toPeriodRequirements = draft.filter(sr => sr.periodId == to && sr.matId == toMatId && sr.entryType !== 'FIXED_PAUSE');
      // eslint-disable-next-line eqeqeq
      const fromPeriodRequirements = draft.filter(sr => sr.periodId == fromPeriod && sr.matId == fromMatId && sr.entryType !== 'FIXED_PAUSE');
      const reqAtCurrentIndex = toPeriodRequirements[e.currentIndex];
      let reqAtPreviousIndex;
      if (!fromPeriod) {
        // this is an undispatched requirement;
        reqAtPreviousIndex = this.filteredCategories.map(cr => (cr.cat && cr.cat.id) || cr.req.id)[e.previousIndex];
      } else {
        reqAtPreviousIndex = fromPeriodRequirements[e.previousIndex];
      }
      const globalCurrentIndex = (reqAtCurrentIndex && ids.indexOf(reqAtCurrentIndex.id)) || 0;
      const globalPreviousIndex = ids.indexOf(reqAtPreviousIndex.id);
      moveItemInArray(draft,
        globalPreviousIndex,
        globalCurrentIndex);
      if (!draft.find(sr => sr.periodId === to && sr.id === reqId)) {
        draft.find(sr => sr.id === reqId).periodId = to;
      }
      draft.find(sr => sr.id === reqId).matId = toMatId;
    });

  }


  private removeCategoryFromRequirement(fromRequirementId, cat) {
    const fromRequirement = this._requirements.find(sr => sr.id === fromRequirementId);
    if (fromRequirement.categoryIds.find(c => c === cat.id)) {
      if (fromRequirement.categoryIds.length === 1) {
        this._requirements = this._requirements.filter(sr => sr.id !== fromRequirement.id);
      } else {
        this._requirements = produce(this._requirements, draft => {
          draft
            .find(sr => sr.id === fromRequirementId).categoryIds.splice(fromRequirement.categoryIds.indexOf(cat.id), 1);
        });
      }
    }
  }

  private addCategoryScheduleRequirementToPeriod(to: string, cat: Category, req: ScheduleRequirement) {
    if (!this._requirements.find(sr => sr.periodId === to && sr.categoryIds.includes(cat.id))) {
      const newSr = req;
      this._requirements = produce(this._requirements, draft => {
        if (!draft.find(sr => sr.id === newSr.id)) {
          draft.push(newSr);
        } else {
          draft.find(p => p.id === newSr.id).periodId = to;
        }
        const srToUpdate = draft.find(p => p.id === newSr.id);
        srToUpdate.categoryIds = [...srToUpdate.categoryIds, cat.id];
        srToUpdate.fightIds = [...srToUpdate.fightIds, ...newSr.fightIds];
        srToUpdate.categoryIds = srToUpdate.categoryIds.filter(uniqueFilter);
        srToUpdate.fightIds = srToUpdate.fightIds.filter(uniqueFilter);
      });
    }
  }

  private addPauseScheduleRequirementToPeriod(to: string, matId: string, requirement: ScheduleRequirement) {
    const reqWithMat = produce(requirement, r => {
      if (!r.id || r.id.length <= 0) {
        r.id = this.requirementId();
      }
      r.periodId = to;
      r.categoryIds = [];
      r.fightIds = [];
      r.matId = matId;
    });
    this._requirements = produce(this._requirements, draft => {
      draft.push(reqWithMat);
    });
  }


  getPeriodCategories(periodId: string) {
    return (periodId && this._requirements.filter(sr => sr.periodId === periodId)
      .map(r => r.categoryIds || [])
      .reduce(collectingReducer, [])
      .filter((value, index, array) => array.indexOf(value) === index)) || [];
  }

  ngOnInit() {
    this.refreshAll();
  }

  persistUpdates() {
    this.cleanupEmptyRequirements();
    this.periodsUpdated.next({periods: this.periods, undispatchedRequirements: this.undispatchedRequirements.map(cr => cr.req).filter(v => !!v)});
  }

  cleanupEmptyRequirements() {
    const reqFilter = (sr: ScheduleRequirement) => sr.entryType === 'FIXED_PAUSE' || sr.entryType === 'RELATIVE_PAUSE' || (sr.fightIds && sr.fightIds.length > 0 && sr.categoryIds && sr.categoryIds.length > 0);
    this._requirements = this._requirements.filter(reqFilter);
  }

  refreshAll() {
    this.refreshFilteredCategories();
    this.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshAll();
  }

  allCategoryFightsDispatched(categoryId: string) {
    const allScheduleRequirements = this.getAllRequirements();
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
      this.filteredCategories = this.categories.filter(cat => !this.allCategoryFightsDispatched(cat.id))
        .map(cat => ({cat}));
    } else {
      this.filteredCategories = (this.categories || []).map(cat => ({cat}));
    }

    this.filteredCategories = [...this.filteredCategories, ...this.undispatchedRequirements];
  }

  onItemDrop(e: CdkDragDrop<any, any>, to: string, toMatId?: string) {
    if (e.item.data.cat) {
      this.moveCategory(e, to, this.createSrFromCategory(toMatId)(e.item.data.cat.id, to));
    } else if (e.item.data.req) {
      const {req, fromMatId} = e.item.data;
      const type = req.entryType;
      if (type === 'CATEGORIES' || type === 'FIGHTS') {
        this.moveRequirement(e, to, req.id, toMatId, fromMatId);
      }
      if (type === 'RELATIVE_PAUSE' && toMatId) {
        this.moveRequirement(e, to, req.id, toMatId, fromMatId);
      }
    }
    this.persistUpdates();
    console.log(this.periods);
  }

  syncSelectedReqs() {
    const allReqs = this.getAllRequirements();
    const selectedReqs = Array.from(this._selectedReqs);
    this._selectedReqs.clear();
    selectedReqs.filter(sr => !!allReqs.find(r => r.id === sr)).forEach(e => this._selectedReqs.add(e));
  }

  onItemDropBack(e: CdkDragDrop<any, any>, to: string) {
    const {fromPeriod, fromRequirement} = e.item.data;
    if (to !== fromPeriod) {
      if (e.item.data.cat) {
        const {cat} = e.item.data;
        this._requirements = produce(this._requirements, draft => {
          if (fromRequirement) {
            draft.filter(p => p.periodId === fromPeriod).forEach(sr => {
              if (sr.categoryIds && sr.categoryIds.includes(cat.id)) {
                sr.categoryIds.splice(sr.categoryIds.indexOf(cat.id), 1);
              }
            });
          }
        });
        this._requirements = this._requirements.filter(sr => sr.entryType === 'RELATIVE_PAUSE' || sr.entryType === 'FIXED_PAUSE'
          || (sr.categoryIds.length > 0 && sr.fightIds.length > 0));
        this.syncSelectedReqs();
      } else if (e.item.data.req) {
        const {req} = e.item.data;
        const type = req.entryType;
        switch (type) {
          case 'CATEGORIES':
          case 'FIGHTS':
            this.moveRequirementToUndispatched(req);
            break;
          case 'RELATIVE_PAUSE':
          case 'FIXED_PAUSE':
            this.removeRequirement(req, false);
            break;
        }
        this.changeSelectionStatus({id: req.id, value: false});
      }
      this.persistUpdates();
    }
    this.refreshAll();
  }

  private moveRequirementToUndispatched(req: ScheduleRequirement) {
    this._requirements = produce(this._requirements, d => {
      const draft = d.find(sr => sr.id === req.id);
      draft.matId = null;
      draft.periodId = null;
    });
  }

  detectChanges() {
    console.log('Detect changes');
    this.cd.markForCheck();
  }

  removeRequirement(req: ScheduleRequirement, persist = true) {
    this._requirements = this._requirements.filter(sr => sr.id !== req.id);
    this.adjustRequirementsAfterDeletion(req);
    this._selectedReqs.delete(req.id);
    if (persist) {
      this.persistUpdates();
    }
  }

  addPauseToPeriod(periodId: string, periodStartTime: string) {
    this.modalService.open(new AddSchedulePauseModal(this.competitionId, periodId, periodStartTime,
      this.timeZone, this.mats.filter(m => m.periodId === periodId)))
      .onApprove((result: IAddSchedulePauseResult) => {
        this.mats.filter(m => !!m.id && result.toMats.indexOf(m.id) >= 0)
          .forEach(mat => this.addPauseScheduleRequirementToPeriod(periodId, mat.id, result.pauseRequirement));
        this.persistUpdates();
      });
  }

  removeRequirementsForCategoryIds(categoryIds: string[]) {
    this._requirements = this._requirements.filter(sr => !sr.categoryIds.find(c => categoryIds.includes(c)));
  }

  dispatchSpareFights(categoryIds: string[], fightIds: string[]) {
    const fightGroups = categoryIds.map(cid => ({cid, fights: this.fightIdsByCategoryId[cid].filter(fid => fightIds.includes(fid))})).filter(dic => dic.fights && dic.fights.length > 0);
    fightGroups.forEach(fg => this.moveFightsToDefaultCategoryRequirement(fg.cid, fg.fights));
  }

  moveFightsToDefaultCategoryRequirement(categoryId: string, fightIds: string[]) {
    this._requirements = produce(this._requirements, draft => {
      const defaultReq = draft.find(sr => sr.entryType === 'CATEGORIES' && sr.categoryIds.includes(categoryId));
      if (defaultReq) {
        defaultReq.fightIds.push(...fightIds);
        defaultReq.fightIds = defaultReq.fightIds.filter(uniqueFilter);
      }
    });
  }


  private adjustRequirementsAfterDeletion(req: ScheduleRequirement) {
    if (req.entryType === 'CATEGORIES') {
      this.removeRequirementsForCategoryIds(req.categoryIds);
    }
    if (req.entryType === 'FIGHTS') {
      this.dispatchSpareFights(req.categoryIds, req.fightIds);
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

  getPeriodFights(id: string) {
    return this._requirements.filter(r => r.periodId === id).map(c => c.fightIds || []).reduce(collectingReducer, []);
  }

  getRequirementsForIds(ids: Set<string>) {
    const allReqs = this._requirements;
    return Array.from(ids).map(id => allReqs.find(sr => sr.id === id));
  }

  private getAllRequirements() {
    return this._requirements;
  }

  categoryForFightId = (fightId: string) => Object.keys(this.fightIdsByCategoryId).find(key => this.fightIdsByCategoryId[key].indexOf(fightId) >= 0);

  private getDefaultRequirementForFightId(fightId: string) {
    this._requirements = produce(this._requirements, draft => {
      const cat = this.categoryForFightId(fightId);
      const defaultCat = draft.find(sr => {
        return (sr.entryType === 'CATEGORIES' && sr.categoryIds.indexOf(cat) >= 0);
      });
      if (defaultCat) {
        defaultCat.fightIds.push(fightId);
      } else {
        const defaultSr = this.createSrFromFightIds(null)(null)('CATEGORIES')([fightId], [cat]);
        draft.push(defaultSr);
      }
    });
  }

  getFightsColors(exceptRequirements: string[]) {
    const draft = {} as Dictionary<string[]>;
    const exReq = exceptRequirements || [];
    this._requirements.filter(req => !exReq.includes(req.id)).forEach(requirement => {
      const color = requirement.color || defaultSelectionColor;
      if (!draft[color]) {
        draft[color] = [];
      }
      draft[color].push(...requirement.fightIds);
    });
    return draft;
  }

  openSplitModal(catReq: CatReq) {
    if (catReq.cat) {
      const categoryId = catReq.cat.id;
      this.getAllRequirements().filter(sr => sr.entryType === 'FIGHTS' && sr.categoryIds.indexOf(categoryId) >= 0);
      this.modalService.open(new SplitCategoryModal(this.competitionId, categoryId, this.createSrFromFightIds(null)(null)('FIGHTS'),
        this.getAllRequirements().filter(sr => sr.entryType === 'FIGHTS' && sr.categoryIds.indexOf(categoryId) >= 0), this.getFightsColors([])))
        .onApprove((result: ISplitCategoryResult) => {
          if (result.requirements && result.requirements.filter(fs => fs.fightIds && fs.fightIds.length > 0).length > 0) {
            const remainingFights = this.fightIdsByCategoryId[categoryId].filter(f => !result.requirements.find(sf => sf.fightIds.indexOf(f) >= 0));
            const dispatchedRequirements = result.requirements.filter(r => this._requirements.find(sr => sr.id === r.id));
            const newRequirements = result.requirements.filter(r => !this._requirements.find(sr => sr.id === r.id));
            this._requirements.push(...newRequirements);
            this.updateRequirements(dispatchedRequirements);
            if (remainingFights && remainingFights.length > 0) {
              const defaultSr = this.createSrFromFightIds(null)(null)('CATEGORIES')(remainingFights, [categoryId]);
              this._requirements.push(defaultSr);
            }
            this.persistUpdates();
          }
        });
    } else if (catReq.req) {
      this.modalService.open(new EditRequirementModal(this.competitionId, this.categories, this.filteredCategories.filter(cr => cr.cat).map(cr => cr.cat.id), this.fightIdsByCategoryId,
        this.getFightsColors([catReq.req.id]), catReq.req, this.createSrFromFightIds(null)(null)('FIGHTS')))
        .onApprove((result: IEditRequirementResult) => {
          if (result.requirement) {
            if (result.requirement.categoryIds.length > 0 && result.requirement.fightIds.length > 0) {
              const affectedCategoryIds = result.affectedCategoryIds || [];
              const allDispatchedFightIds = this._requirements.filter(r => r.id !== result.requirement.id).map(r => r.fightIds || []).reduce(collectingReducer, []);
              const remainingFights = affectedCategoryIds.map(categoryId => this.fightIdsByCategoryId[categoryId]
                .filter(f => result.requirement.fightIds.indexOf(f) < 0)
                .filter(f => !allDispatchedFightIds.includes(f)))
                .reduce(collectingReducer, [] as string[]);
              if (remainingFights && remainingFights.length > 0) {
                if (result.requirement.entryType === 'FIGHTS') {
                  remainingFights.forEach(rf => {
                    if (!this._requirements.find(sr => sr.id !== result.requirement.id && sr.fightIds.indexOf(rf) >= 0)) {
                      // find default requirement for this fight
                      this.getDefaultRequirementForFightId(rf);
                    }
                  });
                }
                if (result.requirement.entryType === 'CATEGORIES') {
                  const categories = remainingFights.map(id => this.categoryForFightId(id)).filter(uniqueFilter);
                  const remainingRequirement = this.createSrFromFightIds(null)(null)('FIGHTS')(remainingFights, categories);
                  this._requirements = this.updateRequirement(remainingRequirement, this._requirements);
                }
              }
              this._requirements = produce(this._requirements, draft => {
                result.requirement.fightIds.forEach(fid => {
                  draft.forEach(psr => {
                    if (psr.id !== result.requirement.id && psr.fightIds.indexOf(fid) >= 0) {
                      psr.fightIds.splice(psr.fightIds.indexOf(fid), 1);
                    }
                  });
                });
              });
              this._requirements = this.updateRequirement(result.requirement, this._requirements);
            } else {
              this.removeRequirement(catReq.req, false);
            }
            this.persistUpdates();
          }
        });
    }
  }

  updateRequirement(req: ScheduleRequirement, requirements: ScheduleRequirement[]) {
    const editable = [...requirements];
    const index = editable.map(r => r.id).indexOf(req.id);
    if (index >= 0) {
      editable[index] = req;
    } else {
      editable.push(req);
    }
    return editable;
  }

  private updateRequirements(dispatchedRequirements: ScheduleRequirement[]) {
    const ids = this._requirements.map(s => s.id);
    dispatchedRequirements.forEach(dsr => {
      const indexOf = ids.indexOf(dsr.id);
      if (indexOf >= 0) {
        this._requirements[indexOf] = dsr;
      }
    });

  }

  private removeRequirementsWithIds(strings: string[]) {
    this._requirements = this._requirements.filter(sr => !strings.includes(sr.id));
  }

  private addRequirementToPeriodAndMatOrUndispatched(periodId: string, matId: string, newSr: ScheduleRequirement) {
    const srToAdd = produce(newSr, n => {
      n.periodId = periodId;
      n.matId = matId;
    });
    if (!this._requirements.find(sr => sr.id === srToAdd.id)) {
      this._requirements.push(srToAdd);
    }
  }
}
