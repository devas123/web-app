import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';


import * as roles from '../user.roles';
import * as env from "../../../../environments/environment";
import {AbstractHttpService, removeToken} from "../../../service/abstract.http.service";
import {
  AuthenticationResponsePayload, ErrorResponse,
  AccountServiceResponse,
  AuthenticateRequestPayload,
  Account
} from "@frontend-nx/protobuf";

const {
  accountEndpoint
} = env.environment;

@Injectable()
export class HttpAuthService extends AbstractHttpService {

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(http: HttpClient) {
    super(http)
  }

  registerUser(user: Account): Observable<ArrayBuffer> {
    return this.sendByteArrayToEndpoint(accountEndpoint, Account.encode(user).finish().buffer, AbstractHttpService.defaultTimeout)
  }

  requestToken(email: string, password: string): Observable<AuthenticationResponsePayload> {
    const body = <AuthenticateRequestPayload>{
      password,
      username: email
    };
    return this.sendByteArrayToEndpoint(`${accountEndpoint}/authenticate`, AuthenticateRequestPayload.encode(body).finish().buffer, AbstractHttpService.defaultTimeout)
      .pipe(
        mergeMap(buffer => {
          const response = AccountServiceResponse.decode(new Uint8Array(buffer));
          if (response.authenticationResponsePayload) {
            return of(response.authenticationResponsePayload)
          } else {
            throwError(<ErrorResponse>{
              errorMessage: "Unexpected response"
            })
          }
        })
      )
  }

  getCurrentUser(): Observable<Account> {
    return this.httpGetBytes(accountEndpoint)
      .pipe(
        map(bytes => AccountServiceResponse.decode(new Uint8Array(bytes))),
        map(resp => resp.getAccountResponsePayload?.account),
        catchError(err => {
          removeToken();
          console.error(err);
          throw err;
        })
      );
  }

  getUserRole(competitionId: string): string {
    // TODO: implement
    if (competitionId === 'id1') {
      return roles.USER;
    }
    return roles.ORGANIZATOR;
  }
}
