import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Schedule} from '../../../../reducers';
import {PeriodProperties, ScheduleProperties} from '../../redux/event-manager-reducers';
import {Category} from '../../../../commons/model/competition.model';
import {SuiModalService} from 'ng2-semantic';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import {ActivatedRoute, Router} from '@angular/router';
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
  scheduleProperties: ScheduleProperties;

  @Input()
  categories: Category[];

  @Input()
  showEditor;

  @Output()
  scheduleDropped = new EventEmitter<string>();

  @Output()
  periodAdded = new EventEmitter<PeriodProperties>();

  @Output()
  periodRemoved = new EventEmitter<string>();

  @Output()
  generateSchedule = new EventEmitter<ScheduleProperties>();

  @Output()
  categoryMoved = new EventEmitter<{ from: string, to: string, category: Category, index?: number }>();

  filteredCategories = [] as Category[];


  constructor(public modalService: SuiModalService, private router: Router, private route: ActivatedRoute) {
  }

  goToCategoryEditor(categoryId: string) {
    this.router.navigate(['..', 'categories', categoryId], {
      relativeTo: this.route
    }).catch(error => console.error('Navigation failed', error));
  }

  categoryName(cat: Category) {
    return AddFighterComponent.displayCategory(cat);
  }

  sendGenerateSchedule() {
    const scheduleProps = {
      ...this.scheduleProperties,
      competitionId: this.competitionId
    } as ScheduleProperties;
    this.generateSchedule.next(scheduleProps);
  }

  removePeriod(p: PeriodProperties) {
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
        const periodProperties = result.properties;
        if (periodProperties) {
          this.periodAdded.next(periodProperties);
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

  onItemDrop(e: CdkDragDrop<Category[]>, to: string) {
    // Get the dropped data here
    const {id, cat} = e.item.data;
    const index = e.currentIndex;
    this.categoryMoved.next({
      category: cat,
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
    if (this.categories && this.scheduleProperties) {
      const distributedCategories = this.scheduleProperties.periodPropertiesList.map(p => p.categories)
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
        .filter(c => !!c && c.id != null)
        .map(c => c.id);
      this.filteredCategories = this.categories.filter(cat => distributedCategories.indexOf(cat.id) < 0);
    } else {
      this.filteredCategories = this.categories || [];
    }
  }
}
