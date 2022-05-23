import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {academySelected} from "./redux/actions";
import {AppState} from "../../reducers/global-reducers";

@Injectable()
export class AcademySelectedResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const academyId = route.paramMap.get('id');
    if (academyId) {
      this.store.dispatch(academySelected({id: academyId}));
    }
    return Promise.resolve({});
  }
}
