import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {authorizeToken} from "../modules/account/flux/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private store: Store<AppState>) {

  }


  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.store.dispatch(authorizeToken(localStorage.getItem("token")))
    }
  }
}
