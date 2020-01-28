import { post } from "./apiUtils";

export const getTransactions = (data = {}) => {
  return post("transactions/search", data);
};


export const insertPublicToken = (public_token) => {
  return post("users/profile/integrations", {
    "externalSystemId":"plaid",
    "parameters": {
      "token": public_token
    }
  })
}