import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpAuthService} from '../service/AuthService';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {accountError, AUTHORIZE_TOKEN, AUTHORIZE_USER, CHANGE_AVATAR, USER_AUTHORIZED, userAuthorized} from './actions';


import {CommonAction} from '../../../reducers/global-reducers';
import {AccountService} from '../service/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Account} from "@frontend-nx/protobuf";
import {setToken} from "../../../service/abstract.http.service";


@Injectable()
export class AccountEffects {

  @Effect({dispatch: false})
  userAuthorized = this.actions$.pipe(ofType(USER_AUTHORIZED), switchMap((action: CommonAction) => {
    return this.route.queryParams.pipe(map(params => {
      if (params['returnUrl']) {
        this.router.navigateByUrl(params['returnUrl']);
      } else if (this.router.routerState.snapshot.url === '/login') {
        this.router.navigate(['/user', action?.payload?.userId]);
      }
    }));
  }));

  @Effect()
  authorizeUser: Observable<Action> = this.actions$.pipe(ofType(AUTHORIZE_USER), mergeMap((action: CommonAction) => {
    return this.authService.requestToken(action?.payload?.email, action?.payload?.password).pipe(tap(token => {
      setToken(token.token);
    }), switchMap(() => {
      return this.authService.getCurrentUser();
    }), map((user: Account) => userAuthorized(user)), catchError(err => of(accountError(err))));
  }));

  @Effect()
  authorizeToken: Observable<Action> = this.actions$.pipe(ofType(AUTHORIZE_TOKEN),
    mergeMap((action: CommonAction) => {
      setToken(action.payload)
      return this.authService.getCurrentUser().pipe(map(user => userAuthorized(user)));
    }));

  constructor(private authService: HttpAuthService, private accountService: AccountService, private router: Router, private actions$: Actions, private route: ActivatedRoute) {

  }


  @Effect({dispatch: false})
  changeAvatar = this.actions$.pipe(ofType(CHANGE_AVATAR), switchMap((action: CommonAction) => this.accountService.changeAvatar(action.payload.blobBase64)), catchError(err => of(accountError(err))));
}
