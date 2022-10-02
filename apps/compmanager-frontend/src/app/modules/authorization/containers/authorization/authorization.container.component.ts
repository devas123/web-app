import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TransitionController} from '@frontend-nx/ng2-semantic-ui';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AccountState} from "../../../account/flux/account.state";
import {Account} from "@frontend-nx/protobuf";
import {HttpAuthService} from "../../../account/service/AuthService";
import {tap} from "rxjs/operators";
import {authorizeUser} from "../../../account/flux/actions";

export function displayErrors(formGroup: FormGroup): boolean {
  const fields = Object.keys(formGroup.controls);
  for (const x in fields) {
    const field = fields[x];
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      if ((control.touched || control.dirty) && control.invalid) { return true; }
    } else if (control instanceof FormGroup) {
      if (this.displayErrors(control)) {
        return true;
      }
    }
  }
  return false;
}

@Component({
  selector: 'cf-authorization',
  templateUrl: './authorization.container.component.html',
  styleUrls: ['./authorization.container.component.css'],
})
export class AuthorizationContainerComponent {
  public signIn: boolean;
  public transitionController = new TransitionController();
  public processing = false;
  public error: string;

  constructor(private store: Store<AccountState>, private router: Router, private authService: HttpAuthService) {
    this.signIn = false;
  }

  signUp(user: Account) {
    this.authService.registerUser(user).pipe(tap(() => {
      this.store.dispatch(authorizeUser({email: user.email, password: user.password}));
    })).subscribe(data => this.processing = false, error2 => {
      this.processing = false;
      this.error = error2;
    });
  }
}
