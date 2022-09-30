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

import {AppState} from '../../reducers/global-reducers';
import {Store} from '@ngrx/store';
import {getToken} from "../../service/abstract.http.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {


  canLoad(route: Route): Observable<boolean> {
    const url = location.pathname;
    return observableOf(this.checkLogin(url));
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

  constructor(private router: Router, private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return observableOf(this.checkLogin(state.url));
  }

  checkLogin(url: string): boolean {
    if (getToken() && getToken().length > 0) {
      console.log("Checklogin success")
      // logged in so return true
      return true;
    }
    console.log("Checklogin fail")
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: url }});
    return false;
  }

}
