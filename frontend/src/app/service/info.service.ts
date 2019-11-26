import {Observable, of as observableOf} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CompetitionProperties} from '../reducers';
import {Category} from '../commons/model/competition.model';
import {HttpAuthService} from '../modules/account/service/AuthService';
import {DateTime} from 'luxon';
import {environment, mocks} from '../../environments/environment';
import produce from 'immer';

const format = 'yyyy-MM-dd\'T\'HH:mm:ss.S\'Z\'';

const {
  commandsEndpoint,
  competitionQueryEndpoint,
  competitorEdpoint,
  scheduleEndpoint,
  categoriesEndpoint,
  competitorsEndpoint,
  defaultCategories,
  compProperties,
  categoryState,
  dashboardState,
  mats,
  matFights
} = environment.production ? environment : mocks;

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
    'id',
  ];

  static parseDate(dateStr: string): Date {
    if (dateStr) {
      const keepZone = DateTime.fromISO(dateStr);
      return new Date(keepZone.toString());
    }
    return null;
  }

  static formatDate(date: Date, timeZone: string): string {
    if (date) {
      return DateTime.fromISO(date.toISOString(), {zone: timeZone}).toFormat(format);
    }
    return '';
  }

  subscribeToCompetition(userId: string | number, competitionId: string) {
    const params = {
      userId: `${userId}`,
      competitionId
    };
    return this.http.get(competitionQueryEndpoint + '/select', {
      params: params,
    }).pipe(map(value => value || {}),
      catchError(error => {
        console.log(error);
        return observableOf(error);
      }));
  }

  getCompetitions(creatorId?, status?) {
    let params = {};
    if (status) {
      params = {...params, status};
    }
    if (creatorId) {
      params = {...params, creatorId};
    }
    return this.http.get(competitionQueryEndpoint, {
      params: params,
    }).pipe(map(value => value || {}));
  }


  getCompetitor(competitionId: string, fighterId: string) {
    const params = {competitionId, fighterId};
    return this.http.get(competitorEdpoint, {
      params: params,
    }).pipe(map(value => value || {}));
  }


  getSchedule(competitionId: string) {
    const params = {competitionId};
    return this.http.get(scheduleEndpoint, {
      params: params,
      headers: this.headers
    }).pipe(map(value => value || {}));
  }


  getCategories(competitionId: string) {
    const params = {competitionId};
    return this.http.get(categoriesEndpoint, {
      params: params,
      headers: this.headers
    }).pipe(map(value => value || []));
  }


  getCompetitorsForCompetition(competitionId: string, categoryId: string, pageNumber: string, pageSize: string, searchString?: string) {
    let params: any = {
      competitionId,
      // pageNumber,
      // pageSize
    };
    if (categoryId && categoryId.length > 0) {
      params = {...params, categoryId};
    }
    if (searchString && searchString.length > 0) {
      params = {...params, searchString};
    }
    return this.http.get(competitorsEndpoint, {
      params: params,
    }).pipe(map(value => (value || {}) as CompetitionProperties), catchError(error => observableOf(error)));
  }


  getDefaultCategories(competitionId: string) {
    const params = {sportsId: 'bjj', competitionId, includeKids: 'false'};
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + HttpAuthService.getToken(),
    });
    return this.http.get(defaultCategories, {
      params: params,
      headers
    }).pipe(map(value => (value || []) as Category[]));
  }


  getCompetitionProperties(competitionId: string) {
    const params = {competitionId};
    return this.http.get(compProperties, {
      params: params,
      headers: this.headers
    }).pipe(map(value => {
      if (Array.isArray(value)) {
        return value[0] as CompetitionProperties;
      } else {
        return (value || {}) as CompetitionProperties;
      }
    }));
  }


  getLatestCategoryState(competitionId, categoryId) {
    const params = {categoryId, competitionId};
    return this.http.get(categoryState, {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || {})));
  }

  getAcademiesForCompetition(competitionId) {

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
      const payload = {};
      for (const key of Object.keys(draft)) {
        if (this.commandFields.indexOf(key) < 0) {
          payload[key] = draft[key];
          delete draft[key];
        }
      }
      draft.payload = payload;
    });
  };

  sendCommand(command: any, competitionId: string): Observable<any> {
    const normalizedCommand = this.normalizeCommand(command);
    const body = JSON.stringify(normalizedCommand);
    return this.http.post(`${commandsEndpoint}/${competitionId}`, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    });
  }

  sendGlobalDashboardCommand(command: any, competitionId: string): Observable<any> {
    return this.sendCommand(command, competitionId);
  }


  getDashboardState(competitionId: any) {
    const params = {competitionId};
    return this.http.get(dashboardState, {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || {})));
  }


  getPeriodMats(competitionId: any, periodId: any) {
    const params = {competitionId, periodId};
    return this.http.get(mats, {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || {})));
  }


  getMatFights(competitionId: string, matId: string, maxResults: number = 10, queryString?: any) {
    const params = {competitionId, matId, queryString: queryString || null, maxResults: `${maxResults}`};
    return this.http.get(matFights, {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || [])));
  }
}
