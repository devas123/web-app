import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Subscription} from "rxjs";
import {filter, finalize, map, switchMap} from "rxjs/operators";
import {PictureUploadService} from "../../service/picture.upload.service";
import {InfoService} from "../../service/info.service";
import {fromPromise} from "rxjs/internal-compatibility";

@Component({
  selector: 'cf-file-upload',
  template: `
    <div class="ui input">
      <input type="file"
             [accept]="requiredFileType"
             (change)="onFileSelected($event)" #fileUpload>
    </div>

    <div class="file-upload">
      <p></p>
      <div class="ui buttons_row">
        <compmanager-frontend-submit-button [name]="'Upload'" [disabled]="!fileUpload?.files[0]"
                                            (click)="onFileSelected(fileUpload.files)"></compmanager-frontend-submit-button>
        <compmanager-frontend-button [disabled]="disableDeleteButton" [name]="'Delete'"
                                     (click)="onImageRemoveClicked()"></compmanager-frontend-button>
      </div>
    </div>

    <div class="progress">

      <sui-progress class="progress-bar"
                    [value]="uploadProgress" *ngIf="uploadProgress">

      </sui-progress>

      <compmanager-frontend-link-icon [iconClass]="'stop circle'" class="cancel-upload" (click)="cancelUpload()"
                                      *ngIf="uploadProgress">Stop
      </compmanager-frontend-link-icon>

    </div>`,
})
export class FileUploadComponent {

  @Input()
  requiredFileType: string;

  @Input()
  competitionId: string;

  @Input()
  disableDeleteButton: boolean;

  @Output()
  uploadFinished: EventEmitter<ArrayBuffer> = new EventEmitter<ArrayBuffer>();

  @Output()
  imageRemoved: EventEmitter<void> = new EventEmitter<void>();

  fileName = '';
  uploadProgress: number;
  uploadSub: Subscription;

  constructor(private pictureUploadService: PictureUploadService) {
  }

  onFileSelected(files) {
    const file: File = files[0];
    if (file) {

      let fileAsByteArray = InfoService.getFileAsByteArray(file);
      const upload$ = fromPromise(fileAsByteArray).pipe(
        filter(res => res instanceof ArrayBuffer),
        map(res => res as ArrayBuffer),
        switchMap(array => this.pictureUploadService.saveCompetitionInfoImage(this.competitionId, array).pipe(
            finalize(() => this.reset(array))
          )
        )
      );

      this.uploadSub = upload$.subscribe(event => this.uploadProgress = event)
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset(image?: ArrayBuffer) {
    this.uploadProgress = null;
    this.uploadSub = null;
    if (Boolean(image)) {
      this.uploadFinished.next(image);
    }
  }

  onImageRemoveClicked() {
    if (!this.disableDeleteButton) {
      this.pictureUploadService.deleteCompetitionInfoImage(this.competitionId).pipe(
        finalize(() => this.imageRemoved.next())
      ).subscribe()
    }
  }
}
