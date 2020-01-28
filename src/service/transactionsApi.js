import { post } from "./apiUtils";

export const getTransactions = (data = {}) => {
    return post("transactions/search", data);
}

export const getStartingBalance = (data={}) => {
    return post("balances/getBalanceSummary", data)
}