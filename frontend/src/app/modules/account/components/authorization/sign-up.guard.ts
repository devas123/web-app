
import {of as observableOf, Observable} from 'rxjs';
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
import {HttpAuthService} from '../../service/AuthService';
import {AppState} from '../../../../reducers';
import {selectUser} from '../../../competition/redux/reducers';

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
    if (HttpAuthService.getToken() && HttpAuthService.getToken().length > 0) {
      this.store.pipe(select(selectUser)).subscribe(s => s && s.userId && this.router.navigate(['/user', s.userId]));
      return false;
    }
    return true;
  }

}
