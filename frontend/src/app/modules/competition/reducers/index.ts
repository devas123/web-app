import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Academy, Category, CategoryState, Competitor, Fight} from '../../../commons/model/competition.model';

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

const getAgeDivisionName = (cat: Category) => {
  if (cat.ageDivision) {
    return cat.ageDivision.name;
  } else {
    return 'ALL AGES';
  }
};

const getWeightId = (cat: Category) => {
  if (cat.weight) {
    return cat.weight.name;
  } else {
    return 'ALL WEIGHTS';
  }
};

export const displayCategory = (cat: Category) => {
  if (!cat) {
    return '';
  }
  return `${cat.gender}/${getAgeDivisionName(cat)}/${cat.beltType}/${getWeightId(cat)}`;
};

const categoriesComparer = (a: Category, b: Category) => displayCategory(a).localeCompare(displayCategory(b));

export const categoryEntityAdapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: (category: Category) => category.id,
  sortComparer: categoriesComparer
});

export interface FightsEditorChange {
  id: string;
  selectedFightIds: string[];
  changePatches: any[];
  changeInversePatches: any[];
}

export interface FightsEditorState extends EntityState<FightsEditorChange> {
  selectedChangeId: string | null;
}

export const fightsEditorChangeEntityAdapter: EntityAdapter<FightsEditorChange> = createEntityAdapter(
  {selectId: (change: FightsEditorChange) => change.id, sortComparer: false}
);


export interface CategoriesCollection extends EntityState<Category> {
  selectedCategoryId: string | null;
  selectedCategoryState: CategoryState;
  selectedCategoryFights: FightsCollection;
  selectedEventFightsEditorState: FightsEditorState;
}

export interface FightsCollection extends EntityState<Fight> {
  selectedFightId: string | null;
  bracketsType: string | null;
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

export const fightsEditorInitialState = fightsEditorChangeEntityAdapter.getInitialState({
  selectedChangeId: null
});

export const fightsInitialState: FightsCollection = fightEntityAdapter.getInitialState({
  selectedFightId: null,
  bracketsType: null
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
  selectedCategoryFights: fightsInitialState,
  selectedEventFightsEditorState: fightsEditorInitialState
});
