import {DashboardState} from '../../modules/event-manager/redux/dashboard-reducers';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Observable} from 'rxjs';
import {EmbeddedViewRef, ViewContainerRef} from '@angular/core';
import * as _ from 'lodash';
import {
  CategoryDescriptor,
  CategoryRestriction,
  CategoryRestrictionType,
  CategoryState,
  Competitor,
  FightDescription,
  FightResultOption,
  GroupChangeType,
  RegistrationGroup,
  RegistrationPeriod,
  StageDescriptor
} from "@frontend-nx/protobuf";

export const dragStartEvent = () => new CustomEvent('app-drag-start', {
  bubbles: true
});
export const dragEndEvent = () => new CustomEvent('app-drag-end', {
  bubbles: true
});


export interface Error {
  type: string;
  description: string;
}

export interface RegistrationPeriodCollection {
  [key: string]: RegistrationPeriod
}

export interface RegistrationGroupCollection {
  [key: string]: RegistrationGroup
}


export const displayCategory = (cat: CategoryDescriptor, maxLength: number = -1) => {
  if (!cat) {
    return '';
  }
  if (!_.isEmpty(cat.name)) {
    return cat.name;
  }
  if (_.isEmpty(cat.restrictions)) {
    return cat.name || cat.id;
  }
  return cat.restrictions.map(r => defaultRestrictionFormatter(false)(r)).join("/");
};

const hasAny = (str: string, searchStr) => str && str.startsWith(searchStr);

export const categoryFilter = value => (cat: CategoryState) => {
  return !value || value.length <= 0 || (cat.id
    && cat.category?.restrictions && cat.category?.restrictions.map(r => hasAny(r.name, value) || hasAny(r.alias, value) ||
      hasAny(r.value, value) || hasAny(r.minValue, value) || hasAny(r.maxValue, value)));
};

export const categoriesComparer = (a: CategoryState, b: CategoryState) => displayCategory(a.category).localeCompare(displayCategory(b.category));
export const previewCategoriesComparer = (a: CategoryDescriptor, b: CategoryDescriptor) => displayCategory(a).localeCompare(displayCategory(b));

export interface CompetitorGroupChange {
  competitorId: string;
  groupId: string;
  changeType: GroupChangeType;
}

export interface FightEditorChange {
  fightId: string;
  competitors: string[];
}


export const defaultRestrictionFormatter = (showName: boolean = true) => (restr: CategoryRestriction) => {
  if (restr.alias) {
    return restr.alias;
  }
  const name = showName ? `${restr.name}: ` : '';
  if (restr.type === CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_RANGE) {
    return `${name}${restr.minValue} - ${restr.maxValue}`;
  }
  return `${name}${restr.value}`;
};

export interface AdjacencyListEntry<Type> {
  id: Type;
  children: Type[];
}

export interface AdjacencyList<Type> {
  root: Type;
  vertices: AdjacencyListEntry<Type>[];
}

export interface CategoriesCollection extends EntityState<CategoryState> {
  selectedCategoryId: string | null;
  selectedCategoryStages: CategoryBracketsStageCollection;
  categoryStateLoading: boolean;
}

export interface PreviewCategoriesCollection extends EntityState<CategoryDescriptor> {
  selectedCategoryId: string | null;
}

export interface GroupDescriptor {
  id?: string;
  name?: string;
  size: number;
}


export interface CategoryBracketsStageCollection extends EntityState<StageDescriptor> {
  selectedStageId: string | null;
  fightsAreLoading: boolean;
  selectedStageFights: FightsCollection;
}

export interface FightsCollection extends EntityState<FightDescription> {
  selectedFightId: string | null;
  selectedFightFightResultOptions: FightResultOption[] | null;
}

export interface CompetitorsCollection extends EntityState<Competitor> {
  selectedCompetitorId: string | null;
  total: number;
  pageSize: number;
  pageNumber: number;
}

export interface MenuItem {
  name: string;
  class?: string | { [p: string]: any };
  style?: string;
  action?: () => any;
  link?: string;
  label?: string;
  showCondition?: () => Observable<boolean>;
  itemDisplayAction?: (container: ViewContainerRef) => EmbeddedViewRef<any>;
}

export interface HeaderDescription {
  header: string;
  subheader?: string;
  headerHtml?: string;
}

export interface CategoryConstructorState {
  restrictions: CategoryRestriction[];
  orderedNames: string[];
  adjacentLists: AdjacencyList<string>[];
  defaultRestrictions: CategoryRestriction[];
}

export interface EventManagerState {
  dashboardState: DashboardState;
  categoryConstructorState: CategoryConstructorState;
  socketConnected: boolean;
}


export const competitorEntityAdapter: EntityAdapter<Competitor> = createEntityAdapter<Competitor>({
  selectId: (c: Competitor) => c.id,
  sortComparer: false
});


export const fightEntityAdapter: EntityAdapter<FightDescription> = createEntityAdapter<FightDescription>({
  selectId: (fight: FightDescription) => fight.id,
  sortComparer: false
});

export const stagesEntityAdapter: EntityAdapter<StageDescriptor> = createEntityAdapter<StageDescriptor>({
  selectId: (stage: StageDescriptor) => stage.id,
  sortComparer: (st1, st2) => st1.stageOrder - st2.stageOrder
});


export const categoryEntityAdapter: EntityAdapter<CategoryState> = createEntityAdapter<CategoryState>({
  selectId: (category: CategoryState) => category.id,
  sortComparer: categoriesComparer
});

export const previewCategoriesEntityAdapter: EntityAdapter<CategoryDescriptor> = createEntityAdapter<CategoryDescriptor>({
  selectId: (category: CategoryDescriptor) => category.id,
  sortComparer: previewCategoriesComparer
});

export const fightsInitialState: FightsCollection = fightEntityAdapter.getInitialState({
  selectedFightId: null,
  selectedFightFightResultOptions: []
});

export const stagesInitialState: CategoryBracketsStageCollection = stagesEntityAdapter.getInitialState({
  selectedStageId: null,
  fightsAreLoading: false,
  selectedStageFights: fightsInitialState
});

export const initialCategoryConstructorState: CategoryConstructorState = {
  restrictions: [],
  defaultRestrictions: [],
  adjacentLists: [],
  orderedNames: []
};

export const competitorsInitialState: CompetitorsCollection = competitorEntityAdapter.getInitialState({
  selectedCompetitorId: null,
  total: 0,
  pageSize: 15,
  pageNumber: 1
});

export const categoriesInitialState: CategoriesCollection = categoryEntityAdapter.getInitialState({
  selectedCategoryId: null,
  selectedCategoryState: null,
  selectedCategoryStages: stagesInitialState,
  categoryStateLoading: false
});

export const previewCategoriesInitialState: PreviewCategoriesCollection = previewCategoriesEntityAdapter.getInitialState({
  selectedCategoryId: null,
});
