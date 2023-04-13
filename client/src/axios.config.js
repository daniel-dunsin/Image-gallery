/**
 * Axios Instance to be used to make request,. Should possess credentials becuase cookies will be used to store user token
 */

import axios from "axios";
import { errorRes } from "./api/responses";

export const http = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      errorRes("Session Expired, log in again");
      window.location.replace("/login");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
