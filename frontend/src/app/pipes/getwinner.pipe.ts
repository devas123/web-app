import {Pipe, PipeTransform} from '@angular/core';
import {Fight} from '../commons/model/competition.model';
import {Competitor} from '../commons/model/competition.model';


@Pipe({
  name: 'getwinner'
})
export class GetWinnerPipe implements PipeTransform {
  transform(fight: Fight): Competitor {
    if (fight && fight.fightResult && fight.fightResult.winnerId) {
      return fight.scores.find(f => f.competitor.email === fight.fightResult.winnerId).competitor;
    }
  }
}
