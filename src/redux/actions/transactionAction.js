import { GET_TRANSACTIONS_SUCCESS, GET_BALANCE_SUCCESS, GET_DUES_SUCCESS } from "./actionTypes";
import { getTransactions, getStartingBalance } from "../../service/transactionsApi";
import { getPayables } from "../../service/dashboardApi";
import { beginServiceCall, serviceCallError } from "./serviceStatusActions";

export const getAllTransactions = data => {
  return dispatch => {
    getTransactions(data)
      .then(response => {
        dispatch(beginServiceCall());
        dispatch({ type: GET_TRANSACTIONS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
        serviceCallError();
      });
  };
};

export const getMonthStartBalance = data => {
  return dispatch => {
    getStartingBalance(data)
      .then(response => {
        dispatch(beginServiceCall());
        dispatch({ type: GET_BALANCE_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
        serviceCallError();
      });
  };
};

export const getDueBills = data => {
  return dispatch => {
    getPayables(data)
    .then(response => {
      dispatch(beginServiceCall());
      dispatch({ type: GET_DUES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      serviceCallError();
    });
  }
}