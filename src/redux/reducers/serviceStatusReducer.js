import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function serviceStatusReducer(
  state = initialState.serviceCall,
  action
) {
  if (action.type === types.BEGIN_SERVICE_CALL) {
    const counter = state.serviceCall + 1;
    return { ...state, serviceCall: counter };
  } else if (
    action.type === types.SERVICE_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    const counter = state.serviceCall - 1;
    return { ...state, serviceCall: counter };
  }
  return state;
}
