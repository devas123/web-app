import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Schedule} from '../../../../reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PeriodProperties, ScheduleProperties} from '../../redux/event-manager-reducers';
import {Category} from '../../../../commons/model/competition.model';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import {ActivatedRoute, Router} from '@angular/router';


export interface IContext {
  data: string;
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
  competitionId: string;

  @Input()
  schedule: Schedule;

  @Input()
  scheduleProperties: ScheduleProperties;

  @Input()
  categories: Category[];

  @Input()
  showEditor;

  periodForm: FormGroup;

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

  categoriesGroup = 'CATEGORIES';

  @ViewChild('modalTemplate', {static: false})
  public modalTemplate: ModalTemplate<IContext, string, string>;

  constructor(private fb: FormBuilder, public modalService: SuiModalService, private router: Router, private route: ActivatedRoute) {
  }

  goToCategoryEditor(categoryId: string) {
    this.router.navigate(['..', 'categories', categoryId], {
      relativeTo: this.route
    }).catch(error => console.error('Navigation failed', error));
  }


  get numberOfMats() {
    return this.periodForm.get('numberOfMats');
  }

  get timeBetweenFights() {
    return this.periodForm.get('timeBetweenFights');
  }

  get riskPercent() {
    return this.periodForm.get('riskPercent');
  }

  get periodName() {
    return this.periodForm.get('periodName');
  }

  get periodStartTime() {
    return this.periodForm.get('periodStartTime');
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

  public openModal(dynamicContent: string = 'Period properties') {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);


    config.closeResult = 'closed!';
    config.context = {data: dynamicContent};

    this.periodForm = this.fb.group({
      periodName: ['', [Validators.required]],
      periodStartTime: ['', [Validators.required]],
      numberOfMats: [1, [Validators.required, Validators.min(0), Validators.max(99)]],
      timeBetweenFights: [1, [Validators.required, Validators.min(0), Validators.max(99)]],
      riskPercent: [0.1, [Validators.min(0), Validators.max(1)]]
    });

    this.modalService
      .open(config)
      .onApprove(() => {
        const periodProperties = {
          id: '',
          name: this.periodName.value,
          startTime: this.periodStartTime.value,
          numberOfMats: this.numberOfMats.value,
          timeBetweenFights: this.timeBetweenFights.value,
          riskPercent: this.riskPercent.value,
          categories: [] as Category[]
        } as PeriodProperties;
        if (periodProperties) {
          this.periodAdded.next(periodProperties);
        }
        this.periodForm.reset();
      });
  }

  onItemDrop(e: any, to: string) {
    // Get the dropped data here
    const {id, cat} = e.dragData;
    const index = e.index;
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
