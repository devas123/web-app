
import {mergeMap, map, catchError, tap, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpAuthService} from '../service/AuthService';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {accountError, AUTHORIZE_TOKEN, AUTHORIZE_USER, CHANGE_AVATAR, USER_AUTHORIZED, userAuthorized} from './actions';






import {CommonAction} from '../../../reducers/global-reducers';
import {AccountService} from '../service/account.service';
import {Account} from '../model/Account';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable()
export class AccountEffects {

  @Effect({dispatch: false})
  userAuthorized = this.actions$.pipe(ofType(USER_AUTHORIZED), tap((action: CommonAction) => {
    this.route.queryParams.subscribe(params => {
      if (params['returnUrl']) {
        this.router.navigateByUrl(params['returnUrl']);
      } else if (this.router.routerState.snapshot.url === '/login') {
        this.router.navigate(['/user', action.payload.userId]);
      }
    });
  }));

  @Effect()
  authorizeUser: Observable<Action> = this.actions$.pipe(ofType(AUTHORIZE_USER), mergeMap((action: CommonAction) => {
    return this.authService.requestToken(action.payload.email, action.payload.password).pipe(tap(token => {
      HttpAuthService.setToken(token.access_token);
    }), switchMap(token => {
      return this.authService.getCurrentUser(token.access_token);
    }), map((user: Account) => userAuthorized(user)), catchError(err => of(accountError(err))), );
  }));

  @Effect()
  authorizeToken: Observable<Action> = this.actions$.pipe(ofType(AUTHORIZE_TOKEN), mergeMap((action: CommonAction) => {
    return this.authService.getCurrentUser(action.payload).pipe(map(user => userAuthorized(user)));
  }));

  constructor(private authService: HttpAuthService, private accountService: AccountService, private router: Router, private actions$: Actions, private route: ActivatedRoute) {

  }


  @Effect({dispatch: false})
  changeAvatar = this.actions$.pipe(ofType(CHANGE_AVATAR), tap((action: CommonAction) => {
    this.accountService.changeAvatar(action.payload.blobBase64).subscribe(data => data, error2 => {
      console.error(error2);
    });
  }), catchError(err => of(accountError(err))), );
}
