import {academiesListState, academyInfoEntityAdapter} from "./state";
import {createSelector} from "@ngrx/store";

export const {
  selectAll: getAllAcademies
} = academyInfoEntityAdapter.getSelectors(academiesListState);


export const selectAcademiesPageInfo = createSelector(academiesListState, state => state && state.pageInfo)
export const getSelectedAcademy = createSelector(academiesListState, state => state && state.selectedAcademy && state.entities[state.selectedAcademy])
