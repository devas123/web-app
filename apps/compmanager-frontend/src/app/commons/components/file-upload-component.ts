import {Component, Input} from "@angular/core";
import {Subscription} from "rxjs";
import {InfoService} from "../../service/info.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'cf-file-upload',
  template: `
    <div class="ui input">
      <input type="file"
             [accept]="requiredFileType"
             (change)="onFileSelected($event)" #fileUpload>
    </div>

    <div class="file-upload">

      {{fileName || "No file uploaded yet."}}

      <compmanager-frontend-submit-button [name]="'Upload'"
                                          (click)="onFileSelected(fileUpload.files)"></compmanager-frontend-submit-button>

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

  fileName = '';
  uploadProgress: number;
  uploadSub: Subscription;

  constructor(private infoService: InfoService) {
  }

  onFileSelected(files) {
    const file: File = files[0];
    console.log(files)
    if (file) {

      const upload$ = this.infoService.saveCompetitionInfoImage(this.competitionId, file).pipe(
        finalize(() => this.reset())
      );

      this.uploadSub = upload$.subscribe(event => this.uploadProgress = event)
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}
