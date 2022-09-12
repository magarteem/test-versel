import axios from "axios";

export const _api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
