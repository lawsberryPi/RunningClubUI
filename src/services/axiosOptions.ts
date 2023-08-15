import { AxiosRequestConfig } from "axios";
import {
  ADMIN_EMAIL,
  API_TOKEN,
  CITY_URL,
  STATE_URL,
  TOKEN_URL,
} from "../contants";

export const tokenRequestOptions: AxiosRequestConfig = {
  method: "GET",
  url: TOKEN_URL,
  headers: {
    "user-email": ADMIN_EMAIL,
    "api-token": API_TOKEN,
  },
};

/**
 * get axios option for querying state data
 * @param token bearer token obtained from fetch token
 * @returns AxiosRequestConfig for fetch state data
 */
export function stateRequestOptions(token: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: STATE_URL,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

/**
 * get axios option for querying city data
 * @param token bearer token obtained from fetch token
 * @param state state of the cities
 * @returns AxiosRequestConfig for fetch city data
 */
export function cityRequestOptions(
  token: string,
  state: string
): AxiosRequestConfig {
  return {
    method: "GET",
    url: `${CITY_URL}${state}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}
