import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {AppState} from '../../reducers/global-reducers';
import {Store} from '@ngrx/store';
import {competitionSelected} from '../../actions/actions';

@Injectable()
export class StateResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const competitionId = route.paramMap.get('id');
    this.store.dispatch(competitionSelected(competitionId));
    return Promise.resolve();
  }
}
