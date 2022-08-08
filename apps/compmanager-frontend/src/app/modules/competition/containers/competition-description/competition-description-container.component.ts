import {Component} from "@angular/core";
import {DataProviderService} from "../../../../service/data.provider.service";
import {Observable} from "rxjs";
import {CompetitionProperties} from "@frontend-nx/protobuf";
import {AppState, getSelectedEventProperties} from "../../../../reducers/global-reducers";
import {select, Store} from "@ngrx/store";

@Component({
  template: `
    <cf-competition-description [competitionInfoCompiled]="competitionInfoCompiled$ | async"
                                [properties]="competitionProperties$ | async"></cf-competition-description>`,
})
export class CompetitionDescriptionContainerComponent {
  competitionInfoCompiled$: Observable<string>;
  competitionProperties$: Observable<CompetitionProperties>;

  constructor(private store: Store<AppState>, private dataProviderService: DataProviderService) {
    this.competitionInfoCompiled$ = dataProviderService.competitionInfoCompiledInterest$;
    this.competitionProperties$ = store.pipe(select(getSelectedEventProperties));
  }
}
