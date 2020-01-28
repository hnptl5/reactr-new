import axios from "axios";


const baseURL = "https://cfggatewayapimd18.azure-api.net/";

const API = axios.create({
  baseURL,
  responseType: "json"
});

export const getUserInfo = async () => {
  let token = localStorage.getItem('access_token');
  const response = await axios.get("https://cfg-zuul.auth0.com/userinfo", {
    headers : {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

export const post = async (url, data) => {
  return API.post(url, data);
};

API.interceptors.request.use(async req => {
  let token = localStorage.getItem('access_token');
  req.headers['Authorization'] = `Bearer ${token}`;
  return req;
});

API.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

const errorHandler = error => {
  console.log(error);
  return Promise.reject({ ...error });
};

const successHandler = response => {
  return response;
};
