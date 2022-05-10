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
import {generateUuid} from "../modules/account/utils";

const isoFormat = 'yyyy-MM-dd\'T\'HH:mm:ss.S\'Z\'';

const {
  commandsEndpoint,
  generateCategoriesEndpoint,
  competitionQueryEndpoint,
  defaultCategories,
  defaultFightResults,
} = env.environment;

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

const competitionIdPrefix = (competitionId: string) => (arg: string) => `${competitionQueryEndpoint}/${competitionId}/${arg}`


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
    return this.httpGet(competitionIdPrefix(competitionId)(`competitor/${fighterId}`), {
      params: params
    });
  }


  getSchedule(competitionId: string) {
    return this.httpGet(competitionIdPrefix(competitionId)('schedule'), {
      headers: this.headers
    });
  }

  getFightIdsByCategoryId(competitionId: string) {
    return this.httpGet(competitionIdPrefix(competitionId)('fight'), {
      headers: this.headers
    });
  }


  getCategories(competitionId: string) {
    return this.httpGet(competitionIdPrefix(competitionId)('category'), {
      headers: this.headers
    });
  }


  getCompetitorsForCompetition(competitionId: string, categoryId: string, pageNumber: string, pageSize: string, searchString?: string) {
    const pn = +pageNumber || 1
    const ps = +pageSize || 0
    const startAt = (pn - 1) * ps
    const limit = ps
    let params: any = {
      startAt,
      limit
    };
    if (categoryId && categoryId.length > 0) {
      params = {...params, categoryId};
    }
    if (searchString && searchString.length > 0) {
      params = {...params, searchString};
    }
    return this.httpGet(competitionIdPrefix(competitionId)('competitor'), {
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
    return this.httpGet(`${competitionQueryEndpoint}/${competitionId}`, {
      headers: this.headers
    });
  }

  getRegistrationInfo(competitionId: string) {
    const params = {competitionId};
    return this.httpGet(competitionIdPrefix(competitionId)('reginfo'), {
      params: params,
      headers: this.headers
    });
  }


  getLatestCategoryState(competitionId, categoryId) {
    return this.httpGet(competitionIdPrefix(competitionId)(`category/${categoryId}`), {
      headers: this.headers
    });
  }

  sendCreateCompetitionCommand(command: any): Observable<any> {
    let competitionId = generateUuid();
    let id = generateUuid();
    const body = JSON.stringify({
      ...command,
      competitionId,
      id
    });
    return this.http.post(`${commandsEndpoint}?competitionId=${competitionId}`, body, {
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
    const id = generateUuid();
    const normalizedCommand = this.normalizeCommand({...command, id});
    return this.sendPayloadToEndpoint(normalizedCommand, `${commandsEndpoint}?competitionId=${competitionId}`);
  }

  generatePreliminaryCategories(payload: any, competitionId: string): Observable<any> {
    return this.sendPayloadToEndpoint(payload, `${generateCategoriesEndpoint}/${competitionId}`);
  }

  getPeriodMats(competitionId: any, periodId: any) {
    return this.httpGet(competitionIdPrefix(competitionId)(`period/${periodId}/mat`), {
      headers: this.headers
    });
  }

  getFight(competitionId: string, fightId: string, categoryId: string) {
    return this.httpGet<Fight>(competitionIdPrefix(competitionId)(`category/${categoryId}/fight/${fightId}`), {
      headers: this.headers
    }).pipe(
      mergeMap(result => this.getFightResultOptions(competitionId, categoryId, result?.stageId).pipe(
        map(options => [result, options])
      ))
    );
  }

  getFightResultOptions(competitionId: string, categoryId: string, stageId: string) {
    return this.httpGet(competitionIdPrefix(competitionId)(`category/${categoryId}/stage/${stageId}/resultoptions`), {
      headers: this.headers
    });
  }


  getMatFights(competitionId: string, matId: string, maxResults: number = 10, queryString?: any) {
    const params = {matId, queryString: queryString || null, maxResults: `${maxResults}`};
    return this.httpGet(competitionIdPrefix(competitionId)(`mat/${matId}/fight`), {
      params: params,
      headers: this.headers
    });
  }

  sendCommandSync(command: CommonAction): Observable<Action> {
    const id = generateUuid()
    const competitionId = command.competitionId;
    const normalizedCommand = this.normalizeCommand(command);
    const body = JSON.stringify({...normalizedCommand, id});
    return this.http.post<Action[]>(`${commandsEndpoint}?competitionId=${competitionId}`, body, {
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
    return this.httpGet<Fight[]>(competitionIdPrefix(competitionId)(`category/${categoryId}/stage/${stageId}/fight`), {
      headers: this.headers
    });
  }

  getCategoryStages(competitionId: string, categoryId: string): Observable<CategoryBracketsStage[]> {
    return this.httpGet<CategoryBracketsStage[]>(competitionIdPrefix(competitionId)(`category/${categoryId}/stage`), {
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
