import {Observable, throwError} from 'rxjs';
import {catchError, map, tap, timeout} from 'rxjs/operators';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {QueryServiceResponse} from "@frontend-nx/protobuf";

export class AbstractHttpService {

  constructor(public http: HttpClient) {
  }

  defaultTimeout = 15000;

  httpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/x-protobuf',
    'Accept': 'application/x-protobuf'
  });


  sendByteArrayToEndpointWithProgress(endpoint: string, body: ArrayBuffer, tmt: number): Observable<HttpEvent<ArrayBuffer>> {
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

  sendDeleteRequestToEndpointWithProgress(endpoint: string, tmt: number): Observable<HttpEvent<ArrayBuffer>> {
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

  sendByteArrayToEndpoint(endpoint: string, body: ArrayBuffer, tmt: number) {
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


  httpGet(url: string, options: any, tmt = 60000): Observable<QueryServiceResponse> {
    return this.http.get<ArrayBuffer>(url, {
      ...options, responseType: 'arraybuffer', headers: {
        Accept: 'application/x-protobuf'
      }
    }).pipe(
      timeout(tmt),
      map(buff => QueryServiceResponse.decode(new Uint8Array(buff as any))),
      tap(r => console.log("Info service received a response: \n ", QueryServiceResponse.toJSON(r))),
      catchError(error => {
        console.log(error);
        return throwError(error);
      }),
    );
  }

}
