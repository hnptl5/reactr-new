import { post } from "./apiUtils";

export const getAccounts = () => {
  return post("transactionalAccounts/search", {});
};

export const getCashFlowDetails = () => {
  return post("cashflow/historical", {});
};

export const getPayables = (data = {}) => {
  return post("payables/search", data);
}