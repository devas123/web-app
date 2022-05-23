import {academiesListState, academyInfoEntityAdapter} from "./state";

export const {
  selectAll: getAllAcademies
} = academyInfoEntityAdapter.getSelectors(academiesListState);

export const selectAllAcademies = getAllAcademies;
