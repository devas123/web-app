import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, of, Subscription} from 'rxjs';
import {
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateAllChanges, selectedEvent
} from '../../redux/event-manager-reducers';
import {Category, CategoryBracketsStage, HeaderDescription} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {
  eventManagerCategoryBracketsStageSelected,
  eventManagerCategorySelected,
  eventManagerCategoryUnselected,
  eventManagerDropAllBracketsCommand,
  eventManagerDropCategoryBracketsCommand,
  eventManagerFightForChangeSelected,
  eventManagerFightsEditorSubmitChanges,
  eventManagerGenerateBrackets
} from '../../redux/event-manager-actions';
import {filter, map, take} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {
  BasicCompetitionInfoContainer,
  ComponentCommonMetadataProvider
} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {CommonBracketsContainer} from '../../../../commons/classes/common-brackets-container.component';

@Component({
  selector: 'app-brackets-editor-container',
  templateUrl: './brackets-editor-container.component.html',
  styleUrls: ['./brackets-editor-container.component.css']
})
export class BracketsEditorContainerComponent extends BasicCompetitionInfoContainer implements OnInit, OnDestroy {

  private competitionId: string;
  private subs = new Subscription();

  bracketsInfo: CommonBracketsContainer;
  changeFightsIds$: Observable<string[]>;
  editMode = false;

  @ViewChild('categorySelect', {static: true})
  categorySelect: TemplateRef<any>;

  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router, private observer: BreakpointObserver, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(
        select(selectedEvent.name()),
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
          name: 'Edit',
          showCondition: () => combineLatest([this.bracketsInfo.stages$, this.bracketsInfo.competition$, of(this.editMode)])
            .pipe(map(([stages, competition, editMode]) => !editMode && (stages && stages.length > 0) && (!!competition && !competition.bracketsPublished))),
          action: () => this.toggleEditBrackets()
        },
        {
          name: 'Save',
          showCondition: () => of(this.editMode),
          action: () => this.sendTheChanges()
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
    this.bracketsInfo = new CommonBracketsContainer(store, observer);
    this.subs.add(competitionId$.subscribe(id => this.competitionId = id));
    this.subs.add(combineLatest([competitionId$, categoryId$]).subscribe(([competitionId, categoryId]) => {
      if (competitionId && categoryId) {
        this.store.dispatch(eventManagerCategorySelected(competitionId, categoryId));
      }
    }));
  }

  goBack() {
    this.router.navigate(['..'], {relativeTo: this.route}).catch(console.log);
  }

  optionsFilter = (options: Category[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filterword.toLowerCase()));
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);

  setCategoryId(category: Category) {
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

  sendTheChanges() {
    combineLatest([this.store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateAllChanges)), this.bracketsInfo.competition$, this.bracketsInfo.category$]).pipe(
      take(1),
      filter(([changes, competition, category]) => !!changes && (changes.length > 0) && !!competition && !!category),
      map(([changes, competition, category]) => eventManagerFightsEditorSubmitChanges({
        changes: changes.filter(c => (c.changePatches.length > 0) || (c.changeInversePatches.length > 0)),
        competitionId: competition.id,
        categoryId: category.id
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
  }

  generateBrackets(stages: CategoryBracketsStage[]) {
    this.sendCommandFromCategoryId(categoryId => eventManagerGenerateBrackets(this.competitionId, categoryId, stages));
  }

  private sendCommandFromCategoryId(actionBuilder: (categoryId) => any) {
    this.bracketsInfo.sendCommandFromCategoryId(actionBuilder);
  }

  ngOnDestroy() {
    this.sendCommandFromCategoryId(categoryId => eventManagerCategoryUnselected(this.competitionId));
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

  addFightToCurrentChange(fightId: string) {
    this.store.dispatch(eventManagerFightForChangeSelected({fightId}));
  }

  selectStage(id: string) {
    this.store.dispatch(eventManagerCategoryBracketsStageSelected({
      competitionId: this.competitionId,
      selectedStageId: id
    }));
  }
}
