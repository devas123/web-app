import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Account} from "@frontend-nx/protobuf";


@Component({
  selector: 'cf-sign-up-gg',
  template: `
    <form class="ui large form" [formGroup]="userForm"
          [ngClass]="{error: error || (userForm.touched || userForm.dirty) && (userForm.invalid || password.value !== confirmPassword.value)}">
      <div class="ui stacked segment">
        <div class="ui  dimmer" [ngClass]="{active: processing}">
          <div class="ui loader"></div>
        </div>


        <div class="two fields ">
          <div class="field" [ngClass]="{error: firstName.invalid && (firstName.dirty || firstName.touched)}">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input id="firstName" type="text" placeholder="First name" formControlName="firstName" required>
            </div>
          </div>

          <div class="field" [ngClass]="{error: lastName.invalid && (lastName.dirty || lastName.touched)}">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="Last name" formControlName="lastName">
            </div>

          </div>
        </div>

        <div class="field" [ngClass]="{error: email.invalid && (email.dirty || email.touched)}">
          <div class="ui left icon input">
            <i class="at icon"></i>
            <input type="text" placeholder="E-mail  address" formControlName="email">
          </div>
        </div>

        <div class="two fields" formGroupName="passwords">
          <div class="field" [ngClass]="{error: password.invalid && (password.dirty || password.touched)}">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="Password" formControlName="password">
            </div>
          </div>


          <div class="field"
               [ngClass]="{error: password.value !== confirmPassword.value && (confirmPassword.dirty || confirmPassword.touched)}">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="confirmPassword" placeholder="Confirm password"
                     formControlName="confirmPassword">
            </div>
          </div>
        </div>
        <div class="ui fluid middle positive submit button" (click)="createUser()"
             [ngClass]="{disabled: userForm.invalid || password.value !== confirmPassword.value}">
          Register
        </div>

        <div class="ui error message" *ngIf="displayErrorList() || error">
          <ul class="list">
            <li *ngIf="firstName.invalid && firstName.errors.required && (firstName.dirty || firstName.touched)">Please
              enter your first name.
            </li>
            <li *ngIf="lastName.invalid && lastName.errors.required && (lastName.dirty || lastName.touched)">Please
              enter
              your last name.
            </li>
            <li *ngIf="password.invalid && password.errors.required && (password.touched || password.dirty)">Please
              enter
              your password
            </li>
            <ng-container *ngIf="email.invalid && (email.dirty || email.touched)">
              <li *ngIf="email.errors.required">E-mail is required.</li>
              <li *ngIf="!email.errors.required && email.errors.invalidRegexp">Please enter a valid e-mail address. For
                example bob@gmail.com.
              </li>
            </ng-container>
            <li *ngIf="password.invalid && password.errors.minlength && (password.touched || password.dirty)">Password
              should be at least 6 characters long.
            </li>
            <li *ngIf="password.value !== confirmPassword.value && (confirmPassword.dirty || confirmPassword.touched)">
              Passwords do not match.
            </li>
            <li *ngIf="error && error !== null">{{error}}</li>
          </ul>
        </div>
      </div>
    </form>
    <div class="ui bottom attached  message">
      Already have account? &nbsp;&nbsp;
      <button class="ui primary middle basic button" (click)="onClick()">Sign In</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {

  regexpValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = !nameRe.test(control.value);
      return forbidden ? {'invalidRegexp': {value: control.value}} : null;
    };
  }


  @Output()
  public notify: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public signUp: EventEmitter<Account> = new EventEmitter();


  userForm: FormGroup;

  @Input()
  error: string;

  @Input()
  processing: boolean;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
        firstName: ['', [
          Validators.required,
          Validators.maxLength(20)]],
        lastName: ['', [
          Validators.required,
          Validators.maxLength(20)]],
        email: ['', [
          Validators.required,
          Validators.email,
          this.regexpValidator(/[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
        ]],
        passwords: this.fb.group({
          password: ['', [Validators.required,
            Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required]]
        })
      }
    );

  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get(['passwords', 'password']);
  }

  get confirmPassword() {
    return this.userForm.get(['passwords', 'confirmPassword']);
  }

  displayErrorList() {
    return false;
    // return displayErrors(this.userForm)
  }


  createUser() {
    const user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value
    } as Account;

    this.error = null;
    this.processing = true;
    this.signUp.emit(user);
  }

  onClick() {
    this.notify.emit(true);
  }

}
