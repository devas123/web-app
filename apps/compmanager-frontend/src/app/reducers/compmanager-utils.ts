import {throwError} from "rxjs";
import {getTimeZones, TimeZone} from "@vvo/tzdb";
import {FilterFn} from "@frontend-nx/ng2-semantic-ui";
import {
  AdditionalGroupSortingDescriptor, BracketType,
  GroupSortDirection,
  GroupSortSpecifier,
  SelectorClassifier, StageType
} from "@frontend-nx/protobuf";

export const executeSuccessCallbacks = (action: any) => (commands: any[]) => {
  const {successCallback} = action
  if (!!successCallback) {
    successCallback(commands)
  }
}
export const executeErrorCallbacks = (action: any) => (err: any) => {
  const {errorCallback} = action
  if (!!errorCallback) {
    errorCallback(err)
  }
  return throwError(err);
}

export const availableTimeZones = () => getTimeZones()

export const compmanagerTimeZoneFormatter = (option: TimeZone, _query?: string) => option.name;
export const compmanagerTimeZoneFilter: FilterFn<TimeZone> = (options: TimeZone[], query: string) => options.filter(o => o.name.includes(query));


export const replaceUnderscore = (s: string) => s.replace(/_/gi, ' ')

// Enum formatters
export const defaultClassifierFormatter = (cs: SelectorClassifier) => replaceUnderscore(cs.substring('SELECTOR_CLASSIFIER_'.length))
export const defaultAdditionalGroupSortingFormatter = (opt: AdditionalGroupSortingDescriptor) => defaultGroupSortSpercifierFormatter(opt.groupSortSpecifier) + (opt.groupSortSpecifier == 'GROUP_SORT_SPECIFIER_MANUAL' ? '' : (':' + defaultGroupSortDirectionsFormatter(opt.groupSortDirection)));
export const defaultGroupSortSpercifierFormatter = (g: GroupSortSpecifier) => replaceUnderscore(g.substring('GROUP_SORT_SPECIFIER_'.length))
export const defaultGroupSortDirectionsFormatter = (g: GroupSortDirection) => replaceUnderscore(g.substring('GROUP_SORT_DIRECTION_'.length))
export const defaultBracketTypesFormatter = (bt: BracketType) => replaceUnderscore(bt.substring('BRACKET_TYPE_'.length))
export const defaultStageTypesFormatter = (st: StageType) => replaceUnderscore(st.substring('STAGE_TYPE_'.length))
