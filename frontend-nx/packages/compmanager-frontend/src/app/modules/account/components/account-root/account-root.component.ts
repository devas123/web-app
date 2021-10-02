import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-root',
  template: `
    <router-outlet></router-outlet>`
})
export class AccountRootComponent implements OnInit, OnDestroy {

  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
