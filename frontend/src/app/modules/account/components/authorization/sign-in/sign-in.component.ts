import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {flyOut} from '../../../../../animations/flyOut';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Transition, TransitionController, TransitionDirection} from 'ng2-semantic';
import {selectAccountState} from '../../../../../reducers';
import {select, Store} from '@ngrx/store';
import {authorizeUser} from '../../../flux/actions';
import {AccountState} from '../../../flux/account.state';

declare var $: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [flyOut]
})
export class SignInComponent implements OnInit, OnDestroy {


  form: FormGroup;

  public transitionController = new TransitionController();

  public error: string;

  @Output()
  public notify: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store<AccountState>) {
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
    this.animate('fly right');
    this.store.pipe(select(selectAccountState)).subscribe((state: AccountState) => {
      if (state.error) {
        this.error = state.error;
        $('.shaked').transition('shake');
      }

    });
  }

  ngOnDestroy(): void {
    this.animate('fly left');
  }


  onClick() {
    this.notify.emit(false);

  }

  public animate(transitionName: string = 'scale') {
    this.transitionController.animate(
      new Transition(transitionName, 500, TransitionDirection.In));
  }


  authorize() {
    const password = this.password.value;
    const email = this.email.value;
    this.store.dispatch(authorizeUser({email: email, password: password}));
  }
}
