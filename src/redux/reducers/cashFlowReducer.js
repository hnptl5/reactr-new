import { GET_CASH_FLOW_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState, action) => {
  if (action.type === GET_CASH_FLOW_SUCCESS) {
    return { ...state, cashFlow: action.cashFlow };
  }

  return state;
};
