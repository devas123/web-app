import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, mergeMap, switchMap, tap} from "rxjs/operators";
import {from, of, throwError} from "rxjs";
import {CommandType} from "@frontend-nx/protobuf";
import {InfoService} from "../../../service/info.service";
import {academiesLoaded, LOAD_ACADEMIES} from "./actions";

@Injectable()
export class AcademiesEffects {
  forwardAddAcademyCommand$ = createEffect(() => this.actions$.pipe(
    ofType(CommandType.ADD_ACADEMY_COMMAND, CommandType.REMOVE_ACADEMY_COMMAND),
    switchMap((action: any) => {
      const command = InfoService.createCommandWithPayload(action);
      return this.infoService
        .sendCommandSync(command)
        .pipe(
          tap(commands => {
            const {successCallback} = action
            if (!!successCallback) {
              successCallback(commands)
            }
          }),
          mergeMap((actions) => from(actions)),
          catchError((err) => {
            const {errorCallback} = action
            if (!!errorCallback) {
              errorCallback(err)
            }
            return throwError(err);
          })
        );
    }))
  )

  loadAcademies$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_ACADEMIES),
    switchMap((action: any) => {
      return this.infoService
        .loadAcademies(action.pageInfo)
        .pipe(
          mergeMap(({academies, pageInfo}) => of(academiesLoaded({academies, pageInfo})))
        );
    }))
  )

  constructor(private actions$: Actions,
              private infoService: InfoService) {
  }
}
