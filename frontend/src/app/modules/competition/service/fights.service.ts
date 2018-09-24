
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Fight} from '../../../commons/model/competition.model';
import * as fightActions from '../actions/fights'
import {FightResult, Score} from "../../../commons/model/competition.model";


@Injectable()
export class FightsService {
  headers = new HttpHeaders({'Content-Type': 'application/json'}); //TODO: add authorization

  constructor(public http: HttpClient) {
  }

  dropFights(competitionId: string) {
    return this.http.post('admin/command', JSON.stringify({
      competitionId,
      payload: null,
      type: fightActions.DROP_BRACKETS_COMMAND
    }), {headers: this.headers})
  }

  generateForCategory(bracketId: string, competitionId: string) { //TODO: refactor to event-
    let params = new HttpParams();
    params.set('competitionId', competitionId);
    return this.http.post('admin/generateFightsForCategory/', bracketId, {headers: this.headers, params: params}).pipe(map(
      (data) => data as Array<Fight>
    ));
  }

  swapFights(fightCompId1: string, fightCompId2: string, competitionId: string) {
    this.http.post('admin/command', JSON.stringify({
      payload: {
        fightId1: fightCompId1,
        fightId2: fightCompId2
      },
      competitionId,
      type: fightActions.CHANGE_ORDER_COMMAND
    }), {headers: this.headers}).subscribe()
  }

  updateFightStage(fightId: string, fightStage: string, competitionId: string) {

    this.http.post('admin/command', JSON.stringify({
      payload: {
        fightId: fightId,
        fightStage: fightStage
      },
      competitionId,
      type: fightActions.UPDATE_FIGHT_STAGE_COMMAND
    }), {headers: this.headers}).subscribe()
  }

  requestFights(competitionId: string) {
    let params = new HttpParams();
    params.set('competitionId', competitionId);
    return this.http.get('admin/getFights', {params: params, headers: this.headers})
  }

  updateFightScores(id: string, score: Score, competitionId: string) {
    this.http.post('admin/command', JSON.stringify({
      payload: {
        fightId: id,
        scores: score
      },
      competitionId,
      type: fightActions.SCORE_UPDATE_COMMAND
    }), {headers: this.headers}).subscribe();
  }

  updateFightResults(fight: Fight, fightResult: FightResult, stage: string, scores: Score[], competitionId: string) {
    this.http.post('admin/command', JSON.stringify({
      payload: {
        fight: fight,
        result: fightResult,
        stage: stage,
        scores: scores
      },
      competitionId,
      type: fightActions.FIGHT_RESULT_UPDATE_COMMAND
    }), {headers: this.headers}).subscribe()
  }

}
