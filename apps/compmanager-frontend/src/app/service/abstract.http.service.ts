import {Observable, throwError} from 'rxjs';
import {catchError, map, tap, timeout} from 'rxjs/operators';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {QueryServiceResponse} from "@frontend-nx/protobuf";

export function removeToken() {
  localStorage.removeItem('token');
}

export function getBearerToken() {
  return 'Bearer ' + getToken()
}

export function getToken() {
  // return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjI4MzgwMTMsImV4cCI6MTkxNTI5ODgxMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.kZ6bYcPgQosv9gablClsmbRbsA_VrAQtGFB3Nvlk04w';
  return localStorage.getItem('token');
}

export function setToken(token) {
  localStorage.setItem('token', token);
}


export abstract class AbstractHttpService {

  protected constructor(public http: HttpClient) {
  }

  static defaultTimeout = 15000;

  static authHeader = new HttpHeaders({
    'Authorization': getBearerToken()
  });


  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/x-protobuf',
    'Accept': 'application/x-protobuf'
  });


  sendByteArrayToEndpointWithProgress(endpoint: string, body: ArrayBuffer, tmt: number = AbstractHttpService.defaultTimeout): Observable<HttpEvent<ArrayBuffer>> {
    return this.http.post(endpoint, body, {
      responseType: 'arraybuffer',
      headers: this.httpHeaders,
      reportProgress: true,
      observe: 'events'
    }).pipe(
      timeout(tmt),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  sendDeleteRequestToEndpointWithProgress(endpoint: string, tmt: number = AbstractHttpService.defaultTimeout): Observable<HttpEvent<ArrayBuffer>> {
    return this.http.delete(endpoint, {
      responseType: 'arraybuffer',
      headers: this.httpHeaders,
      reportProgress: true,
      observe: 'events'
    }).pipe(
      timeout(tmt),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  sendByteArrayToEndpoint(endpoint: string, body: ArrayBuffer, tmt: number = AbstractHttpService.defaultTimeout) {
    return this.http.post(endpoint, body, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/x-protobuf',
        'Accept': 'application/x-protobuf'
      })
    }).pipe(
      timeout(tmt),
      catchError(error => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  httpGetBytes(url: string, options: any = {}, tmt = AbstractHttpService.defaultTimeout): Observable<ArrayBuffer> {
    return this.http.get(url, {
      ...options,
      responseType: 'arraybuffer',
      headers: AbstractHttpService.authHeader.set('Accept', 'application/x-protobuf')
    }).pipe(
      timeout(tmt),
      catchError(error => {
        console.log(error);
        return throwError(error);
      }),
    );
  }


  httpGetQueryServiceResponse(url: string, options: any = {}, tmt = AbstractHttpService.defaultTimeout): Observable<QueryServiceResponse> {
    return this.httpGetBytes(url, options, tmt).pipe(
      map(buff => QueryServiceResponse.decode(new Uint8Array(buff as any))),
      tap(r => console.log("Info service received a response: \n ", QueryServiceResponse.toJSON(r)))
    );
  }

}
