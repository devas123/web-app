import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountState} from "../../../../account/flux/account.state";

export interface SignInData {
  email: string,
  password: string
}

@Component({
  selector: 'cf-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {


  form: FormGroup;


  @Input()
  accountState: AccountState

  @Output()
  public notify: EventEmitter<boolean> = new EventEmitter();

  @Output()
  signIn = new EventEmitter<SignInData>();

  constructor(private fb: FormBuilder) {
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


  onClick() {
    this.notify.emit(false);
  }


  authorize() {
    const password = this.password.value;
    const email = this.email.value;
    this.signIn.next({email: email, password: password});
  }
}
