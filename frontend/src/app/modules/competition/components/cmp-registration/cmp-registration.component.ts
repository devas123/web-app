import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../reducers/global-reducers';
import {Observable} from 'rxjs';
import {Category} from '../../../../commons/model/competition.model';
import {tap} from 'rxjs/operators';
import {selectedEvent} from "../../../event-manager/redux/event-manager-reducers";

@Component({
  selector: 'app-cmp-registration',
  templateUrl: './cmp-registration.component.html',
  styleUrls: ['./cmp-registration.component.scss']
})
export class CmpRegistrationComponent implements OnInit {

  filteredCategories$: Observable<Category[]>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.filteredCategories$ = this.store.pipe(select(selectedEvent.categoriesCollection.allCategories()), tap(x => console.log(x)));
  }

}
