import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";
import {CommandType} from "@frontend-nx/protobuf";
import {InfoService} from "../../../service/info.service";
import {academiesLoaded, academyLoaded, LOAD_ACADEMIES, LOAD_ACADEMY} from "./actions";
import {executeErrorCallbacks, executeSuccessCallbacks} from "../../../reducers/compmanager-utils";
import {batchAction} from "../../event-manager/redux/event-manager-actions";

@Injectable()
export class AcademiesEffects {
  forwardAddAcademyCommand$ = createEffect(() => this.actions$.pipe(
    ofType(CommandType.ADD_ACADEMY_COMMAND, CommandType.REMOVE_ACADEMY_COMMAND),
    concatMap((action: any) => {
      const command = InfoService.createCommandWithPayload(action);
      return this.infoService
        .sendCommandSync(command)
        .pipe(
          tap(executeSuccessCallbacks(action)),
          map((actions) => batchAction({actions})),
          catchError(executeErrorCallbacks(action))
        );
    }))
  )

  loadAcademies$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_ACADEMIES),
    switchMap((action: any) => {
      return this.infoService
        .loadAcademies(action.pageInfo, action.searchString)
        .pipe(
          mergeMap(({academies, pageInfo}) => of(academiesLoaded({academies, pageInfo})))
        );
    }))
  )
  loadAcademy$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_ACADEMY),
    switchMap((action: any) => {
      return this.infoService
        .loadAcademy(action.id)
        .pipe(
          mergeMap(({academy}) => of(academyLoaded({academy})))
        );
    }))
  )

  constructor(private actions$: Actions,
              private infoService: InfoService) {
  }
}
