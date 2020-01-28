import { GET_BALANCE_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";
  
export default (state = initialState, action) => {
    if (action.type === GET_BALANCE_SUCCESS) {
        return { ...state, balance: action.payload };
    }  
    
    return state;
};