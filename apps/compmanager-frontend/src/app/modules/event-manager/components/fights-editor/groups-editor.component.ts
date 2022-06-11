import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import produce from 'immer';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {collectingReducer, uniqueFilter} from '../../../account/utils';
import {Dictionary} from '@ngrx/entity';
import * as _ from 'lodash';
import {
  Competitor,
  CompetitorMovedToGroup,
  FightDescription,
  GroupChangeType,
  StageDescriptor
} from "@frontend-nx/protobuf";

const changePedicate = (groupId: string, competitorId: string, changeType: GroupChangeType) => (ch: CompetitorMovedToGroup) => ch.groupId === groupId && ch.competitorId === competitorId && ch.changeType === changeType;

@Component(
  {
    selector: 'app-groups-editor',
    template: `
      <div class="fights-editor-container" cdkDropListGroup>
        <div class="two-column buttons-row">
          <button class="ui button" (click)="applyCurrentChange()" [disabled]="_competitorGroupChanges.length <= 0">Apply</button>
          <button class="ui button" (click)="discardCurrentChange()" [disabled]="_competitorGroupChanges.length <= 0">Discard</button>
          <button class="ui button" (click)="close()" [disabled]="!(_competitorGroupChanges?.length === 0)">Clear</button>
        </div>
        <div class="item-group top-aligned">
          <div class="item-group top-aligned" *ngFor="let group of getGroupDescriptors(); index as i" cdkDropList (cdkDropListDropped)="addCompetitorToGroup($event, group?.id)">
            <section>Group {{ i + 1 }}, size: {{ group.size || 0 }}</section>
            <div class="competitor-display" *ngFor="let competitorId of getDispatchedCompetitorsByGroup(group?.id);" cdkDrag (cdkDragStarted)="startDrag()" (cdkDragEnded)="stopDrag()" [cdkDragData]="{competitorId: competitorId, groupId: group?.id}">
              <div class="content">
                {{getCompetitor(competitorId)?.firstName}}  {{getCompetitor(competitorId)?.lastName}}
              </div>
              <div class="sub header">{{getCompetitor(competitorId)?.academy?.name}}</div>
            </div>
            <div class="empty-competitor empty-container bordered" *ngIf="getDispatchedCompetitorsByGroup(group?.id)?.length <= 0">
              <div class="content cursor-default">
                <section>Drop here add competitor to this group.</section>
              </div>
            </div>
          </div>
        </div>
        <div class="item-group top-aligned" cdkDropList (cdkDropListDropped)="removeCompetitorFromGroup($event)">
          <section>Unseeded competitors</section>
          <div class="competitor-display" *ngFor="let competitor of undispatchedCompetitors;" cdkDrag (cdkDragStarted)="startDrag()" (cdkDragEnded)="stopDrag()" [cdkDragData]="{competitorId: competitor.id}">
            <div class="content">
              {{competitor?.firstName}}  {{competitor?.lastName}}
            </div>
            <div class="sub header">{{competitor?.academy?.name}}</div>
          </div>
          <div class="empty-competitor empty-container bordered" *ngIf="undispatchedCompetitors?.length <= 0">
            <div class="content cursor-default">
              <section>All competitors are seeded.</section>
              <section>Drop here to unseed.</section>
            </div>
          </div>
        </div>
      </div>`,
    styleUrls: ['fights-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
export class GroupsEditorComponent {

  get undispatchedCompetitors() {
    return this.competitors.filter( cmp => !this._competitorGroupChanges.find(ch => ch.changeType === GroupChangeType.GROUP_CHANGE_TYPE_ADD && ch.competitorId === cmp.id)
      && (this._competitorGroupChanges.find(ch => ch.changeType === GroupChangeType.GROUP_CHANGE_TYPE_REMOVE && ch.competitorId === cmp.id)
      || !this.flatCompetitors.includes(cmp.id)));
  }

  get flatCompetitors() {
    return _.flowRight(_.uniq, _.flattenDeep, _.values)(this._competitorsByGroupsDictionary);
  }

  @Output()
  changeSaved = new EventEmitter<CompetitorMovedToGroup[]>();

  @Output()
  closeClicked = new EventEmitter<void>();

  @Input()
  set seedFights(value: FightDescription[]) {
    this._competitorsByGroupsDictionary = {};
    if (value && value.length > 0) {
      const byGroups = _.groupBy(value, f => f.groupId);
      Object.keys(byGroups).forEach(key => {
        this._competitorsByGroupsDictionary[key] = byGroups[key].map(f => f?.scores?.map(s => s.competitorId) || []).reduce(collectingReducer,[]).filter(f => !!f).filter(uniqueFilter);
      });
    }
  }

  @Input()
  competitors: Competitor[] = [];

  @Input()
  selectedStage: StageDescriptor;

  _competitorGroupChanges: CompetitorMovedToGroup[] = [];
  _competitorsByGroupsDictionary: Dictionary<string[]> = {};

  getGroupDescriptors() {
    if (this.selectedStage && this.selectedStage.groupDescriptors) {
      return Array.from(this.selectedStage.groupDescriptors).sort((a, b) => a.id.localeCompare(b.id));
    }
    return [];
  }

  getDispatchedCompetitorsByGroup(groupId: string) {
    return _.union(
      this._competitorsByGroupsDictionary[groupId].filter(c => !this._competitorGroupChanges.find(ch => ch.changeType === GroupChangeType.GROUP_CHANGE_TYPE_REMOVE && ch.groupId === groupId && ch.competitorId === c)),
      this._competitorGroupChanges.filter(ch => ch.changeType === GroupChangeType.GROUP_CHANGE_TYPE_ADD && ch.groupId === groupId).map(ch => ch.competitorId)
    );
  }


  getGroupFights(groupId: string) {
    return this.seedFights.filter(f => f.groupId === groupId);
  }

  constructor(private cd: ChangeDetectorRef) {
  }

  getCompetitor(competitorId: string) {
    return this.competitors && this.competitors.find(c => c.id === competitorId);
  }

  addCompetitorToGroup(event: CdkDragDrop<any>, groupId: string) {
    this._competitorGroupChanges = produce(this._competitorGroupChanges, draft => {
      const {competitorId, groupId: fromGroupId} = event.item.data;
      if (!draft.find(changePedicate(groupId, competitorId, GroupChangeType.GROUP_CHANGE_TYPE_ADD)) && fromGroupId !== groupId) {
        const removeChange = draft.find(changePedicate(groupId, competitorId, GroupChangeType.GROUP_CHANGE_TYPE_REMOVE));
        if (removeChange) {
          draft.splice(draft.indexOf(removeChange, 1));
        } else {
          draft.push(<CompetitorMovedToGroup>{competitorId, groupId, changeType: GroupChangeType.GROUP_CHANGE_TYPE_ADD});
        }
        if (fromGroupId) {
          const addChange = draft.find(changePedicate(fromGroupId, competitorId, GroupChangeType.GROUP_CHANGE_TYPE_ADD));
          if (addChange) {
            draft.splice(draft.indexOf(addChange, 1));
          } else {
            draft.push(<CompetitorMovedToGroup>{competitorId, groupId: fromGroupId, changeType: GroupChangeType.GROUP_CHANGE_TYPE_REMOVE});
          }
        }
      }
    });
  }

  removeCompetitorFromGroup(event: CdkDragDrop<any>) {
    const {competitorId, groupId} = event.item.data;
    if (competitorId && groupId) {
      this._competitorGroupChanges = produce(this._competitorGroupChanges, draft => {
        if (!draft.find(changePedicate(groupId, competitorId, GroupChangeType.GROUP_CHANGE_TYPE_REMOVE))) {
          draft.push({changeType: GroupChangeType.GROUP_CHANGE_TYPE_REMOVE, competitorId, groupId});
        }
      });
    }
  }

  applyCurrentChange() {
    if (this._competitorGroupChanges && this._competitorGroupChanges.length > 0) {
      this.changeSaved.next(this._competitorGroupChanges);
    }
  }

  discardCurrentChange() {
    this._competitorGroupChanges = [];
  }

  close() {
    this.closeClicked.next();
  }

  startDrag() {
    this.cd.detach();
  }

  stopDrag() {
    this.cd.reattach();
  }
}
