import {Component, OnInit} from '@angular/core';
import {HttpAuthService} from "../../service/AuthService";
import {AbstractControl, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {Transition, TransitionController, TransitionDirection} from "ng2-semantic-ui";
import {AccountState} from "../../flux/account.state";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

export function displayErrors(formGroup: FormGroup): boolean {
  let fields = Object.keys(formGroup.controls);
  for (let x in fields) {
    const field = fields[x];
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      if ((control.touched || control.dirty) && control.invalid) return true;
    } else if (control instanceof FormGroup) {
      if (this.displayErrors(control)) {
        return true;
      }
    }
  }
  return false;
}

export function regexpValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = !nameRe.test(control.value);
    return forbidden ? {'invalidRegexp': {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers:[HttpAuthService]
})
export class AuthorizationComponent implements OnInit {

  public signIn: boolean;

  public transitionController = new TransitionController();

  constructor(private store: Store<AccountState>, private router: Router) {
    this.signIn = false;
  }

  ngOnInit() {
  }


  public animate(transitionName: string = "scale") {
    this.transitionController.animate(
      new Transition(transitionName, 500, TransitionDirection.In));
  }


}
