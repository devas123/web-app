import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, of, Subscription} from 'rxjs';
import {
  eventManagerGetSelectedEventDefaultFightResults,
  eventManagerGetSelectedEventName
} from '../../redux/event-manager-reducers';
import {
  CompetitorGroupChange,
  FightEditorChange,
  HeaderDescription
} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {
  eventManagerCategoryUnselected,
  eventManagerDropAllBracketsCommand,
  eventManagerDropCategoryBracketsCommand,
  eventManagerFightsEditorSubmitChangesCommand,
  eventManagerGenerateBrackets,
  eventManagerLoadDefaultFightResults,
  updateScheduleStatusCommand
} from '../../redux/event-manager-actions';
import {filter, map, take} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {
  BasicCompetitionInfoContainer,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {
  CategoryDescriptor, CategoryState,
  FightDescription,
  FightResultOption,
  StageDescriptor,
  StageStatus
} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-brackets-editor-container',
  templateUrl: './brackets-editor-container.component.html',
  styleUrls: ['./brackets-editor-container.component.scss']
})
export class BracketsEditorContainerComponent extends BasicCompetitionInfoContainer implements OnInit, OnDestroy {

  public competitionId: string;
  categoryId: string;
  private subs = new Subscription();
  defaultFightResultOptions$: Observable<FightResultOption[]>;
  editMode = false;
  showResults = false;

  @ViewChild('categorySelect', {static: true})
  categorySelect: TemplateRef<any>;
  bracketsSize$: Observable<number>;

  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router, menuService: MenuService, public bracketsInfo: CommonBracketsInfoContainer) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(
        select(eventManagerGetSelectedEventName),
        filter(name => !!name),
        map(name => <HeaderDescription>{
          header: 'Brackets',
          subheader: name
        })
      ),
      menu: [
        {
          name: 'Return',
          action: () => this.goBack()
        },
        {
          name: 'Edit stage',
          showCondition: () => combineLatest([this.bracketsInfo.stages$, this.bracketsInfo.competition$, of(this.editMode)])
            .pipe(map(([stages, competition, editMode]) => !editMode && (stages && stages.length > 0) && (!!competition && !competition.bracketsPublished))),
          action: () => this.toggleEditBrackets()
        },
        {
          name: 'Close',
          showCondition: () => of(this.editMode),
          action: () => this.toggleEditBrackets()
        },
        {
          name: 'Hide Results',
          showCondition: () => of(this.showResults),
          action: () => this.toggleShowResults()
        },
        {
          name: 'Show Results',
          showCondition: () => of(this.showResults).pipe(map(r => !r)),
          action: () => this.toggleShowResults()
        },
        {
          name: 'Drop selected',
          action: () => this.dropSelectedBrackets(),
          showCondition: () => combineLatest([this.bracketsInfo.stages$, this.bracketsInfo.competition$])
            .pipe(map(([stages, competition]) => (!stages || stages.length === 0) && (!!competition && !competition.bracketsPublished))).pipe(map(res => !res))
        },
        {
          name: 'Drop all',
          action: () => this.dropAllBrackets(),
          showCondition: () => combineLatest([this.bracketsInfo.stages$, this.bracketsInfo.competition$])
            .pipe(map(([stages, competition]) => (!stages || stages.length === 0) && (!!competition && !competition.bracketsPublished))).pipe(map(res => !res))
        },
        {
          name: 'Select',
          itemDisplayAction: container => this.menuService.createView(container, this.categorySelect, {implicit$: this.categorySelect})
        }
      ]
    }, menuService);
    const competitionId$ = this.store.pipe(select(getSelectedEventId));
    const categoryId$ = this.route.queryParams.pipe(map(params => params['categoryId']));
    this.defaultFightResultOptions$ = this.store.pipe(select(eventManagerGetSelectedEventDefaultFightResults));
    this.bracketsSize$ = this.bracketsInfo.mapBucketSize(5, 2);
    this.subs.add(competitionId$.subscribe(id => this.competitionId = id));
    this.subs.add(categoryId$.subscribe(id => this.categoryId = id));
    this.subs.add(combineLatest([competitionId$, categoryId$]).subscribe(([competitionId, categoryId]) => {
      this.bracketsInfo.selectCategory(categoryId, competitionId);
    }));
  }

  goBack() {
    this.router.navigate(['..'], {relativeTo: this.route}).catch(console.log);
  }

  optionsFilter = (options: CategoryState[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat.category).toLowerCase().includes(filterword.toLowerCase()));
  formatter = (option: CategoryState) => AddFighterComponent.displayCategory(option.category);

  setCategoryId(category: CategoryDescriptor) {
    this.editMode = false;
    this.bracketsInfo.category$.pipe(take(1)).subscribe(cat => {
      if (!cat || cat.id !== category.id) {
        const queryParams = {categoryId: category.id};
        this.router.navigate(['eventmanager', this.competitionId, 'brackets'], {queryParams}).catch(error => console.error(error));
      }
    });
  }

  toggleEditBrackets() {
    this.editMode = !this.editMode;
  }

  toggleShowResults() {
    this.showResults = !this.showResults;
  }

  sendTheChanges({fights, competitorGroupChanges}: { fights: FightDescription[], competitorGroupChanges: CompetitorGroupChange[] }) {
    combineLatest([this.bracketsInfo.competition$, this.bracketsInfo.category$, this.bracketsInfo.stage$]).pipe(
      take(1),
      filter(([competition, category, stage]) => !!competition && !!category && !!stage),
      map(([competition, category, stage]) => eventManagerFightsEditorSubmitChangesCommand({
        bracketsChanges: fights.map(f => (<FightEditorChange>{
          fightId: f.id,
          competitors: f.scores && f.scores.map(s => s.competitorId).filter(c => !!c)
        })), competitorGroupChanges, competitionId: competition.id, categoryId: category.id, stageId: stage.id
      }))
    ).subscribe(action => this.store.dispatch(action));
    this.editMode = !this.editMode;
  }

  dropSelectedBrackets() {
    this.sendCommandFromCategoryId(categoryId => eventManagerDropCategoryBracketsCommand(this.competitionId, categoryId));
  }

  dropAllBrackets() {
    if (this.competitionId) {
      this.store.dispatch(eventManagerDropAllBracketsCommand(this.competitionId));
    }
  }

  ngOnInit() {
    this.bracketsInfo.sendCommandFromCompetitionId(competitionId => eventManagerLoadDefaultFightResults({competitionId}));
  }

  generateBrackets(stages: StageDescriptor[]) {
    this.sendCommandFromCategoryId(categoryId => eventManagerGenerateBrackets({competitionId: this.competitionId, categoryId, stageDescriptors: stages}));
  }

  private sendCommandFromCategoryId(actionBuilder: (categoryId) => any) {
    this.bracketsInfo.sendCommandFromCategoryId(actionBuilder);
  }

  ngOnDestroy() {
    this.sendCommandFromCategoryId(() => eventManagerCategoryUnselected(this.competitionId));
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

  selectStage(id: string) {
    this.bracketsInfo.selectStageById(id);
  }

  updateStageStatus(event: { stageId: string; status: StageStatus }) {
    if (this.competitionId && event.stageId && event.status && this.categoryId) {
      this.store.dispatch(updateScheduleStatusCommand({competitionId: this.competitionId, categoryId: this.categoryId, ...event}));
    }
  }
}
