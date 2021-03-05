import {DashboardState} from '../../modules/event-manager/redux/dashboard-reducers';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Observable} from 'rxjs';
import {EmbeddedViewRef, ViewContainerRef} from '@angular/core';
import {EventPropsEntities, MatDescription} from '../../reducers/global-reducers';
import * as _ from 'lodash';

export const dragStartEvent = () => new CustomEvent('app-drag-start', {
  bubbles: true
});
export const dragEndEvent = () => new CustomEvent('app-drag-end', {
  bubbles: true
});

export const getRestrictionByType = (cat: Category, type: string) => {
  if (cat && cat.restrictions) {
    return cat.restrictions.find(r => r.name === type);
  }
};

export const displayCategory = (cat: Category, maxLength: number = -1) => {
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

export const categoryFilter = value => cat => {
  return !value || value.length <= 0 || (cat.id
    && cat.restrictions && cat.restrictions.map(r => hasAny(r.name, value) || hasAny(r.alias, value) ||
       hasAny(r.value, value) || hasAny(r.minValue, value) || hasAny(r.maxValue, value)));
};

export const categoriesComparer = (a: Category, b: Category) => displayCategory(a).localeCompare(displayCategory(b));


export interface Period {
  id: string;
  name: string;
  startTime: string;
  endTime?: string;
  isActive: boolean;
  scheduleEntries?: ScheduleEntry[];
  scheduleRequirements?: ScheduleRequirement[];
  duration?: number;
  timeBetweenFights: number;
  riskPercent: number;
}

export interface MatIdAndSomeId {
  matId: string;
  someId: string;
  startTime: string;
}

export interface ScheduleEntry {
  id: string;
  startTime: string;
  endTime: string;
  color: string;
  name: string;
  numberOfFights: number;
  fightDuration: number;
  categoryIds: string[];
  fightIds: MatIdAndSomeId[];
  invalidFightIds: string[];
  periodId: string;
  description: string;
  entryType: string;
  requirementIds: string[];
  duration: number;
  order: number;
}

export type ScheduleRequirementType = 'CATEGORIES' | 'FIGHTS' | 'RELATIVE_PAUSE' | 'FIXED_PAUSE';

export interface ScheduleRequirement {
  id: string;
  categoryIds: string[];
  fightIds: string[];
  matId: string;
  periodId: string;
  entryType: ScheduleRequirementType;
  durationMinutes: number;
  name: string;
  color: string;
  force: boolean;
  startTime: string;
  endTime: string;
  entryOrder: number;
}

export interface FightResult {
  resultTypeId: String;
  winnerId: string;
  reason: string;
}

export interface Competitor {
  id: string;
  email: string;
  userId?: string;
  firstName: string;
  lastName: string;
  birthDate: Date | string;
  academy?: Academy;
  categories: string[];
  competitionId: string;
  registrationStatus: string;
  promo?: string;
}

export interface Score {
  advantages: number;
  points: number;
  penalties: number;
}

export interface CompScore {
  competitorId: string;
  score: Score;
  placeholderId?: string;
  parentFightId?: string;
  parentReferenceType?: String;
  order?: number;
}

export type RoundType = 'GRAND_FINAL' | 'THIRD_PLACE_FIGHT' | 'WINNER_BRACKETS' | 'LOSER_BRACKETS' | 'GROUP';
export type GroupChangeType = 'ADD' | 'REMOVE';


export interface CompetitorGroupChange {
  competitorId: string;
  groupId: string;
  changeType: GroupChangeType;
}
export interface FightEditorChange {
  fightId: string;
  competitors: string[];
}

export interface Fight {
  fightName: string;
  id: string;
  categoryId: string;
  winFight?: string;
  loseFight?: string;
  competitionId: string;
  duration: number;
  scores: CompScore[];
  round: number;
  roundType: RoundType;
  status: string;
  fightResult?: FightResult;
  numberInRound: number;
  mat?: MatDescription;
  numberOnMat?: number;
  priority: number;
  period?: string;
  stageId: string;
  groupId: string;
  startTime?: Date;
}

export interface Academy {
  id: string;
  name: string;
  coaches?: string[];
  created?: number;
}

export type BracketsType = 'SINGLE_ELIMINATION' | 'DOUBLE_ELIMINATION' | 'GROUP';

export enum GroupSortSpecifier { 'DIRECT_FIGHT_RESULT', 'MANUAL', 'POINTS_DIFFERENCE', 'TOTAL_POINTS'}

export enum GroupSortDirection {'DESC', 'ASC'}

export type StageType = 'PRELIMINARY' | 'FINAL';

export type RestrictionType = 'Value' | 'Range';

export const restrictionTypes: RestrictionType[] = [
  'Value', 'Range'
];

export const  defaultRestrictionFormatter = (showName: boolean = true) => (restr: CategoryRestriction) => {
  if (restr.alias) {
    return restr.alias;
  }
  const name = showName ? `${restr.name}: ` : '';
  if (restr.type === 'Range') {
    return `${name}${restr.minValue} - ${restr.maxValue}`;
  }
  return `${name}${restr.value}`;
};

export interface CategoryRestriction {
  id: string;
  name: string;
  type: RestrictionType;
  minValue: string;
  maxValue: string;
  value: string;
  alias: string;
  unit: string;
}

export interface AdjacencyListEntry<Type> {
  id: Type;
  children: Type[];
}

export interface AdjacencyList<Type> {
  root: Type;
  vertices: AdjacencyListEntry<Type>[];
}

export interface Category {
  id: string;
  name: string;
  restrictions: CategoryRestriction[];
  numberOfCompetitors: number;
  fightsNumber: number;
  registrationOpen: boolean;
}

export interface CategoryState {
  id: string;
  category: Category;
  status: string;
  numberOfCompetitors: number;
}

export interface CategoriesCollection extends EntityState<Category> {
  selectedCategoryId: string | null;
  selectedCategoryState: CategoryState;
  selectedCategoryStages: CategoryBracketsStageCollection;
  categoryStateLoading: boolean;
}

export interface GroupDescriptor {
  id?: string;
  name?: string;
  size: number;
}

export type StageStatus =  'APPROVED' |  'WAITING_FOR_APPROVAL' |  'WAITING_FOR_COMPETITORS' | 'FINISHED' | 'IN_PROGRESS';

export const stageStatusValues: StageStatus[] = ['APPROVED', 'WAITING_FOR_APPROVAL',  'WAITING_FOR_COMPETITORS', 'FINISHED', 'IN_PROGRESS'];

export interface CategoryBracketsStage {
  id: string;
  bracketType: BracketsType;
  stageType: StageType;
  stageStatus: StageStatus;
  waitForPrevious: boolean;
  hasThirdPlaceFight: boolean;
  stageOrder: number;
  stageResultDescriptor: StageResult;
  inputDescriptor: StageInputDescriptor;
  groupDescriptors: GroupDescriptor[];
}

export enum OperatorType {
  'EQUALS', 'IS_IN', 'LESS', 'GREATER', 'LEQ', 'GEQ'
}

export enum SelectorClassifier {
  'FIRST_N_PLACES',
  'LAST_N_PLACES',
}

export interface CompetitorSelector {
  applyToStageId: string;
  logicalOperator: string;
  classifier: SelectorClassifier;
  operator: OperatorType;
  selectorValue: string[];
}

export interface FightResultOption {
  id: string;
  description: string;
  shortName: string;
  draw: boolean;
  winnerPoints: number;
  winnerAdditionalPoints: number;
  loserPoints: number;
  loserAdditionalPoints: number;
}

export interface CompetitorResult {
  id: string;
  competitorId: string;
  points: number;
  round: number;
  place: number;
  groupId: string;
}

export interface AdditionalGroupSortingDescriptor {
  groupSortDirection: GroupSortDirection;
  groupSortSpecifier: GroupSortSpecifier;
}

export interface StageResult {
  id: string;
  name?: string;
  competitorResults?: CompetitorResult[];
  fightResultOptions?: FightResultOption[];
  forceManualAssignment?: boolean;
  outputSize: number;
  additionalGroupSortingDescriptors?: AdditionalGroupSortingDescriptor[];
}

export interface StageInputDescriptor {
  selectors?: CompetitorSelector[];
  distributionType?: string;
  numberOfCompetitors: number;
  fightDuration: number;
  id?: string;
}

export interface CategoryBracketsStageCollection extends EntityState<CategoryBracketsStage> {
  selectedStageId: string | null;
  fightsAreLoading: boolean;
  selectedStageFights: FightsCollection;
}

export interface FightsCollection extends EntityState<Fight> {
  selectedFightId: string | null;
  selectedFightFightResultOptions: FightResultOption[] | null;
}

export interface CompetitorsCollection extends EntityState<Competitor> {
  selectedCompetitorId: string | null;
  total: number;
  pageSize: number;
  pageNumber: number;
}

export interface AcademiesCollection extends EntityState<Academy> {
  selectedAcademyId: string | null;
  total: number;
  pageSize: number;
  pageNumber: number;
}

export interface MenuItem {
  name: string;
  class?: string | { [p: string]: any };
  style?: string;
  action?: () => any;
  label?: string;
  showCondition?: () => Observable<boolean>;
  itemDisplayAction?: (container: ViewContainerRef) => EmbeddedViewRef<any>;
}

export interface HeaderDescription {
  header: string;
  subheader: string | null;
  headerHtml: string | null;
}

export interface CategoryConstructorState {
  restrictions: CategoryRestriction[];
  orderedNames: string[];
  adjacentLists: AdjacencyList<string>[];
  defaultRestrictions: CategoryRestriction[];
}

export interface EventManagerState {
  myEvents: EventPropsEntities;
  dashboardState: DashboardState;
  categoryConstructorState: CategoryConstructorState;
  socketConnected: boolean;
  header: HeaderDescription;
}


export const competitorEntityAdapter: EntityAdapter<Competitor> = createEntityAdapter<Competitor>({
  selectId: (c: Competitor) => c.id,
  sortComparer: false
});

export const academyEntityAdapter: EntityAdapter<Academy> = createEntityAdapter<Academy>({
  selectId: (c: Academy) => c.id,
  sortComparer: false
});

export const fightEntityAdapter: EntityAdapter<Fight> = createEntityAdapter<Fight>({
  selectId: (fight: Fight) => fight.id,
  sortComparer: false
});

export const stagesEntityAdapter: EntityAdapter<CategoryBracketsStage> = createEntityAdapter<CategoryBracketsStage>({
  selectId: (stage: CategoryBracketsStage) => stage.id,
  sortComparer: (st1, st2) => st1.stageOrder - st2.stageOrder
});


export const categoryEntityAdapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: (category: Category) => category.id,
  sortComparer: categoriesComparer
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

export const academiesInitialState: AcademiesCollection = academyEntityAdapter.getInitialState({
  selectedAcademyId: null,
  total: 0,
  pageSize: 15,
  pageNumber: 1
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
