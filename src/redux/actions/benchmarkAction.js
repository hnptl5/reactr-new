import { GET_BENCHMARKS_SUCCESS } from "./actionTypes";
import { getBenchmarks } from "../../service/benchmarksApi";
import { beginServiceCall, serviceCallError } from "./serviceStatusActions";

export const getMarketBenchmarks = data => {

  return dispatch => {
    getBenchmarks(data)
      .then(response => {
        dispatch(beginServiceCall());
        dispatch({ type: GET_BENCHMARKS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
        serviceCallError();
      });
  };
};