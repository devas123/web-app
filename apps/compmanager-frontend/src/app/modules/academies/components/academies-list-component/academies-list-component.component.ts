import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FullAcademyInfo, PageInfo} from "@frontend-nx/protobuf";

@Component({
  selector: 'compmanager-frontend-academies-list-component',
  template: `
    <compmanager-frontend-common-container-with-pagination *ngIf="academies && academies.length > 0">
      <compmanager-frontend-academy-card *ngFor="let academy of academies"
                                         [editMode]="true"
                                         [fullAcademyInfo]="academy"></compmanager-frontend-academy-card>
      <compmanager-frontend-common-pagination pagination
        [collectionSize]="pageInfo.total"
        [pageSize]="resultsOnPage"
        [pageNumber]="pageInfo.page"
        (pageChanged)="selectPage.next($event)"
      ></compmanager-frontend-common-pagination>
    </compmanager-frontend-common-container-with-pagination>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademiesListComponentComponent {

  @Input()
  academies: FullAcademyInfo[]

  @Input()
  pageInfo: PageInfo

  @Output()
  selectPage = new EventEmitter<number>();

  get resultsOnPage() {
    if (this.pageInfo.resultsOnPage > 0) {
      return this.pageInfo.resultsOnPage;
    }
    if (this.pageInfo.total > 0) {
      return this.pageInfo.total;
    }
    return this.pageInfo.resultsOnPage
  }

  constructor() {
  }

}
