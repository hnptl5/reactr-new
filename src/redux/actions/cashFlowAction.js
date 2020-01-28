import { GET_CASH_FLOW_SUCCESS } from "./actionTypes";
import { getCashFlowDetails } from "../../service/dashboardApi";
import { beginServiceCall, serviceCallError } from "./serviceStatusActions";

export const getCashFlow = data => {
  return dispatch => {
    getCashFlowDetails(data)
      .then(response => {
        dispatch(beginServiceCall());
        dispatch({ type: GET_CASH_FLOW_SUCCESS, cashFlow: response.data });
      })
      .catch(error => {
        console.log(error);
        serviceCallError();
      });
  };
};
