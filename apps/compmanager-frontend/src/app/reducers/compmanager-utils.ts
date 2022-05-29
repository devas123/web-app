import {throwError} from "rxjs";

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

