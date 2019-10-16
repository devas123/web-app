import {Observable, of as observableOf} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CompetitionProperties} from '../reducers';
import {Category} from '../commons/model/competition.model';
import {HttpAuthService} from '../modules/account/service/AuthService';
import {DateTime} from 'luxon';
import {mocks} from '../../environments/environment';

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
} = mocks;

@Injectable()
export class InfoService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

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

  constructor(private http: HttpClient) {
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
    const params = {
      competitionId,
      categoryId: categoryId || '',
      pageNumber, pageSize,
      searchString: searchString || ''
    };
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

  sendCommand(command: any): Observable<any> {
    const body = JSON.stringify(command);
    return this.http.post(`${commandsEndpoint}/${command.competitionId}`, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    });
  }

  sendGlobalDashboardCommand(command: any): Observable<any> {
    return this.sendCommand(command);
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
