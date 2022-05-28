import {createAction, props} from "@ngrx/store";
import {CommandType, FullAcademyInfo, PageInfo} from "@frontend-nx/protobuf";

export const ACADEMY_SELECTED = 'ACADEMY_SELECTED';
export const ACADEMIES_LOADED = 'ACADEMIES_LOADED';
export const LOAD_ACADEMIES = 'LOAD_ACADEMIES';

export const academySelected = createAction(ACADEMY_SELECTED, props<{ id: string }>())
export const loadAcademies = createAction(LOAD_ACADEMIES, props<{ pageInfo: PageInfo }>())
export const academiesLoaded = createAction(ACADEMIES_LOADED, props<{ academies: FullAcademyInfo[], pageInfo: PageInfo }>())
export const addAcademy = createAction(CommandType.ADD_ACADEMY_COMMAND, props<{ academy: FullAcademyInfo }>())
export const removeAcademy = createAction(CommandType.REMOVE_ACADEMY_COMMAND, props<{ academyId: string }>())
export const updateAcademy = createAction(CommandType.UPDATE_ACADEMY_COMMAND, props<{ academy: FullAcademyInfo }>())
