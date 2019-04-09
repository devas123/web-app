import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import 'sockjs-client';
import * as SockJS from 'sockjs-client';
import {environment} from '../../../environments/environment';
import {AppState, selectUserId} from '../../reducers';
import {socketConnected, socketDisconnected} from './redux/event-manager-actions';
import {HttpAuthService} from '../account/service/AuthService';
import {InfoService} from '../../service/info.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EventManagerService {
  private connected = false;
  private _disconnect = false;

  socket: SockJS;

  constructor(public http: HttpClient, public store: Store<AppState>, private infoService: InfoService) {

  }

  connect() {
    this._disconnect = false;
    this.createSocket();
  }

  selectCompetition(competitionId: string) {
    return this.store
      .pipe(
        select(selectUserId),
        map(userId => this.infoService.subscribeToCompetition(userId, competitionId)))
  }

  private createSocket() {
    this.store.dispatch(socketConnected);
  } /*{
    try {
      console.log('Connecting to SockJS.');
      const that = this;
      const token = HttpAuthService.getToken();
      this.socket = new SockJS(`${environment.webSocketUrl}?token=${token}`, null, {
        transports: []
      });
      this.socket.onopen = function () {
        console.log('SockJS connection open');
        that.connected = true;
        that.store.dispatch(socketConnected);
      };

      this.socket.onmessage = function (e) {
        if (e && e.data) {
          const d = JSON.parse(e.data);

          if (d.error) {
            console.log('Error: ', d.error);
            try {
              that.socket.close();
            } catch (e) {
              console.error(`Error: ${e}`)
            }
          } else {
            console.log('SockJS message', e.data);
            that.store.dispatch(d);
          }
        }
      };

      this.socket.onclose = function () {
        console.log('SockJS connection close');
        that.connected = false;
        that.store.dispatch(socketDisconnected);
        if (!that._disconnect) {
          that.createSocket();
        }
      };
    } catch (e) {
      console.error("Error while creating socket: " + e)
    }
  }
*/
  // sendMessage(message: any) {
  //   if (this.connected) {
  //     this.socket.send(JSON.stringify({ text: message }));
  //   }
  // }

  dropConnection() {
    this._disconnect = true;
    if (this.socket) {
      this.socket.close();
    }
  }
}
