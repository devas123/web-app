import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


import * as roles from '../user.roles';
import {Account} from "../../../../../../../libs/protobuf/src/lib/account";

@Injectable()
export class HttpAuthService {

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {

  }

  static removeToken() {
    localStorage.removeItem('token');
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token) {
    localStorage.setItem('token', token);
  }


  registerUser(user: Account): Observable<any> {
    const payload = JSON.stringify(user);
    return this.http.post('accounts/createUser', payload, {
      headers: this.headers
    }).pipe(map(data => {
        return data;
      }),
      catchError(err => {
        throw err.error.message ? err.error.message : 'Internal error occured';
      }));
  }

  requestToken(email: string, password: string): Observable<any> {
    const body = 'client_id=browser&username=' + email + '&password=' + password + '&grant_type=password&scope=ui';
    return of({access_token: 'asdasdasdasdasdasd'});
    // return this.http.post('uaa/oauth/token', body, {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Basic YnJvd3Nlcjp0ZXN0',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   })
    // }).pipe(map(data => {
    //   return data;
    // }), catchError(err => {
    //   console.log('err');
    //   if (err.error.message) {
    //     throw err.error.message;
    //   }
    //   throw new Error('Internal error occured');
    // }));
  }

  getCurrentUser(accesToken: string): Observable<any> {
    return of({
      email: 'test@email.ru',
      firstName: 'firstName',
      lastName: 'lastName',
      userId: '1',
    } as Account);
    // return this.http.get('accounts/currentUser', {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Bearer ' + accesToken
    //   })
    // }).pipe(map(data => {
    //   return data;
    // }), catchError(err => {
    //   localStorage.removeItem('token');
    //   console.error(err);
    //   throw new Error(`Error when getting current user.`);
    // }));
  }

  getUserRole(competitionId: string): string {
    // TODO: implement
    if (competitionId === 'id1') {
      return roles.USER;
    }
    return roles.ORGANIZATOR;
  }
}
