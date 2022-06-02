import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {SuiPagination} from "@frontend-nx/ng2-semantic-ui";

@Component({
  selector: 'compmanager-frontend-common-pagination',
  template: `
    <sui-pagination [collectionSize]="collectionSize"
                    [pageSize]="pageSize"
                    [maxSize]="4"
                    [page]="pageNumber"
                    [hasEllipses]="true"
                    (pageChange)="selectPage($event)" #pagination>
    </sui-pagination>
    <div class="total">Total: {{collectionSize}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonPaginationComponent {
  @Input()
  collectionSize: number
  @Input()
  pageSize: number
  @Input()
  pageNumber: number
  @Output()
  pageChanged = new EventEmitter<number>();

  selectPage(page: number) {
    this.pageChanged.next(page);
  }

  _pagination: SuiPagination;
  @ViewChild('pagination')
  set pagination(value: SuiPagination) {
    if (value) {
      this._pagination = value;
      this._pagination.setPage(this.pageNumber);
    }
  }
}
