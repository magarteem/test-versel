import axios from "axios";

export const _api = axios.create({
  //baseURL: "https://631ee4c522cefb1edc3cffbd.mockapi.io",
  baseURL: process.env.REACT_APP_API_URL,
});
