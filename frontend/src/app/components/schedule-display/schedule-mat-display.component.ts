import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Period, ScheduleEntry} from '../../commons/model/competition.model';
import {MatDescription} from '../../reducers/global-reducers';

@Component({
  selector: 'app-schedule-mat-display',
  template: `
    <div class="inner-list list-container mat-grid margin-horizontal"
         [ngClass]="{'single-mat': mats?.length === 1}">
      <div *ngFor="let mat of mats" class="mat-container" [ngClass]="{'single-mat': mats?.length === 1}">
        <p>{{mat.name}}</p>
        <div class="inner-list">
          <div class="item schedule_page flex-container clickable"
               (mouseenter)="highlightCategory(mfs.categoryIds)"
               (mouseleave)="clearCategoryHighLight(mfs.categoryIds)"
               [ngClass]="{group_selected: isCategorySelected(mfs.categoryIds)}"
               *ngFor="let mfs of getMatEntries(mat.id)">
            <ng-container *ngIf="mfs.entryType !== 'RELATIVE_PAUSE'">
              <span *ngFor="let cat of mfs.categoryIds">{{categoryFormat(cat)}}</span>
              <span>{{mfs.fightIds?.length}} fights</span>
            </ng-container>
          </div>
        </div>
        <section>{{mat.fightStartTimes?.length}} fights</section>
      </div>
    </div>
  `,
  styleUrls: ['schedule-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleMatDisplayComponent {

  @Input()
  mats: MatDescription[];


  @Input()
  scheduleEntries: ScheduleEntry[];


  @Input()
  period: Period;

  @Input()
  categoryFormat: (id: string) => string;

  @Input()
  timeZone: string;

  @Input()
  matFormat: (id: string) => string;

  @Input()
  highlightedCategories: Set<string>;

  @Output()
  categoryMouseEnter = new EventEmitter<string[]>();

  @Output()
  categoryMouseLeave = new EventEmitter<string[]>();

  @Output()
  categoryClicked = new EventEmitter<string>();

  getMatEntries(matId) {
    return this.scheduleEntries?.filter(e => e.matId === matId && e.entryType !== 'RELATIVE_PAUSE' && e.entryType !== 'FIXED_PAUSE');
  }


  getEntryStyle(req: ScheduleEntry) {
    return (req.color && `border: 2px solid ${req.color}`) || '';
  }


  highlightCategory(categoryId: string[]) {
    this.categoryMouseEnter.next(categoryId);
  }

  clearCategoryHighLight(categoryId: string[]) {
    this.categoryMouseLeave.next(categoryId);
  }

  goToCategoryEditor(categoryId: string) {
    this.categoryClicked.next(categoryId);
  }

  isCategorySelected(categoryIds: string[]) {
    categoryIds?.find(cat => this.highlightedCategories.has(cat));
  }
}
