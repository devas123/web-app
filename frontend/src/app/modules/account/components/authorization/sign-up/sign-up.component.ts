
import {tap} from 'rxjs/operators';
import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {flyOut} from '../../../../../animations/flyOut';
import {HttpAuthService} from '../../../service/AuthService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {regexpValidator} from '../authorization.component';




import {Transition, TransitionController, TransitionDirection} from 'ng2-semantic';
import {Store} from '@ngrx/store';
import {authorizeUser} from '../../../flux/actions';
import {Router} from '@angular/router';
import {Account} from '../../../model/Account';
import {AppState} from '../../../../../reducers/global-reducers';

declare var $: any;


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [flyOut]
})
export class SignUpComponent implements OnInit, OnDestroy {


  @Output()
  public notify: EventEmitter<boolean> = new EventEmitter();

  userForm: FormGroup;

  error: string;

  processing: boolean;

  public transitionController;

  constructor(private authService: HttpAuthService, private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
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
          regexpValidator(/[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
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

  ngOnInit() {
    this.transitionController = new TransitionController();
    this.animate('fly left');
  }

  ngOnDestroy(): void {

  }

  createUser() {
    const user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      password: this.password.value,
      email: this.email.value
    } as Account;

    this.error = null;
    this.processing = true;
    this.authService.registerUser(user).pipe(tap(() => {
      this.store.dispatch(authorizeUser({email: user.email, password: user.password}));
    })).subscribe(data => this.processing = false, error2 => {
      this.processing = false;
      this.error = error2;
      $('.shaked').transition('shake');
    });
  }

  onClick() {
    this.notify.emit(true);
  }


  public animate(transitionName: string = 'scale', transitionDirection = TransitionDirection.In) {
    this.transitionController.animate(
      new Transition(transitionName, 500, transitionDirection));

  }

}
