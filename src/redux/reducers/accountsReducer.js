import { GET_ACCOUNTS_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";


export default (state = initialState, action) => {
    if(action.type === GET_ACCOUNTS_SUCCESS){
        return {...state, accounts: action.payload}
    }
    return state;
}