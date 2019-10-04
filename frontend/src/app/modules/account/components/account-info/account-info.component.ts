
import {filter} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AccountState} from '../../flux/account.state';
import {select, Store} from '@ngrx/store';
import {AppState, selectAccountState} from '../../../../reducers';
import {Account} from '../../model/Account';

declare var $: any;

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit, OnDestroy {


  avatarSrc = 'assets/images/empty.png';
  public user: Account;

  constructor(public sanitizer: DomSanitizer, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.pipe(select(selectAccountState), filter((data: AccountState) => data.user != null)).subscribe((data: AccountState) => {
      this.avatarSrc = data.user.avatar || this.avatarSrc;
      this.user = data.user;
    });
  }

  ngOnDestroy(): void {
    $('.basic.modal').modal('destroy');
    $('body basic.modal').remove();
    $('.crop').croppie('destroy');
  }


  openModal() {
    const modal = $('.basic.modal').modal({
      blurring: true,
      centered: true,
      detachable: false,
      observeChanges: true,
      onShow: function () {
        $('.basic.modal').modal('refresh');
      }
    });
    modal.modal('show');
    setTimeout(function () {
      $('.basic.modal').modal('refresh');
      $('basic.modal').remove();
    }, 1000);
  }
}
