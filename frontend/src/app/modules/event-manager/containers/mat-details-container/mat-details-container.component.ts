import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-mat-details-container',
  templateUrl: './mat-details-container.component.html',
  styleUrls: ['./mat-details-container.component.css']
})
export class MatDetailsContainerComponent implements OnInit, OnDestroy {

  subs = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
