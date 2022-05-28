import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FullAcademyInfo, PageInfo} from "@frontend-nx/protobuf";

@Component({
  selector: 'compmanager-frontend-academies-list-component',
  template: `
    <compmanager-frontend-common-container-with-pagination *ngIf="academies && academies.length > 0">
      <compmanager-frontend-academy-card *ngFor="let academy of academies"
                                         (editClicked)="academySelected.next(academy.id)"
                                         (deleteClicked)="sendDeleteAcademyCommand(academy.id)"
                                         [editMode]="true"
                                         [fullAcademyInfo]="academy"></compmanager-frontend-academy-card>
      <compmanager-frontend-common-pagination
        [collectionSize]="pageInfo.total"
        [pageSize]="resultsOnPage"
        [pageNumber]="pageInfo.page"
        (pageChanged)="changePage($event)"
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
  selectPage = new EventEmitter<PageInfo>();

  @Output()
  deleteAcademy = new EventEmitter<string>();

  @Output()
  academySelected = new EventEmitter<string>();

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

  sendDeleteAcademyCommand(id: string) {
    this.deleteAcademy.next(id)
  }

  changePage(page: number) {
    this.selectPage.next({...this.pageInfo, page});
  }
}
