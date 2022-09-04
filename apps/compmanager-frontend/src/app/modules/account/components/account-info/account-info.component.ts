import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AccountState} from '../../flux/account.state';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html'
})
export class AccountInfoComponent implements OnChanges, OnInit {

  defaultAvatarSrc = 'assets/images/empty.png';

  @Input()
  public accountState: AccountState;


  form: FormGroup

  constructor(public sanitizer: DomSanitizer, private fb: FormBuilder) {

  }

  get userId() {
    return this.form.get('userId') as FormControl
  }

  get email() {
    return this.form.get('email') as FormControl
  }

  get firstName() {
    return this.form.get('firstName') as FormControl
  }

  get lastName() {
    return this.form.get('lastName') as FormControl
  }

  get password() {
    return this.form.get('password') as FormControl
  }

  get avatar() {
    return this.form.get('avatar') as FormControl
  }

  ngOnInit() {
    this.createFormGroup(this.accountState);
  }

  private createFormGroup(accountState: AccountState) {
    this.form = this.fb.group({
      userId: [accountState?.user?.userId, [Validators.required]],
      email: [accountState?.user?.email, [Validators.required]],
      firstName: [accountState?.user?.firstName, [Validators.required]],
      lastName: [accountState?.user?.lastName, [Validators.required]],
      password: ['', [Validators.required]],
      avatar: ['', []],
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.firstChange && changes.accountState) {
      this.createFormGroup(changes.accountState.currentValue);
    } else if (this.accountState && this.form) {
      this.form.patchValue(
        {
          userId: this.accountState?.user?.userId,
          email: this.accountState?.user?.email,
          firstName: this.accountState?.user?.firstName,
          lastName: this.accountState?.user?.lastName,
          password: '',
          avatar: '',
        }
      );
    }
  }

  submitForm() {}


  openModal() {
  }
}
