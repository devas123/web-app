import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FightsEditorChange} from '../../../../competition/reducers';
import {Competitor, Fight, Score} from '../../../../../commons/model/competition.model';
import produce, {applyPatches} from 'immer';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component(
  {
    selector: 'app-fights-editor',
    template: `
        <div class="fights-editor-container">
            <div class="two-column buttons-row">
                <button class="ui button" (click)="applyCurrentChange()" [disabled]="!(changes?.length > 0)">Apply</button>
                <button class="ui button" (click)="discardCurrentChange()" [disabled]="!(inverseChanges?.length > 0)">Discard</button>
                <button class="ui button" (click)="clear()" [disabled]="!(_changeFights?.length > 0)">Clear</button>
            </div>
            <div class="two-column fight-group" *ngIf="_changeFights?.length > 0" cdkDropListGroup>
                <div class="fight-cell" *ngFor="let fight of _changeFights; let i = index" cdkDropList (cdkDropListDropped)="drop($event, i)">
                    <div class="competitor-display" cdkDrag [cdkDragData]="{index: i}">
                        <div class="content">
                            {{fight?.scores[0]?.competitor?.firstName}}  {{fight?.scores[0]?.competitor?.lastName}}
                        </div>
                        <div class="sub header">{{fight?.scores[0]?.competitor?.academy}}</div>
                    </div>
                    <div class="competitor-display" cdkDrag [cdkDragData]="{index: i}">
                        <div class="content">
                            {{fight?.scores[1]?.competitor?.firstName}} {{fight?.scores[1]?.competitor?.lastName}}
                        </div>
                        <div class="sub header">{{fight?.scores[1]?.competitor?.academy}}</div>
                    </div>
                </div>
            </div>
        </div>`,
    styleUrls: ['fights-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
export class FightsEditorComponent {
  @Output()
  changeSaved = new EventEmitter<FightsEditorChange>();

  @Output()
  fightSelectionCleared = new EventEmitter<void>();

  @Output()
  changeSelected = new EventEmitter<string>();

  @Input()
  changeIds: string[] | number[];

  @Input()
  set change(c: FightsEditorChange) {
    if (c) {
      this.changeId = c.id;
      this.changes = c.changePatches;
      this.inverseChanges = c.changeInversePatches;
    } else {
      this.changeId = null;
      this.changes = [];
      this.inverseChanges = [];
    }
  }


  @Input()
  set changeFights(f: Fight[]) {
    if (f) {
      this._changeFights = f;
    } else {
      this._changeFights = [];
    }
  }

  _changeFights: Fight[] = [];
// all the changes the user made in the wizard
  private changes = <any>[];
// the inverse of all the changes made in the wizard
  private inverseChanges = <any>[];

  private changeId = null;

  drop(event: CdkDragDrop<{ competitor: Competitor, score: Score }[]>, containerIndex: number) {
    const {index} = event.item.data;
    this._changeFights = produce(
      this._changeFights,
      draft => {
        if (index === containerIndex) {
          moveItemInArray(draft[containerIndex].scores, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(draft[index].scores,
            draft[containerIndex].scores,
            event.previousIndex,
            event.currentIndex);
          if (draft[containerIndex].scores.length > 2) {
            let indexFrom = event.currentIndex + 1;
            if (indexFrom > 1) {
              indexFrom = 0;
            }
            transferArrayItem(draft[containerIndex].scores,
              draft[index].scores,
              indexFrom,
              event.previousIndex);
          }
        }
      },
      (patches, inversePatches) => {
        this.changes = [...this.changes, ...patches];
        this.inverseChanges = [...this.inverseChanges, ...inversePatches];
      }
    );
  }

  applyCurrentChange() {
    let compressedChanges = [];
    let compressedInverseChanges = [];
    produce(this._changeFights, draft => {
        applyPatches(draft, this.changes);
      },
      (patches, inversePatches) => {
        compressedChanges = patches;
        compressedInverseChanges = inversePatches;
      }
    );
    const change = <FightsEditorChange>{
      id: this.changeId,
      selectedFightIds: this._changeFights.map(f => f.id),
      changePatches: compressedChanges,
      changeInversePatches: compressedInverseChanges
    };
    this.changeSaved.next(change);
    this.changes = [];
    this.inverseChanges = [];
  }

  discardCurrentChange() {
    this._changeFights = produce(this._changeFights, draft => {
      applyPatches(draft, this.inverseChanges);
    });
    this.changes = [];
    this.inverseChanges = [];
  }

  clear() {
    this.fightSelectionCleared.next();
  }
}
