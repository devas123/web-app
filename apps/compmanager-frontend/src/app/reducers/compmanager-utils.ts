import {throwError} from "rxjs";
import {getTimeZones, TimeZone} from "@vvo/tzdb";
import {FilterFn} from "@frontend-nx/ng2-semantic-ui";

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


