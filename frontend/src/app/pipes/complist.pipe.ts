import {Pipe, PipeTransform} from '@angular/core';
import {Competitor} from '../commons/model/competition.model';

@Pipe({
  name: 'groupCompList'
})
export class GroupCompListPipe implements PipeTransform {
  transform(array: Competitor[], byAcademy?: boolean): CompetitorsList[] {
    const result: CompetitorsList[] = [];
    array.forEach((competitor) => {
      const index = (this.sortingAttrExist(byAcademy ? competitor.academy : competitor.category.categoryId, result));
      index === -1 ? result.push({
          groupingAttr: byAcademy ? competitor.academy : competitor.category.categoryId,
        competitors: [competitor]
      })
        : result[index].competitors.push(competitor);
    });
    return result;
  }

  public sortingAttrExist(sortingAttr: string, list: CompetitorsList[]): number {
    let result = -1;
    list.forEach((entry, index) => {
      if (sortingAttr === entry.groupingAttr) {
        result = index;
      }
    });
    return result;
  }

}

interface CompetitorsList {
  groupingAttr: String;
  competitors: Competitor[];
}



