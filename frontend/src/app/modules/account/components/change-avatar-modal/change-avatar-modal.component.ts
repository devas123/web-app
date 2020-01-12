
import {filter} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../reducers/global-reducers';
import {changeAvatar} from '../../flux/actions';
import {AccountState} from '../../flux/account.state';
import {selectAccountState} from '../../../competition/redux/reducers';


declare var $: any;

@Component({
  selector: '[change-avatar-modal]',
  templateUrl: './change-avatar-modal.component.html',
  styleUrls: ['./change-avatar-modal.component.css']
})
export class ChangeAvatarModalComponent implements OnInit, OnDestroy {



  avatarSrc = 'assets/images/empty.png';

  previewHidden = false;

  constructor(public sanitizer: DomSanitizer, private store: Store<AppState>) {
  }


  ngOnInit(): void {
    $('body basic.modal').remove();
    $('.basic.modal').modal('destroy');
    $('.crop').croppie('destroy');
    this.store.pipe(select(selectAccountState), filter((data: AccountState) => data.user != null && data.user.avatar != null)).subscribe((data: AccountState) => this.avatarSrc = data.user.avatar);
  }

  cropper() {
    this.previewHidden = true;
    $('.crop').croppie('destroy');
    $('.crop').croppie({
      viewport: {
        width: '300',
        height: '300',
        type: 'circle'
      },
      showZoomer: false,
      enableOrientation: true,
      boundary: {width: '550', height: '300'}
    });
    $('.basic.modal').modal('refresh');
  }


  ngOnDestroy(): void {
    console.log('destroy');
  }


  fileChange(event) {
    const self = this;
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const img = <HTMLImageElement>document.querySelector('#preview img');
      const reader = new FileReader();
      reader.onload = (function (aImg) {
        return function (e) {
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(file);
      setTimeout(function () {
        self.cropper();
      }, 500);

    }
  }

  confirmChanges() {
    const self = this;
    $('.crop').croppie('result', {type: 'blob'}).then(function (blob) {
      let arrayBuffer;
      const fileReader = new FileReader();
      fileReader.onload = function() {
        arrayBuffer = this.result;
        self.store.dispatch(changeAvatar({
          blobBase64: self._arrayBufferToBase64(arrayBuffer),
        }));
        $('.basic.modal').modal('destroy');
      };
      fileReader.readAsArrayBuffer(blob);
    });

  }

   _arrayBufferToBase64( buffer ) {
    let binary = '';
    const bytes = new Uint8Array( buffer );
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }


}
