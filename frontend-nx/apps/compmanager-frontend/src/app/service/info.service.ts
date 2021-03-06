import {from, Observable, of, throwError, timer} from 'rxjs';

import {catchError, filter, finalize, map, mergeMap, retryWhen, timeout} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {CommonAction} from '../reducers/global-reducers';
import {HttpAuthService} from '../modules/account/service/AuthService';
import * as env from '../../environments/environment';
import produce from 'immer';
import {errorEvent} from '../actions/actions';
import {Action} from '@ngrx/store';
import {CategoryBracketsStage, Fight, FightResultOption} from '../commons/model/competition.model';
import {parseISO} from 'date-fns';
import {format, utcToZonedTime} from 'date-fns-tz';

const isoFormat = 'yyyy-MM-dd\'T\'HH:mm:ss.S\'Z\'';

const {
  commandsSyncEndpoint,
  commandsEndpoint,
  generateCategoriesEndpoint,
  competitionQueryEndpoint,
  registrationInfoQueryEndpoint,
  competitorEdpoint,
  scheduleEndpoint,
  categoriesEndpoint,
  competitorsEndpoint,
  defaultCategories,
  compProperties,
  categoryState,
  dashboardState,
  mats,
  fightResultOptions,
  fight,
  matFights,
  stageFights,
  categoryStages,
  defaultFightResults,
  fightIdsBycategoryId
} = env.environment.mocks ? env.mocks : env.environment;

export const genericRetryStrategy = ({
                                       maxRetryAttempts = 3,
                                       scalingDuration = 500,
                                       excludedStatusCodes = []
                                     }: {
  maxRetryAttempts?: number,
  scalingDuration?: number,
  excludedStatusCodes?: number[]
} = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        retryAttempt > maxRetryAttempts ||
        excludedStatusCodes.find(e => e === error.status)
      ) {
        return throwError(error);
      }
      console.log(
        `Attempt ${retryAttempt}: retrying in ${retryAttempt * scalingDuration}ms`
      );
      // retry after 1s, 2s, etc...
      return timer(retryAttempt * scalingDuration);
    }),
    finalize(() => console.log('We are done!'))
  );
};


@Injectable()
export class InfoService {

  constructor(private http: HttpClient) {
  }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  commandFields = [
    'payload',
    'type',
    'correlationId',
    'competitionId',
    'categoryId',
    'matId',
    'metadata',
    'executed',
    'id'
  ];

  static parseDate(dateStr: string): Date {
    if (dateStr) {
      return parseISO(dateStr);
    }
    return null;
  }

  static formatDate(date: Date, timeZone: string): string {
    if (date) {
      const zoned = utcToZonedTime(date, timeZone);
      return format(zoned, isoFormat, {timeZone});
    }
    return '';
  }

  private httpGet<T>(url: string, options: any, tmt = 60000) {
    return this.http.get<T>(url, {...options, responseType: 'json'}).pipe(
      timeout(tmt),
      retryWhen(genericRetryStrategy()),
      catchError(error => {
        console.log(error);
        return throwError(error);
      }),
      mergeMap(r => !(r instanceof HttpErrorResponse) ? of(r as any) : throwError(r))
    );
  }

  subscribeToCompetition(userId: string | number, competitionId: string) {
    const params = {
      userId: `${userId}`,
      competitionId
    };
    return this.httpGet(competitionQueryEndpoint + '/select', {
      params: params
    });
  }

  getCompetitions(creatorId?, status?) {
    let params = {};
    if (status) {
      params = {...params, status};
    }
    if (creatorId) {
      params = {...params, creatorId};
    }
    return this.httpGet(competitionQueryEndpoint, {
      params: params
    });
  }


  getCompetitor(competitionId: string, fighterId: string) {
    const params = {competitionId, fighterId};
    return this.httpGet(competitorEdpoint, {
      params: params
    });
  }


  getSchedule(competitionId: string) {
    const params = {competitionId};
    return this.httpGet(scheduleEndpoint, {
      params: params,
      headers: this.headers
    });
  }

  getFightIdsByCategoryId(competitionId: string) {
    const params = {competitionId};
    return this.httpGet(fightIdsBycategoryId, {
      params: params,
      headers: this.headers
    });
  }


  getCategories(competitionId: string) {
    const params = {competitionId};
    return this.httpGet(categoriesEndpoint, {
      params: params,
      headers: this.headers
    });
  }


  getCompetitorsForCompetition(competitionId: string, categoryId: string, pageNumber: string, pageSize: string, searchString?: string) {
    let params: any = {
      competitionId,
      pageNumber,
      pageSize
    };
    if (categoryId && categoryId.length > 0) {
      params = {...params, categoryId};
    }
    if (searchString && searchString.length > 0) {
      params = {...params, searchString};
    }
    return this.httpGet(competitorsEndpoint, {
      params: params
    });
  }


  getDefaultRestrictions(competitionId: string) {
    const params = {sportsId: 'bjj', competitionId, includeKids: 'false'};
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + HttpAuthService.getToken()
    });
    return this.httpGet(defaultCategories, {
      params: params,
      headers
    });
  }


  getCompetitionProperties(competitionId: string) {
    const params = {competitionId};
    return this.httpGet(compProperties, {
      params: params,
      headers: this.headers
    });
  }

  getRegistrationInfo(competitionId: string) {
    const params = {competitionId};
    return this.httpGet(registrationInfoQueryEndpoint, {
      params: params,
      headers: this.headers
    });
  }


  getLatestCategoryState(competitionId, categoryId) {
    const params = {categoryId, competitionId};
    return this.httpGet(categoryState, {
      params: params,
      headers: this.headers
    });
  }

  sendCreateCompetitionCommand(command: any): Observable<any> {
    const body = JSON.stringify(command);
    return this.http.post(`${commandsEndpoint}`, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    });
  }

  normalizeCommand = command => {
    return produce(command, draft => {
      const oldPayload = draft.payload || {};
      draft.payload = produce(oldPayload, pd => {
        for (const key of Object.keys(draft)) {
          if (this.commandFields.indexOf(key) < 0) {
            pd[key] = draft[key];
            delete draft[key];
          }
        }
      });
    });
  };

  sendPayloadToEndpoint(payload: any, endpoint: string): Observable<any> {
    const body = JSON.stringify(payload);
    const tmt = 15000;
    return this.http.post(endpoint, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }).pipe(
      timeout(tmt),
      retryWhen(genericRetryStrategy()),
      catchError(error => {
        console.log(error);
        return throwError(error);
      })
    );
  }


  sendCommand(command: any, competitionId: string): Observable<any> {
    const normalizedCommand = this.normalizeCommand(command);
    return this.sendPayloadToEndpoint(normalizedCommand, `${commandsEndpoint}/${competitionId}`);
  }

  generatePreliminaryCategories(payload: any, competitionId: string): Observable<any> {
    return this.sendPayloadToEndpoint(payload, `${generateCategoriesEndpoint}/${competitionId}`);
  }


  getDashboardState(competitionId: any) {
    const params = {competitionId};
    return this.httpGet(dashboardState, {
      params: params,
      headers: this.headers
    });
  }


  getPeriodMats(competitionId: any, periodId: any) {
    const params = {competitionId, periodId};
    return this.httpGet(mats, {
      params: params,
      headers: this.headers
    });
  }

  getFight(competitionId: string, fightId: string, categoryId: string) {
    const params = {competitionId, fightId, categoryId};
    return this.httpGet<Fight>(fight, {
      params: params,
      headers: this.headers
    }).pipe(
      mergeMap(result => this.getFightResultOptions(competitionId, fightId, categoryId).pipe(
        map(options => [result, options])
      ))
    );
  }

  getFightResultOptions(competitionId: string, fightId: string, categoryId: string) {
    const params = {competitionId, fightId, categoryId};
    return this.httpGet(fightResultOptions, {
      params: params,
      headers: this.headers
    });
  }


  getMatFights(competitionId: string, matId: string, maxResults: number = 10, queryString?: any) {
    const params = {competitionId, matId, queryString: queryString || null, maxResults: `${maxResults}`};
    return this.httpGet(matFights, {
      params: params,
      headers: this.headers
    });
  }

  sendCommandSync(command: CommonAction): Observable<Action> {
    const competitionId = command.competitionId;
    const normalizedCommand = this.normalizeCommand(command);
    const body = JSON.stringify(normalizedCommand);
    return this.http.post<Action[]>(`${commandsSyncEndpoint}/${competitionId}`, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }).pipe(
      timeout(15000),
      retryWhen(genericRetryStrategy()),
      filter(events => events && events.length > 0),
      mergeMap(events => from(events)),
      map((ev: CommonAction) => produce(ev, draft => {
        draft.payload = ev.payload;
      })),
      catchError(error => {
        console.error(error);
        return throwError(errorEvent(JSON.stringify(error)));
      }));
  }

  getCategoryStageFights(competitionId: string, categoryId: string, stageId: string): Observable<Fight[]> {
    if (!competitionId || !categoryId || !stageId) {
      return throwError(`something is smissing: ${competitionId}, ${categoryId}, ${stageId}`);
    }
    const params = {competitionId, categoryId, stageId};
    return this.httpGet<Fight[]>(stageFights, {
      params: params,
      headers: this.headers
    });
  }

  getCategoryStages(competitionId: string, categoryId: string): Observable<CategoryBracketsStage[]> {
    const params = {competitionId, categoryId};
    return this.httpGet<CategoryBracketsStage[]>(categoryStages, {
      params: params,
      headers: this.headers
    });
  }

  getDefaultFightResults(competitionId: string): Observable<FightResultOption[]> {
    const params = {competitionId};
    return this.httpGet<FightResultOption[]>(defaultFightResults, {
      params: params,
      headers: this.headers
    });
  }

}
