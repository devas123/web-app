import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Academy, Category, CategoryRestriction, CategoryState, Competitor, Fight} from '../../../commons/model/competition.model';

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

export const getRestrictionNameByType = (cat: Category, type: string, def = '') => {
  if (cat.restrictions) {
    return getRestrictionName(cat.restrictions.find(r => r.type === type, def));
  } else {
    return def;
  }
};

export const getAgeDivisionName = (cat: Category) => getRestrictionNameByType(cat, 'AGE', 'ALL AGES');

export const getWeightId = (cat: Category) => getRestrictionNameByType(cat, 'WEIGHT', 'ALL WEIGHTS');
export const getGender = (cat: Category) => getRestrictionNameByType(cat, 'GENDER', 'ALL');
export const getBeltType = (cat: Category) => getRestrictionNameByType(cat, 'BELT', 'ALL BELTS');

export const displayCategory = (cat: Category) => {
  if (!cat) {
    return '';
  }
  return `${getGender(cat)}/${getAgeDivisionName(cat)}/${getBeltType(cat)}/${getWeightId(cat)}`;
};
const hasAny = (str: string, searchStr) => str && str.startsWith(searchStr);

export const categoryFilter = value => cat => {
  return cat.id
    && (hasAny(getWeightId(cat), value) || hasAny(getAgeDivisionName(cat), value) || hasAny(getBeltType(cat), value) || hasAny(getGender(cat), value));
}

export const categoriesComparer = (a: Category, b: Category) => displayCategory(a).localeCompare(displayCategory(b));

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
