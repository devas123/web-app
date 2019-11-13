import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Category, Competitor} from '../../../../commons/model/competition.model';
import {Fight} from '../../../../commons/model/competition.model';
import {CdkDrag, CdkDragDrop} from '@angular/cdk/drag-drop';
import {DragData} from '../../containers/brackets-editor-container/brackets-editor-container.component';

interface LRBucket {
  totalRounds: number;
  roundFights: RoundFights[];
}

interface Bucket {
  left: LRBucket;
  right: LRBucket;
}

interface RoundFights {
  round: number;
  fights: Fight[];
}

const maxBucketRounds = 4;

@Component({
  selector: 'app-brackets-editor',
  templateUrl: './brackets-editor.component.html',
  styleUrls: ['./brackets-editor.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketsEditorComponent implements OnInit, OnChanges {

  @Output()
  competitorMoved = new EventEmitter();

  @Input()
  category: Category;

  @Input()
  competitionId: string;

  structuredFights: {
    totalRounds: number,
    totalFights: number,
    buckets: Bucket[]
  };

  _fights: Fight[];

  calculateTotalRounds = (fights: Fight[], minRound: number) => {
    return fights.map(f => f.round).sort((a, b) => a - b).pop() + 1 - minRound;
  }


  // mock = mockfights.filter(f => !f.id.includes('ABSOLUTE'));

  constructor() {
  }

  @Input('fights')
  set fights(f: Fight[]) {
    if (this.category) {
      this._fights = f.filter(ff => ff.categoryId === this.category.id);
    } else {
      this._fights = [];
    }
  }

  ngOnInit() {
  }

  getRoundFights(offset: number, bucket: LRBucket, bucketNumber: number) {
    if (bucketNumber === this.structuredFights.buckets.length - 1) {
      const {totalRounds} = bucket;
      const delta = totalRounds - maxBucketRounds;
      // this is the last bucket, another logic for it
      if (delta + offset >= 0) {
        return bucket.roundFights[delta + offset];
      }
    } else {
      return bucket.roundFights[offset];
    }
  }

  dropAllowed = (ff: Fight) => (item: CdkDrag<DragData>) => {
    const {from, competitor} = item.data;
    return from.id !== ff.id && from.round === ff.round && !(ff.parentId1 && ff.parentId2) && !!competitor;
  }

  onItemDrop(event: CdkDragDrop<Fight[]>, targetFight: Fight) {
    const index = event.currentIndex;
    const {from, competitor} = event.item.data;
    this.sendMoveCompetitorAction({
      sourceFightId: from.id,
      competitorId: competitor.email,
      targetFightId: targetFight.id,
      index
    });
  }

  sendMoveCompetitorAction(event: { sourceFightId: string, competitorId: Competitor, targetFightId: string, index: number }) {
    this.competitorMoved.next({
      ...event,
      categoryId: this.category.id,
      competitionId: this.competitionId
    });
  }

  getRoundName(round: number) {
    const totalRounds = this.structuredFights.totalRounds;
    if (totalRounds - round === 2) {
      return 'Semifinals';
    }
    if (totalRounds - round === 1) {
      return 'Finals';
    }
    return `Round ${round + 1}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.category && this._fights) {
      this._fights = this._fights.filter(ff => ff.categoryId === this.category.id);
      const roundFights = {};

      const minRound = this._fights.map(f => f.round).sort((a, b) => a - b)[0];
      const totalRounds = this.calculateTotalRounds(this._fights, minRound);

      this._fights.map(f => f.round).forEach(r => {
        roundFights[r - minRound] = this._fights.filter(f => f.round === r);
      });
      let i = 0;
      const buckets: Bucket[] = [] as Bucket[];
      let bucket: Bucket = {
        left: {totalRounds: 0, roundFights: [] as RoundFights[]},
        right: {totalRounds: 0, roundFights: [] as RoundFights[]}
      };
      const numberOfBuckets = Math.ceil(totalRounds / (maxBucketRounds - 1));
      let currentBucket = 0;
      while (i < totalRounds) {
        const currentMaxBucketRounds = currentBucket >= numberOfBuckets - 1 ? maxBucketRounds : maxBucketRounds - 1;
        let allFights = roundFights[i] as Fight[];
        allFights = allFights.sort((a, b) => a.numberInRound - b.numberInRound);
        const leftFights = allFights.slice(0, allFights.length / 2);
        const rightFights = allFights.slice(allFights.length / 2, allFights.length);
        bucket.left.roundFights.push({round: i, fights: leftFights});
        bucket.right.roundFights.push({round: i, fights: rightFights});
        bucket.left.totalRounds = bucket.left.totalRounds + 1;
        bucket.right.totalRounds = bucket.right.totalRounds + 1;
        if (bucket.right.roundFights.length >= currentMaxBucketRounds || bucket.left.roundFights.length >= currentMaxBucketRounds || i === totalRounds - 1) {
          buckets.push(bucket);
          bucket = {
            left: {totalRounds: 0, roundFights: [] as RoundFights[]},
            right: {totalRounds: 0, roundFights: [] as RoundFights[]}
          };
          currentBucket++;
        }
        i++;
      }
      this.structuredFights = {
        totalFights: this._fights.length,
        totalRounds,
        buckets
      };
    }
  }

}
