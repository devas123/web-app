import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';


import * as roles from '../user.roles';
import * as env from "../../../../environments/environment";
import {AbstractHttpService, removeToken, toBytes} from "../../../service/abstract.http.service";
import {
  Account,
  AccountServiceResponse,
  AddAccountRequestPayload,
  AuthenticateRequestPayload,
  AuthenticationResponsePayload,
  ErrorResponse
} from "@frontend-nx/protobuf";

const {
  accountEndpoint
} = env.environment;

@Injectable()
export class HttpAuthService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http)
  }

  registerUser(user: Account): Observable<ArrayBuffer> {
    const body = <AddAccountRequestPayload>{}
    body.email = user.email
    body.firstName = user.firstName
    body.lastName = user.lastName
    body.birthDate = user.birthDate
    body.password = user.password
    const bytes = toBytes(AddAccountRequestPayload.encode(body).finish());
    return this.sendByteArrayToEndpoint(`${accountEndpoint}/register`, bytes, AbstractHttpService.defaultTimeout)
  }

  requestToken(email: string, password: string): Observable<AuthenticationResponsePayload> {
    const body = <AuthenticateRequestPayload>{
      password,
      username: email
    };
    return this.sendByteArrayToEndpoint(`${accountEndpoint}/authenticate`, toBytes(AuthenticateRequestPayload.encode(body).finish()), AbstractHttpService.defaultTimeout)
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
    return this.httpGetBytes(accountEndpoint, this.httpHeaders())
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
