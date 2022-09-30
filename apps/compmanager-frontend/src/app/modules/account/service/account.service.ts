import {catchError, map, tap, timeout} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import * as env from "../../../../environments/environment";
import {Account, AccountServiceResponse} from "@frontend-nx/protobuf";
import {HttpAuthService} from "./AuthService";
import {AbstractHttpService, getBearerToken} from "../../../service/abstract.http.service";

const {
  accountEndpoint
} = env.environment;


@Injectable()
export class AccountService {

  constructor(public http: HttpClient) {
  }

  httpGet(url: string, options: { headers: HttpHeaders }, tmt = 60000): Observable<AccountServiceResponse> {
    return this.http.get(url, {
      headers: options?.headers?.set('Accept', 'application/x-protobuf'),
      responseType: 'arraybuffer'
    }).pipe(
      timeout(tmt),
      map(buff => AccountServiceResponse.decode(new Uint8Array(buff))),
      tap(r => console.log("Account service received a response: \n ", AccountServiceResponse.toJSON(r))),
      catchError(error => {
        console.log(error);
        return throwError(error);
      }),
    );
  }


  getAccount(): Observable<Account> {
    return this.httpGet(`${accountEndpoint}`, {
      headers: AbstractHttpService.authHeader
    })
      .pipe(
        map(response => response.getAccountResponsePayload?.account)
      )
  }

  changeAvatar(avatar: string): Observable<any> {
    return this.http.post('accounts/changeAvatar', avatar, {
      headers: AbstractHttpService.authHeader
    }).pipe(catchError(err => {
      throw "Internal server error ";
    }))
  }
}
