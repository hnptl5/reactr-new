import accountsReducer from "./accountsReducer";
import * as actions from "../actions/accountAction";
import initialState from "./initialState";

it("should fetch account details when pass GET_ACCOUNTS_SUCCESS", () => {
  const action = actions.getAllAccounts();

  const newState = accountsReducer(initialState, action);

  expect(newState.accounts.length).toEqual(0);
});
