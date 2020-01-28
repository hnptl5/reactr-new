import { GET_ACCOUNTS_SUCCESS } from "./actionTypes";
import {getAccounts} from "../../service/dashboardApi";
import {beginServiceCall, serviceCallError} from "./serviceStatusActions";

export const getAllAccounts = (data) => {
    return dispatch => {
        getAccounts(data)
        .then(response => {
          dispatch(beginServiceCall());
          dispatch({ type: GET_ACCOUNTS_SUCCESS, payload: response.data });
        })
        .catch(error => {
          console.log(error);
          serviceCallError();
        });
    }
}