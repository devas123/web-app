import {Observable, of as observableOf} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CompetitionProperties} from '../reducers';
import {Category} from '../commons/model/competition.model';
import {HttpAuthService} from '../modules/account/service/AuthService';
import {DateTime} from 'luxon'

const format = "yyyy-MM-dd'T'HH:mm:ss.SZZ[z]";


@Injectable()
export class InfoService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private commandsEndpoint = '/competitions/api/v1/command';
  private competitionQueryEndpoint = '/query/api/v1/competition';
  private competitorQueryEndpoint = '/query/api/v1/competitor';

  static parseZonedDateTime(zonedDateTimeStr: string): Date {
    if (!zonedDateTimeStr) {
      return null
    }
    const keepZone = DateTime.fromFormat(zonedDateTimeStr, format, {
      setZone: true
    });
    return new Date(keepZone.toString())
  }


  static toZonedDateTimeString(date: Date, timeZone: string): string {
    return DateTime.fromISO(date.toISOString(), {zone: timeZone}).toFormat(format)
  }

  constructor(private http: HttpClient) {
  }

  subscribeToCompetition(userId: string, competitionId: string) {
    const params = {
      userId,
      competitionId
    };
    return this.http.get(this.competitionQueryEndpoint + '/select', {
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
    return this.http.get(this.competitionQueryEndpoint, {
      params: params,
    }).pipe(map(value => value || {}));
  }

  getCompetitor(competitionId: string, categoryId: string, fighterId: string) {
    const params = {competitionId, categoryId, fighterId: btoa(fighterId)};
    return this.http.get('/competitions/api/v1/store/competitor', {
      params: params,
    }).pipe(map(value => value || {}));
  }

  getSchedule(competitionId: string) {
    const params = {competitionId};
    return this.http.get('/competitions/api/v1/store/schedule', {
      params: params,
      headers: this.headers
    }).pipe(map(value => value || {}));
  }

  getCategories(competitionId: string) {
    const params = {competitionId};
    return this.http.get('/competitions/api/v1/store/categories', {
      params: params,
      headers: this.headers
    }).pipe(map(value => value || []));
  }

  getCompetitorsForCompetition(competitionId: string, pageNumber: string, pageSize: string, searchString?: string) {
    const params = {competitionId, pageNumber, pageSize, searchString};
    return this.http.get('/competitions/api/v1/store/competitors', {
      params: params,
    }).pipe(map(value => (value || {}) as CompetitionProperties), catchError(error => observableOf(error)));
  }

  getDefaultCategories(competitionId: string) {
    const params = {competitionId, includeKids: 'false'};
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + HttpAuthService.getToken(),
    });
    return this.http.get('/accounts/category/get/default', {
      params: params,
      headers
    }).pipe(map(value => (value || []) as Category[]));

  }

  getCompetitionProperties(competitionId: string) {
    const params = {competitionId};
    return this.http.get('/competitions/api/v1/store/comprops', {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || {}) as CompetitionProperties));
  }

  getLatestCategoryState(categoryId) {
    const params = {categoryId: btoa(categoryId)};
    return this.http.get('/competitions/api/v1/store/categorystate', {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || {})));
  }

  getAcademiesForCompetition(competitionId) {

  }

  sendGlobalCommand(command: any): Observable<any> {
    return this.sendCommand(command);
  }

  sendCommand(command: any): Observable<any> {
    const body = JSON.stringify(command);
    return this.http.post(`${this.commandsEndpoint}/${command.competitionId}`, body, {
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
    return this.http.get('/competitions/api/v1/store/dashboardstate', {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || {})));
  }

  getPeriodMats(competitionId: any, periodId: any) {
    const params = {competitionId, periodId};
    return this.http.get('/competitions/api/v1/store/mats', {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || {})));
  }

  getMatFights(matId: string, maxResults: number = 10, queryString?: any) {
    const params = {matId: btoa(matId), queryString: queryString || null, maxResults: `${maxResults}`};
    return this.http.get('/competitions/api/v1/store/matfights', {
      params: params,
      headers: this.headers
    }).pipe(map(value => (value || [])));
  }
}
