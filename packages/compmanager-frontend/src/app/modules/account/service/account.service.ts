
import {catchError} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AccountService {

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
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
