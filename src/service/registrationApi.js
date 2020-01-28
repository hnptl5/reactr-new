import { post } from "./apiUtils";

export const storeRegistration = data => {
  return post("users", data);
};
