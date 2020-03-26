import {DashboardState} from '../../modules/event-manager/redux/dashboard-reducers';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Observable} from 'rxjs';
import {EmbeddedViewRef, ViewContainerRef} from '@angular/core';
import {EventPropsEntities, MatDescription} from '../../reducers/global-reducers';

const getRestrictionName = (res: CategoryRestriction, def = '') => {
  if (res) {
    if (res.name) {
      return res.name;
    } else {
      return `${res.type}:${res.minValue}-${res.maxValue} (${res.unit || ''})`;
    }
  }
  return def;
};

export const getRestrictionNameByType = (cat: Category, type: RestrictionType, def = '') => {
  if (cat.restrictions) {
    return getRestrictionName(cat.restrictions.find(r => r.type === type, def));
  } else {
    return def;
  }
};

export const getMinValueInt = (type: RestrictionType) => (category: Category) => {
  const rest = getRestrictionByType(category, type);
  return rest && rest.minValue && parseInt(rest.minValue, 10);
};

export const getMaxValueInt = (type: RestrictionType) => (category: Category) => {
  const rest = getRestrictionByType(category, type);
  return rest && rest.maxValue && parseInt(rest.maxValue, 10);
};

export const getRestrictionByType = (cat: Category, type: RestrictionType) => {
  if (cat && cat.restrictions) {
    return cat.restrictions.find(r => r.type === type);
  }
};

export const getAgeDivisionName = (cat: Category) => getRestrictionNameByType(cat, 'AGE', 'ALL AGES');
export const getWeightId = (cat: Category) => getRestrictionNameByType(cat, 'WEIGHT', 'ALL WEIGHTS');
export const getGender = (cat: Category) => getRestrictionNameByType(cat, 'GENDER', 'ALL');
export const getBeltType = (cat: Category) => getRestrictionNameByType(cat, 'SKILL', 'ALL BELTS');

export const displayCategory = (cat: Category, maxLength: number = -1) => {
  if (!cat) {
    return '';
  }
  const name = cat.name;
  const fullName = `${getGender(cat)}/${getAgeDivisionName(cat)}/${getBeltType(cat)}/${getWeightId(cat)}`;
  if (maxLength <= 0) {
    return name || fullName;
  }
  return name || (fullName.length < maxLength ? fullName : `${getGender(cat)} / ${getAgeDivisionName(cat)} / ${getBeltType(cat)} / ${getWeightId(cat)}`);
};

const hasAny = (str: string, searchStr) => str && str.startsWith(searchStr);

export const categoryFilter = value => cat => {
  return !value || value.length <= 0 || (cat.id
    && (hasAny(getWeightId(cat), value) || hasAny(getAgeDivisionName(cat), value) || hasAny(getBeltType(cat), value) || hasAny(getGender(cat), value)));
};

export const categoriesComparer = (a: Category, b: Category) => displayCategory(a).localeCompare(displayCategory(b));


export interface Period {
  id: string;
  name: string;
  startTime: string;
  endTime?: string;
  isActive: boolean;
  mats: MatDescription[];
  scheduleEntries?: ScheduleEntry[];
  scheduleRequirements?: ScheduleRequirement[];
  duration?: number;
  timeBetweenFights: number;
  riskPercent: number;
}

export interface ScheduleEntry {
  id: string;
  startTime: string;
  color: string;
  name: string;
  numberOfFights: number;
  fightDuration: number;
  categoryIds: string[];
  fightIds: string[];
  invalidFightIds: string[];
  matId: string;
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
}

export type CompetitorResultType = 'WIN_POINTS' | 'WIN_SUBMISSION' | 'WIN_DECISION' | 'DRAW' | 'OPPONENT_DQ' | 'BOTH_DQ' | 'WALKOVER';

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
  competitor: Competitor;
  score: Score;
  placeholderId?: string;
  order?: number;
}

export type RoundType = 'GRAND_FINAL' | 'THIRD_PLACE_FIGHT' | 'WINNER_BRACKETS' | 'LOSER_BRACKETS' | 'GROUP';

export interface Fight {
  fightName: string;
  id: string;
  categoryId: string;
  category?: Category;
  parentId1?: string;
  parentId2?: string;
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

export type RestrictionType = 'AGE' | 'SKILL' | 'WEIGHT' | 'GENDER' | 'SPORTS';

export const restrictionTypes: RestrictionType[] = [
  'AGE', 'SKILL', 'WEIGHT', 'GENDER', 'SPORTS'
];

export interface CategoryRestriction {
  id: string;
  name: string;
  type: RestrictionType;
  minValue: string;
  maxValue: string;
  unit: string;
}

export interface Category {
  id: string;
  name: string;
  restrictions: CategoryRestriction[];
  fightDuration: number;
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
  selectedEventFightsEditorState: FightsEditorState;
  categoryStateLoading: boolean;
}

export interface GroupDescriptor {
  id?: string;
  name?: string;
  size: number;
}

export interface CategoryBracketsStage {
  id: string;
  bracketType: BracketsType | null;
  stageType: StageType;
  stageStatus: string;
  waitForPrevious: boolean;
  hasThirdPlaceFight: boolean;
  stageOrder: number;
  resultDescriptor: StageResult;
  inputDescriptor: StageInputDescriptor;
  groupDescriptors: GroupDescriptor[];
}

export enum OperatorType {
  'EQUALS', 'IS_IN', 'LESS', 'GREATER', 'LEQ', 'GEQ'
}

export enum SelectorClassifier {
  'FIRST_N_PLACES',
  'LAST_N_PLACES',
  'WINNER_OF_FIGHT',
  'LOSER_OF_FIGHT',
}

export interface CompetitorSelector {
  applyToStageNumber: string;
  logicalOperator: string;
  classifier: SelectorClassifier;
  operator: OperatorType;
  selectorValue: string[];
}

export interface FightResultOption {
  description: string;
  shortName: string;
  draw: boolean;
  winnerPoints: number;
  winnerAdditionalPoints: number;
  loserPoints: number;
  loserAdditionalPoints: number;
}

interface CompetitorResult {
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
  additionalGroupSortingDescriptors?: AdditionalGroupSortingDescriptor[];
}

export interface StageInputDescriptor {
  selectors?: CompetitorSelector[];
  distributionType?: string;
  numberOfCompetitors: number;
  id?: string;
}

export interface CategoryBracketsStageCollection extends EntityState<CategoryBracketsStage> {
  selectedStageId: string | null;
  fightsAreLoading: boolean;
  selectedStageFights: FightsCollection;
}

export interface FightsCollection extends EntityState<Fight> {
  selectedFightId: string | null;
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

export interface EventManagerState {
  myEvents: EventPropsEntities;
  dashboardState: DashboardState;
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

export const fightsEditorChangeEntityAdapter: EntityAdapter<FightsEditorChange> = createEntityAdapter(
  {selectId: (change: FightsEditorChange) => change.id, sortComparer: false}
);


export const fightsEditorInitialState = fightsEditorChangeEntityAdapter.getInitialState({
  selectedChangeId: null
});

export const fightsInitialState: FightsCollection = fightEntityAdapter.getInitialState({
  selectedFightId: null
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
  selectedEventFightsEditorState: fightsEditorInitialState,
  categoryStateLoading: false
});


export interface FightsEditorChange {
  id: string;
  stageId: string;
  selectedFightIds: string[];
  changePatches: any[];
  changeInversePatches: any[];
}

export interface FightsEditorState extends EntityState<FightsEditorChange> {
  selectedChangeId: string | null;
}

