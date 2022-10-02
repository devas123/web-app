import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppState, selectAccountState} from '../../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {AccountState} from "../../../../account/flux/account.state";
import {authorizeUser} from "../../../../account/flux/actions";

@Component({
  selector: 'cf-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {


  form: FormGroup;

  public error: string;

  @Output()
  public notify: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.createForm();
  }

  displayErrorList() {
    return false;
  //  return displayErrors(this.form)
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required]],
      password: ['', [
        Validators.required]],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  ngOnInit() {
    this.store.pipe(select(selectAccountState)).subscribe((state: AccountState) => {
      if (state.error) {
        this.error = state.error;
      }
    });
  }


  onClick() {
    this.notify.emit(false);
  }



  authorize() {
    const password = this.password.value;
    const email = this.email.value;
    this.store.dispatch(authorizeUser({email: email, password: password}));
  }
}
