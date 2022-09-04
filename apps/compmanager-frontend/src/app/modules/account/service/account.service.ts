import {catchError, map, tap, timeout} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import * as env from "../../../../environments/environment";
import {Account, AccountServiceResponse} from "../../../../../../../libs/protobuf/src/lib/account";

const {
  accountEndpoint
} = env.environment;


@Injectable()
export class AccountService {

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
  }

  httpGet(url: string, options: any, tmt = 60000): Observable<AccountServiceResponse> {
    return this.http.get<ArrayBuffer>(url, {
      ...options, responseType: 'arraybuffer', headers: {
        ...options?.headers,
        Accept: 'application/x-protobuf'
      }
    }).pipe(
      timeout(tmt),
      map(buff => AccountServiceResponse.decode(new Uint8Array(buff as any))),
      tap(r => console.log("Account service received a response: \n ", AccountServiceResponse.toJSON(r))),
      catchError(error => {
        console.log(error);
        return throwError(error);
      }),
    );
  }


  getAccount(id: string): Observable<Account> {
    return this.httpGet(`${accountEndpoint}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Content-Type': 'application/json'
      })
    })
      .pipe(
        map(response => response.getAccountResponsePayload?.account)
      )
  }

  changeAvatar(avatar: string): Observable<any> {
    return this.http.post('accounts/changeAvatar', avatar, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(err => {
      throw "Internal server error ";
    }))
  }
}
