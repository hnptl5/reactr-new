import { GET_TRANSACTIONS_SUCCESS , GET_DUES_SUCCESS} from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState, action) => {
  if (action.type === GET_TRANSACTIONS_SUCCESS) {
    return { ...state, transactions: action.payload };
  } else  if (action.type === GET_DUES_SUCCESS) {
    return { ...state, bills: action.payload };
  } 

  return state;
};
