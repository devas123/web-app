import {createAction, props} from "@ngrx/store";
import {CommandType, FullAcademyInfo, PageInfo} from "@frontend-nx/protobuf";
import {ErrorCallback, SuccessCallback} from "../../../reducers/global-reducers";

export const ACADEMY_SELECTED = 'ACADEMY_SELECTED';
export const ACADEMIES_LOADED = 'ACADEMIES_LOADED';
export const ACADEMY_LOADED = 'ACADEMY_LOADED';
export const LOAD_ACADEMIES = 'LOAD_ACADEMIES';
export const LOAD_ACADEMY = 'LOAD_ACADEMY';

export const academySelected = createAction(ACADEMY_SELECTED, props<{ id: string }>())
export const loadAcademies = createAction(LOAD_ACADEMIES, props<{ pageInfo: PageInfo, searchString?: string }>())
export const loadAcademy = createAction(LOAD_ACADEMY, props<{ id: string }>())
export const academiesLoaded = createAction(ACADEMIES_LOADED, props<{ academies: FullAcademyInfo[], pageInfo: PageInfo }>())
export const academyLoaded = createAction(ACADEMY_LOADED, props<{ academy: FullAcademyInfo }>())
export const addAcademy = createAction(CommandType.ADD_ACADEMY_COMMAND, props<{ academy: FullAcademyInfo, successCallback: SuccessCallback, errorCallback: ErrorCallback }>())
export const removeAcademy = createAction(CommandType.REMOVE_ACADEMY_COMMAND, props<{ academyId: string }>())
export const updateAcademy = createAction(CommandType.UPDATE_ACADEMY_COMMAND, props<{ academy: FullAcademyInfo }>())
