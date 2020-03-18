import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDescription, Schedule} from '../../../../reducers/global-reducers';
import {Category, Period} from '../../../../commons/model/competition.model';
import {SuiModalService} from 'ng2-semantic';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {AddSchedulePeriodModal, IAddSchedulePeriodResult} from '../../containers/schedule-editor-container/add-shedule-period-form.component';

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
  categoryMoved = new EventEmitter<{ from: string, to: string, category: Category, index?: number }>();

  filteredCategories = [] as Category[];

  @Input()
  private periods: Period[];


  constructor(public modalService: SuiModalService) {
  }


  categoryName(cat: string) {
    return AddFighterComponent.displayCategory(this.categories.find(c => c.id === cat));
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

  public openModal() {
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

  onItemDropBack(e: CdkDragDrop<Category[]>) {
    // Get the dropped data here
    const {id, cat} = e.item.data;
    const index = e.currentIndex;
    this.categoryMoved.next({
      category: cat,
      from: id,
      to: null,
      index
    });
  }

  onItemDrop(e: CdkDragDrop<String[]>, to: string) {
    // Get the dropped data here
    const {id, cat} = e.item.data;
    const index = e.currentIndex;
    this.categoryMoved.next({
      category: this.categories.find(c => c.id === cat),
      from: id,
      to,
      index
    });
  }

  ngOnInit() {
    this.refreshAll();
  }

  refreshAll() {
    this.refreshFilteredCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshFilteredCategories();
  }

  refreshFilteredCategories() {
    if (this.categories && this.periods) {
      const distributedCategories = this.periods.map(p => p.categories)
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
        .filter(c => !!c);
      this.filteredCategories = this.categories.filter(cat => distributedCategories.indexOf(cat.id) < 0);
    } else {
      this.filteredCategories = this.categories || [];
    }
  }
}
