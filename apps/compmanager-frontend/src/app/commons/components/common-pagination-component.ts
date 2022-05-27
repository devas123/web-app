import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'compmanager-frontend-common-pagination',
  template: `
    <sui-pagination [collectionSize]="collectionSize"
                    [pageSize]="pageSize"
                    [maxSize]="5"
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
}
