import { GET_BENCHMARKS_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState, action) => {
  if (action.type === GET_BENCHMARKS_SUCCESS) {
    return { ...state, benchmarks: action.payload };
  } 

  return state;
};