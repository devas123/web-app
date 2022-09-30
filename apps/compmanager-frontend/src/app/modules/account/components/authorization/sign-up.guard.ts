import {Observable, of as observableOf} from 'rxjs';
import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import {select, Store} from '@ngrx/store';
import {AppState, selectUser} from '../../../../reducers/global-reducers';
import {getToken} from "../../../../service/abstract.http.service";

@Injectable()
export class SignUpGuard implements CanActivate, CanActivateChild, CanLoad {


  canLoad(route: Route): Observable<boolean> {
    return observableOf(this.checkLogin());
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

  constructor(private router: Router, private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return observableOf(this.checkLogin());
  }

  checkLogin(): boolean {
    if (getToken() && getToken().length > 0) {
      this.store.pipe(select(selectUser)).subscribe(s => s && s.userId && this.router.navigate(['/user', s.userId]));
      return false;
    }
    return true;
  }

}
