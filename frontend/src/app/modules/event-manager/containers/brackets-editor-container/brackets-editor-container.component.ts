import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, of, Subscription} from 'rxjs';
import {
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFights,
  eventManagerGetSelectedEventSelectedCategoryFightsAreLoading, eventManagerGetSelectedEventSelectedCategoryFightsEditorStateAllChanges,
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFights,
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFightsIds,
  HeaderDescription
} from '../../redux/event-manager-reducers';
import {Category, Fight} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {
  eventManagerCategorySelected,
  eventManagerCategoryUnselected,
  eventManagerDropAllBracketsCommand,
  eventManagerDropCategoryBracketsCommand,
  eventManagerFightForChangeSelected,
  eventManagerFightsEditorSubmitChanges,
  eventManagerGenerateBrackets,
  eventManagerMoveFighter
} from '../../redux/event-manager-actions';
import {filter, map, take, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {BasicCompetitionInfoContainer, ComponentCommonMetadataProvider} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-brackets-editor-container',
  templateUrl: './brackets-editor-container.component.html',
  styleUrls: ['./brackets-editor-container.component.css']
})
export class BracketsEditorContainerComponent extends BasicCompetitionInfoContainer implements OnInit, OnDestroy {

  private competitionId: string;
  private subs = new Subscription();

  competition$: Observable<CompetitionProperties>;
  fights$: Observable<Fight[]>;
  fightsAreLoading$: Observable<boolean>;
  category$: Observable<Category>;
  selectedCategory: Category;
  bucketsize$: Observable<number>;
  changeFightsIds$: Observable<string[]>;
  editMode = false;

  @ViewChild('categorySelect', {static: true})
  categorySelect: TemplateRef<any>;

  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router, private observer: BreakpointObserver, menuService: MenuService) {
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
          action: () => this.goBack(),
        },
        {
          name: 'Edit',
          showCondition: () => combineLatest([this.fights$, this.competition$, of(this.editMode)])
            .pipe(map(([fights, competition, editMode]) => !editMode && (fights && fights.length > 0) && (!!competition && !competition.bracketsPublished))),
          action: () => this.toggleEditBrackets(),
        },
        {
          name: 'Save',
          showCondition: () => of(this.editMode),
          action: () => this.sendTheChanges(),
        },
        {
          name: 'Generate',
          action: () => this.generateBrackets(),
          showCondition: () => combineLatest([this.fights$, this.competition$]).pipe(map(([fights, competition]) => (!fights || fights.length === 0) && (!!competition && !competition.bracketsPublished)))
        },
        {
          name: 'Drop selected',
          action: () => this.dropSelectedBrackets(),
          showCondition: () => combineLatest([this.fights$, this.competition$])
            .pipe(map(([fights, competition]) => (!fights || fights.length === 0) && (!!competition && !competition.bracketsPublished))).pipe(map(res => !res))
        },
        {
          name: 'Drop all',
          action: () => this.dropAllBrackets(),
          showCondition: () => combineLatest([this.fights$, this.competition$])
            .pipe(map(([fights, competition]) => (!fights || fights.length === 0) && (!!competition && !competition.bracketsPublished))).pipe(map(res => !res))
        },
        {
          name: 'Select',
          itemDisplayAction: container => this.menuService.createView(container, this.categorySelect, {implicit$: this.categorySelect})
        }
      ]
    }, menuService);
    const competitionId$ = this.store.pipe(select(eventManagerGetSelectedEventId));
    const categoryId$ = this.route.queryParams.pipe(map(params => params['categoryId']));
    this.subs.add(competitionId$.subscribe(id => this.competitionId = id));
    this.subs.add(combineLatest([competitionId$, categoryId$]).subscribe(([competitionId, categoryId]) => {
      if (competitionId && categoryId) {
        this.store.dispatch(eventManagerCategorySelected(competitionId, categoryId));
      }
    }));
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFights));
    this.fightsAreLoading$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsAreLoading));
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory), tap(category => this.selectedCategory = category));
    this.bucketsize$ = observer.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
      map(b => b.matches ? 2 : 3)
    );
    this.changeFightsIds$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFightsIds));
  }

  goBack() {
    this.router.navigate(['..'], {relativeTo: this.route}).catch(console.log);
  }

  optionsFilter = (options: Category[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filterword.toLowerCase()));
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);

  sendCompetitorMovedAction(payload: any) {
    this.store.dispatch(eventManagerMoveFighter(payload.competitionId, payload.id, payload));
  }

  setCategoryId(category: Category) {
    this.editMode = false;
    if (!this.selectedCategory || this.selectedCategory.id !== category.id) {
      const queryParams = {categoryId: category.id};
      this.selectedCategory = category;
      this.router.navigate(['eventmanager', this.competitionId, 'brackets'], {queryParams}).catch(error => console.error(error));
    }
  }

  toggleEditBrackets() {
    this.editMode = !this.editMode;
  }

  sendTheChanges() {
    combineLatest([this.store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateAllChanges)), this.competition$, this.category$]).pipe(
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
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerDropCategoryBracketsCommand(this.competitionId, this.selectedCategory.id));
    }
  }

  dropAllBrackets() {
    if (this.competitionId) {
      this.store.dispatch(eventManagerDropAllBracketsCommand(this.competitionId));
    }
  }

  ngOnInit() {
  }

  generateBrackets() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerGenerateBrackets(this.competitionId, this.selectedCategory.id));
    }
  }

  ngOnDestroy() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerCategoryUnselected(this.competitionId));
    }
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

  addFightToCurrentChange(fightId: string) {
    this.store.dispatch(eventManagerFightForChangeSelected({fightId}));
  }
}
