import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Store} from '@ngrx/store';
import 'sockjs-client';
import * as SockJS from 'sockjs-client';
import {environment} from '../../../environments/environment';
import {AppState} from '../../reducers';
import {socketConnected, socketDisconnected} from './redux/event-manager-actions';

const Stomp = require('stompjs/lib/stomp').Stomp;


@Injectable()
export class EventManagerService {
  headers = new HttpHeaders({'Content-Type': 'application/json'}); // TODO: add authorization
  public stompClient: any;
  private connected = false;

  private _dropConnection = false;

  constructor(public http: HttpClient, public store: Store<AppState>) {
  }

  dropConnection() {
    this._dropConnection = true;
  }

  disconnect() {
    const that = this;
    if (this.stompClient) {
      try {
        if (that.connected) {
          this.stompClient.disconnect();
        }
      } catch (e) {
        console.error('Error while disconnecting.');
        console.error(e);
      } finally {
        this._dropConnection = false;
        that.connected = false;
        that.store.dispatch(socketDisconnected);
      }
    } else {
      this._dropConnection = false;
      this.store.dispatch(socketDisconnected);
    }
  }

  connect() {
    if (!this.connected) {
      const that = this;
      const socket = new SockJS(environment.webSocketUrl);
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, () => {
        if (!that._dropConnection) {
          that.connected = true;
          that.store.dispatch(socketConnected);
          that.stompClient.subscribe(environment.eventQueue, function (data) {
            console.log(data);
            if (data && data.body) {
              that.store.dispatch(JSON.parse(data.body));
            }
          });

          that.stompClient.subscribe(environment.errorQueue, function (data) {
            console.error(data);
          });
        } else {
          that.disconnect();
        }
      }, (err) => {
        console.log('Connection error:', err);
        that.connected = false;
        that.store.dispatch(socketDisconnected);
        if (!that._dropConnection) {
          that.connect();
        }
      });
    } else {
      this.store.dispatch(socketConnected);
    }
  }
}
