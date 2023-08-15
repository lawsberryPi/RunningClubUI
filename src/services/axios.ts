import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

/**
 * fetch data from API
 * @param axiosConfig axios config including the header and base url
 * @returns loading status in bool, data of the given type(token, state, city), error if occurs,
 * request if not in component rendering
 */
export const useAxios = <T>(
  axiosConfig: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [
  boolean,
  T | undefined,
  string,
  (config: AxiosRequestConfig<any>) => void
] => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");

  useEffect(() => {
    if (loadOnStart) sendRequest(axiosConfig);
    else setLoading(false);
  }, []);

  const request = (newConfig: AxiosRequestConfig<any>) => {
    sendRequest(newConfig);
  };

  const sendRequest = (config: AxiosRequestConfig<any>) => {
    setLoading(true);

    axios(config)
      .then((response) => {
        setError("");
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  return [loading, data, error, request];
};
