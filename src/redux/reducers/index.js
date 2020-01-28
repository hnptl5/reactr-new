import { combineReducers } from "redux";
import serviceStatusReducer from "./serviceStatusReducer";
import transactionReducer from "./transactionReducer";
import cashFlowReducer from "./cashFlowReducer";
import registrationReducer from "./registrationReducer";
import balanceReducer from "./balanceReducer";
import benchmarkReducer from "./benchmarkReducer";
import accountsReducer from "./accountsReducer";

const rootReducer = combineReducers({
  serviceStatusReducer,
  transactionReducer,
  accountsReducer,
  cashFlowReducer,
  registrationReducer,
  balanceReducer,
  benchmarkReducer
});

export default rootReducer;
