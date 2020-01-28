import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState, action) => {
  if (action.type === types.PROCEED_WITH_SIGNUP_INFO_SUCCESS) {
    return { ...state, signupData: action.payload };
  } 

  return state;
};
