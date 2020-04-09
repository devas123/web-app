import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Competitor, CompScore, Fight} from '../../../../commons/model/competition.model';
import produce from 'immer';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component(
  {
    selector: 'app-seed-editor',
    template: `
      <div class="fights-editor-container" cdkDropListGroup>
        <div class="two-column buttons-row">
          <button class="ui button" (click)="applyCurrentChange()">Apply</button>
          <button class="ui button" (click)="discardCurrentChange()">Discard</button>
          <button class="ui button" (click)="close()">Close</button>
        </div>
        <div class="item-group">
          <div class="item-cell" *ngFor="let fight of seedFights; let i = index" cdkDropList (cdkDropListDropped)="addCompetitorToFight($event, fight.id)"
               [cdkDropListEnterPredicate]="scoresRestriction(fight)">
            <div class="competitor-display" *ngFor="let score of getFilledScores(fight); index as k" cdkDrag [cdkDragData]="{competitorId: score?.competitorId, fightId: fight.id}">
              <div class="content">
                {{getCompetitor(score?.competitorId)?.firstName}}  {{getCompetitor(score?.competitorId)?.lastName}}
              </div>
              <div class="sub header">{{getCompetitor(score?.competitorId)?.academy?.name}}</div>
            </div>
            <div class="empty-competitor empty-container bordered" *ngIf="getFilledScores(fight).length < 2">
              <div class="content cursor-default">
                Empty
              </div>
            </div>
            <div class="empty-competitor empty-container bordered" *ngIf="getFilledScores(fight).length < 1">
              <div class="content cursor-default">
                Empty
              </div>
            </div>
          </div>
        </div>
        <div class="item-group top-aligned" cdkDropList (cdkDropListDropped)="removeCompetitorFromFight($event)">
          <div class="competitor-display" *ngFor="let competitor of undispatchedCompetitors;" cdkDrag [cdkDragData]="{competitorId: competitor.id}">
            <div class="content">
              {{competitor?.firstName}}  {{competitor?.lastName}}
            </div>
            <div class="sub header">{{competitor?.academy?.name}}</div>
          </div>
          <div class="empty-competitor empty-container bordered" *ngIf="undispatchedCompetitors?.length <= 0">
            <div class="content cursor-default">
              <section>All competitors are seeded.</section>
              <section>Drop here to undispatch.</section>
            </div>
          </div>
        </div>
      </div>`,
    styleUrls: ['fights-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
export class FightsEditorComponent implements OnChanges {

  get undispatchedCompetitors() {
    return this.competitors.filter(cmp => !this.seedFights.find(f => f.scores.find(s => s.competitorId === cmp.id)));
  }

  @Output()
  changeSaved = new EventEmitter<Fight[]>();

  @Output()
  closeClicked = new EventEmitter<void>();

  @Output()
  changeSelected = new EventEmitter<string>();

  @Input()
  changeIds: string[] | number[];

  @Input()
  seedFights: Fight[];

  @Input()
  competitors: Competitor[] = [];

// the inverse of all the changes made in the wizard;

  _originalFights;

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this._originalFights = this.seedFights;
  }

  scoresRestriction = (fight: Fight) => () => this.getFilledScores(fight)?.length < 2;

  getCompetitor(competitorId: string) {
    return this.competitors && this.competitors.find(c => c.id === competitorId);
  }


  addCompetitorToFight(event: CdkDragDrop<any>, toFightId: string) {
    const {competitorId, fightId: fromFightId} = event.item.data;
    const newIndex = event.currentIndex;
    const previousIndex = event.previousIndex;
    if (competitorId && toFightId) {
      this.seedFights = produce(this.seedFights, draft => {
        const fight = draft.find(f => f.id === toFightId);
        if (fight) {
          const index = Math.min(newIndex, fight.scores.length);
          const score = fight.scores[index];
          if (score && !!score.competitorId) {
            if (fight.scores.length < 2) {
              if (index === 0) {
                fight.scores[index + 1] = score;
              } else {
                fight.scores[index - 1] = score;
              }
            }
          }
          fight.scores[index] = <CompScore>{competitorId, score: {penalties: 0, advantages: 0, points: 0}};
        }
        if (fromFightId) {
          draft.find(f => f.id === fromFightId).scores.splice(previousIndex, 1);
        }
      });
    }
  }

  removeCompetitorFromFight(event: CdkDragDrop<any>) {
    const {competitorId, fightId} = event.item.data;
    const previousIndex = event.previousIndex;
    if (competitorId && fightId) {
      this.seedFights = produce(this.seedFights, draft => {
        draft.find(f => f.id === fightId).scores.splice(previousIndex, 1);
      });
    }
  }

  applyCurrentChange() {
    this.changeSaved.next(this.seedFights);
  }

  discardCurrentChange() {
    this.seedFights = this._originalFights;
  }

  close() {
    this.closeClicked.next();
  }

  getFilledScores(fight: Fight) {
    return fight.scores?.filter(sc => !!sc.competitorId) || [];
  }
}
