import * as types from "./actionTypes";

export function beginServiceCall() {
  return { type: types.BEGIN_SERVICE_CALL };
}

export function serviceCallError() {
  return { type: types.SERVICE_CALL_ERROR };
}
