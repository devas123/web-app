import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CategoryBracketsStage, Competitor, Fight, GroupDescriptor} from '../../../../commons/model/competition.model';
import produce, {applyPatches} from 'immer';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {collectingReducer} from '../../../account/utils';

@Component(
  {
    selector: 'app-groups-editor',
    template: `
      <div class="fights-editor-container" cdkDropListGroup>
        <div class="two-column buttons-row">
          <button class="ui button" (click)="applyCurrentChange()" [disabled]="inverseChanges.length <= 0">Apply</button>
          <button class="ui button" (click)="discardCurrentChange()" [disabled]="inverseChanges.length <= 0">Discard</button>
          <button class="ui button" (click)="close()" [disabled]="!(seedFights?.length > 0)">Clear</button>
        </div>
        <div class="item-group top-aligned">
          <div class="item-group top-aligned" *ngFor="let group of getGroupDescriptors(); index as i" cdkDropList (cdkDropListDropped)="addCompetitorToGroup($event, group?.id)"
               [cdkDropListEnterPredicate]="groupCanAcceptMoreFighters(group)">
            <section>Group {{ i + 1 }}</section>
            <div class="competitor-display" *ngFor="let competitorId of competitorIdsByGroupId(group?.id);" cdkDrag [cdkDragData]="{competitorId: competitorId, groupId: group?.id}">
              <div class="content">
                {{getCompetitor(competitorId)?.firstName}}  {{getCompetitor(competitorId)?.lastName}}
              </div>
              <div class="sub header">{{getCompetitor(competitorId)?.academy?.name}}</div>
            </div>
            <div class="empty-competitor empty-container bordered" *ngIf="competitorIdsByGroupId(group?.id)?.length <= 0">
              <div class="content cursor-default">
                <section>Drop here add competitor to this group.</section>
              </div>
            </div>
          </div>
        </div>
        <div class="item-group top-aligned" cdkDropList (cdkDropListDropped)="removeCompetitorFromGroup($event)">
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
export class GroupsEditorComponent {

  get undispatchedCompetitors() {
    return this.competitors.filter(cmp => !this.seedFights.find(f => f.scores.find(s => s.competitorId === cmp.id)));
  }

  @Output()
  changeSaved = new EventEmitter<Fight[]>();

  @Output()
  closeClicked = new EventEmitter<void>();

  @Input()
  seedFights: Fight[];

  @Input()
  competitors: Competitor[] = [];

  @Input()
  selectedStage: CategoryBracketsStage;

  inverseChanges = [];

  getGroupDescriptors() {
    if (this.selectedStage && this.selectedStage.groupDescriptors) {
      return Array.from(this.selectedStage.groupDescriptors).sort((a, b) => a.id.localeCompare(b.id));
    }
    return [];
  }

  private competitorIdsByGroupId = (groupId: string) => this.seedFights.filter(f => f.groupId === groupId).map(f => f.scores || []).reduce(collectingReducer).map(s => s.competitorId).filter(f => !!f);

  getGroupFights(groupId: string) {
    return this.seedFights.filter(f => f.groupId === groupId);
  }

  getCompetitor(competitorId: string) {
    return this.competitors && this.competitors.find(c => c.id === competitorId);
  }

  addCompetitorToGroup(event: CdkDragDrop<any>, groupId: string) {
    const fightWithPlaceholder = this.getGroupFights(groupId)?.find(f => f.scores && f.scores.find(s => !!s.placeholderId && !s.competitorId));
    const freePlaceholder = fightWithPlaceholder?.scores.find(s => !!s.placeholderId && !s.competitorId)?.placeholderId;
    const {competitorId} = event.item.data;
    if (freePlaceholder && competitorId) {
      this.seedFights = produce(this.seedFights, draft => {
        draft.forEach(f => {
          if (f.groupId === groupId) {
            f.scores.forEach(sc => {
              if (sc.placeholderId === freePlaceholder) {
                sc.competitorId = competitorId;
              }
            });
          }
        });
      }, (patches, inversePatches) => this.inverseChanges.push(inversePatches));
    }
  }

  removeCompetitorFromGroup(event: CdkDragDrop<any>) {
    const {competitorId, groupId} = event.item.data;
    if (competitorId && groupId) {
      this.seedFights = produce(this.seedFights, draft => {
        draft.forEach(f => {
          f.scores.forEach(sc => {
            if (sc.competitorId === competitorId) {
              delete sc.competitorId;
            }
          });
        });
      }, (patches, inversePatches) => this.inverseChanges.push(inversePatches));
    }
  }

  applyCurrentChange() {
    this.changeSaved.next(this.seedFights);
  }

  discardCurrentChange() {
    if (this.inverseChanges.length > 0) {
      this.seedFights = produce(this.seedFights, draft => {
        applyPatches(draft, this.inverseChanges);
      });
    }
    this.inverseChanges = [];
  }

  close() {
    this.closeClicked.next();
  }

  groupCanAcceptMoreFighters = (group: GroupDescriptor) => () => {
    return group && group.id && group.size && group.size > (this.competitorIdsByGroupId(group.id)?.length || 0);
  };
}
