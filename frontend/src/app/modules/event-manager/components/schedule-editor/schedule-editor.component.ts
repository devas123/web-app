import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatDescription, Schedule} from '../../../../reducers/global-reducers';
import {Category, Period, ScheduleRequirement} from '../../../../commons/model/competition.model';
import {SuiModalService} from 'ng2-semantic';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {AddSchedulePeriodModal, IAddSchedulePeriodResult} from '../../containers/schedule-editor-container/add-shedule-period-form.component';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';
import * as uuidv4 from 'uuid/v4';
import {AddSchedulePauseModal, IAddSchedulePauseResult} from './add-pause-form.component';
import {RequirementEditorComponent} from './requirement-editor.component';

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

  @ViewChild(RequirementEditorComponent)
  requirementEditor: RequirementEditorComponent;

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

  requirementId = (periodId: string) => `${periodId}-requirement-${uuidv4().toString()}`;

  createSrFromCategory = (matId: string) => (catId: string, periodId: string) => (<ScheduleRequirement>{
    id: this.requirementId(periodId),
    categoryIds: [catId],
    entryType: 'CATEGORIES',
    fightIds: [],
    periodId: periodId,
    matId
  });

  moveCategory(e: CdkDragDrop<String[]>, to: string, req: ScheduleRequirement) {
    // Get the dropped data here
    const {fromPeriod, fromRequirementId, cat} = e.item.data;
    if (to) {
      this.addCategoryScheduleRequirementToPeriod(to, cat, req);
    }
    if (fromPeriod && fromRequirementId) {
      this.removeCategoryFromRequirement(fromPeriod, fromRequirementId, cat);
    }
    this.persistUpdates();
  }

  private moveRequirement(e: CdkDragDrop<String[]>, to: string, req: ScheduleRequirement, toMatId: string, fromMatId: string) {
    // Get the dropped data here
    const {fromPeriod} = e.item.data;
    if (fromPeriod !== to) {
      if (to) {
        const toPeriod = this.getPeriodForId(to);
        if (!toPeriod.scheduleRequirements.find(sr => sr.id === req.id)) {
          this.periods = produce(this.periods, draft => {
            const newReq = {...req, periodId: to};
            draft.find(p => p.id === to).scheduleRequirements = [...(toPeriod.scheduleRequirements || []), newReq];
          });
        }
      } else {
        this.removeRequirementFromPeriod(fromPeriod, req);
      }
      if (fromPeriod) {
        const fromPer = this.getPeriodForId(fromPeriod);
        this.periods = produce(this.periods, draft => {
          draft.find(p => p.id === fromPeriod).scheduleRequirements = fromPer.scheduleRequirements.filter(sr => sr.id !== req.id);
        });
      } else {
        this.removeUndispatchedRequirement({req}, false);
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
    this.persistUpdates();
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
        r.id = this.requirementId(to);
      }
      r.categoryIds = [];
      r.fightIds = [];
      r.matId = matId;
    });
    this.periods = produce(this.periods, draft => {
      draft.find(p => p.id === to).scheduleRequirements = [...(toPeriod.scheduleRequirements || []), reqWithMat];
    });
    this.persistUpdates();
  }

  getPeriodCategories(period: Period) {
    return (period && period.scheduleRequirements &&
      period.scheduleRequirements
        .map(r => r.categoryIds || [])
        .reduce(((previousValue, currentValue) => [...(previousValue || []), ...currentValue]), [])
        .filter((value, index, array) => array.indexOf(value) === index)) || [];
  }

  ngOnInit() {
    this.refreshAll();
  }

  persistUpdates() {
    this.periodsUpdated.next(this.periods);
  }

  refreshAll() {
    this.refreshFilteredCategories();
    this.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshAll();
  }

  refreshFilteredCategories() {
    if (this.categories && this.periods) {
      const distributedCategories = this.periods.map(p => p.scheduleRequirements.map(r => r.categoryIds.filter(c => !!c)).reduce((previousValue, currentValue) => previousValue.concat(currentValue), []))
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []).concat();
      this.filteredCategories = this.categories.filter(cat => distributedCategories.indexOf(cat.id) < 0
        && !Array.from(this.undispatchedRequirements).find(cr => cr.req && cr.req.categoryIds.indexOf(cat.id) >= 0))
        .map(cat => ({cat}));
    } else {
      this.filteredCategories = (this.categories || []).map(cat => ({cat}));
    }
    this.filteredCategories = produce(this.filteredCategories, draft => {
      draft.push(...Array.from(this.undispatchedRequirements));
    });
  }

  onCategoryDropToRequirement(e: CdkDragDrop<any, any>, req: ScheduleRequirement) {
    if (e.item.data.cat && req) {
      const {cat} = e.item.data;
      this.moveCategory(e, req.periodId, produce(req, draft => {
        draft.categoryIds.push(cat.id);
      }));
      this.persistUpdates();
    }
  }

  onItemDrop(e: CdkDragDrop<any, any>, to: string, toMatId?: string) {
    if (e.item.data.cat) {
      this.moveCategory(e, to, this.createSrFromCategory(toMatId)(e.item.data.cat.id, to));
    } else if (e.item.data.req) {
      const {req, fromMatId} = e.item.data;
      const type = req.entryType;
      if (type === 'CATEGORIES' || type === 'FIGHTS') {
        this.moveRequirement(e, to, req, toMatId, fromMatId);
        this.changeRequirementMatId(req, toMatId);
      }
      if (type === 'RELATIVE_PAUSE' && toMatId) {
        this.moveRequirement(e, to, req, toMatId, fromMatId);
        this.changeRequirementMatId(req, toMatId);
      }
    }
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
            this.removeRequirementFromPeriod(fromPeriod, req);
            break;
          case 'RELATIVE_PAUSE':
          case 'FIXED_PAUSE':
            this.removeRequirement(req, fromPeriod);
            break;
        }
        this.changeSelectionStatus({id: req.id, value: false});
      }
      this.persistUpdates();
    }
    this.refreshAll();
  }

  private removeRequirementFromPeriod(fromPeriod: string, req: ScheduleRequirement) {
    const period = this.getPeriodForId(fromPeriod);
    const requirement = produce(period.scheduleRequirements.find(sr => sr.id === req.id), draft => {
      draft.matId = null;
      draft.periodId = null;
    });
    this.undispatchedRequirements.add({req: requirement});
    this.periods = produce(this.periods, draft => {
      draft.find(p => p.id === fromPeriod).scheduleRequirements = period.scheduleRequirements.filter(sr => sr.id !== req.id);
    });
    this.persistUpdates();
  }

  detectChanges() {
    this.cd.markForCheck();
  }

  removeRequirement(req: ScheduleRequirement, period: Period) {
    this.periods = produce(this.periods, draft => {
      draft.find(p => p.id === period.id).scheduleRequirements = period.scheduleRequirements.filter(sr => sr.id !== req.id);
    });
    this.persistUpdates();
  }

  addPauseToPeriod(periodId: string) {
    this.modalService.open(new AddSchedulePauseModal(this.competitionId, periodId, this.timeZone, this.mats.filter(m => m.periodId === periodId)))
      .onApprove((result: IAddSchedulePauseResult) => {
        this.mats.filter(m => !!m.id && result.toMats.indexOf(m.id) >= 0)
          .forEach(mat => this.addPauseScheduleRequirementToPeriod(periodId, mat.id, result.pauseRequirement));
      });
  }

  private changeRequirementMatId(req: ScheduleRequirement, matId: string) {
    this.periods = produce(this.periods, draft => {
      draft.find(p => !!p.scheduleRequirements.find(sr => sr.id === req.id))
        .scheduleRequirements.find(sr => sr.id === req.id).matId = matId;
    });
    this.persistUpdates();
  }

  removeUndispatchedRequirement(catReq: CatReq, persist: boolean) {
    if (!this.undispatchedRequirements.delete(catReq)) {
      const tmpUnd = Array.from(this.undispatchedRequirements);
      this.undispatchedRequirements.clear();
      tmpUnd.filter(cr => cr.req.id !== catReq.req.id).forEach(cr => this.undispatchedRequirements.add(cr));
    }
    if (persist) {
      this.persistUpdates();
    }
  }

  changeSelectionStatus(event: { id: string; value: boolean }) {
    const {id, value} = event;
    if (!this.requirementEditor || !this.requirementEditor._visible) {
      if (value) {
        this._selectedReqs.add(id);
      } else {
        this._selectedReqs.delete(id);
      }
    }
  }

  mergeSelectedReqs() {
  }

  editSelectedReq() {
    if (this.requirementEditor) {
      this.requirementEditor.visible = true;
    }
    this.detectChanges();
  }

  getPeriodForId = (id) => this.periods.find(p => p.id === id);

  getPeriodFights(id: string) {
    const categories = this.getPeriodCategories(this.getPeriodForId(id)) || [];
    return categories.map(c => this.fightIdsByCategoryId[c] || []).reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
  }

  private getPeriodRequirements(id: string) {
    return this.getPeriodForId(id).scheduleRequirements;
  }

  getRequirementForIds(ids: Set<string>) {
    const allReqs = this.getAllRequirements();
    return Array.from(ids).map(id => allReqs.find(sr => sr.id === id));
  }

  private getAllRequirements() {
    if (this.periods) {
      const dispatched = this.periods.map(per => per.scheduleRequirements || [])
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
      const undispatched = Array.from(this.undispatchedRequirements).map(cr => cr.req).filter(r => !!r);
      return [...dispatched, ...undispatched];
    }
    return [];
  }

  getRequirementCategories(req: ScheduleRequirement) {
    if (req) {
      const ids = req.categoryIds || [];
      return ids.map(id => this.categories.find(cat => cat.id === id));
    }
    return [];
  }
}
