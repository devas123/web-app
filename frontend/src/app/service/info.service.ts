import {Observable, of as observableOf} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CompetitionProperties} from '../reducers';
import {Category} from '../commons/model/competition.model';
import {HttpAuthService} from '../modules/account/service/AuthService';

@Injectable()
export class InfoService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private commandsEndpoint = '/competitions/api/v1/command';

  constructor(private http: HttpClient) {
  }

  getCompetitions(creatorId?, status?) {
    let params = {};
    if (status) {
      params = {...params, status};
    }
    if (creatorId) {
      params = {...params, creatorId};
    }
    return this.http.get('/competitions/api/v1/store/competition', {
      params: params,
      headers: this.headers
    }).pipe(map(value => value || {}));
  }

  getCompetitor(competitionId: string, categoryId: string, fighterId: string) {
    const params = {competitionId, categoryId, fighterId: btoa(fighterId)};
    return this.http.get('/competitions/api/v1/store/competitor', {
      params: params,
      headers: this.headers
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
      headers: this.headers
    }).pipe(map(value => (value || {}) as CompetitionProperties), catchError(error => observableOf(error)));
  }

  getDefaultCategories(competitionId: string) {
    const params = {competitionId, includeKids: 'false'};
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + HttpAuthService.getToken(),
      'Content-Type': 'application/json'
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
