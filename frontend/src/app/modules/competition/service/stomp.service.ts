import {Injectable} from '@angular/core';
import 'sockjs-client';
import {environment} from '../../../../environments/environment';
import * as SockJS from 'sockjs-client';
import {select, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {AppState} from '../../../reducers/index';
import {getSelectedEventId} from '../redux/reducers';

const Stomp = require('stompjs/lib/stomp').Stomp;

@Injectable()
export class HttpStompService {

  public stompClient: any;

  constructor(private store: Store<AppState>) {
    this.init();
  }

  connect(competitionId: string) {
    const that = this;
    const socket = new SockJS(environment.webSocketUrl + `?competitionId=${competitionId}`);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      // that.store.dispatch(miscActions.connectedEvent);
      // that.store.dispatch(miscActions.loadCompetitionState(competitionId));
      that.stompClient.subscribe(environment.eventQueue, function (data) {
        console.log(data);
        if (data && data.body && data.body.competitionId === competitionId) {
          // that.store.dispatch(JSON.parse(data.body));
        }
      });

      that.stompClient.subscribe(environment.errorQueue, function (data) {
        console.error(data);
      });
    }, (err) => {
      console.log('Connection error:', err);
      that.connect(competitionId);
    });
  }

  init() {
    this.store.pipe(
      select(getSelectedEventId),
      map((competitionId: string) => {
        this.stompClient.disconnect(() => {
          console.log(`STOMP Disconnected, reconnecting for competitionId ${competitionId}`);
          this.connect(competitionId);
        });
      })
    );
  }
}
