import { PROCEED_WITH_SIGNUP_INFO_SUCCESS } from "./actionTypes";
import { serviceCallError } from "./serviceStatusActions";
import { storeRegistration } from "../../service/registrationApi";

export const proceedWithSignupInfo = (data, history) => {
  history.push("/profile");
  return { type: PROCEED_WITH_SIGNUP_INFO_SUCCESS, payload: data };
};

export const completeRegistration = (data, history) => {
  return dispatch => {
    storeRegistration(data)
      .then(response => {
        localStorage.setItem("access_token", response.data.token);
        window.location.assign("/welcome");
      })
      .catch(error => {
        console.log(error);
        serviceCallError();
      });
  };
};
