
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of, Observable} from 'rxjs';

@Injectable()
export class CompetitionStateService {
  headers = new HttpHeaders({'Content-Type': 'application/json'}); // TODO: add authorization

  private baseUrl = 'http://localhost:3000/'; // TODO: remove

  constructor(public http: HttpClient) {
  }

  saveTemplate(competitionId: string, template: string): Observable<any> {
    const body = JSON.stringify({
      id: competitionId,
      template
    });
    return this.http.put(this.baseUrl + `template/${competitionId}`, body, {headers: this.headers});
  }

  loadTemplate(competitionId: string): Observable<any> {
    return this.http.get(this.baseUrl + `template/${competitionId}`).pipe(map((response: any) => response.template));
  }

  startCompetition(competitionId: string): Observable<any> {
    console.log('Starting competition');
    return this.http.post(`/admin/startcompetition/`, competitionId, {headers: this.headers});
  }

  getCompetitionProps(competitionId: string) {
    const params = {competitionId};
    return this.http.get('/competitions/cluster/store/comprops', {
      params: params,
      headers: this.headers
    });
  }

  getCategoryState(competitionId: string, categoryId: string) {
    const params = {competitionId, categoryId};
    return this.http.get('/competitions/cluster/store/categorystate', {
      params: params,
      headers: this.headers
    }).pipe(map(value => value || {}));
  }

  getEventsSince(categoryId: string, eventNumber: number, competitionId: string) {
    if (eventNumber >= 0) {
      const params = new HttpParams();
      params.set('from', `${eventNumber}`);
      params.set('competitionId', competitionId);
      params.set('categoryId', categoryId);
      return this.http.get('/admin/eventsrange', {params: params, headers: this.headers}).pipe(map(data => data || []));
    } else {
      return of([]);
    }
  }
}
