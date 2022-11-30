import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const createAxiosInstance = () => {
  const base = axios.create({
    baseURL: import.meta.env.VITE_QUIZ_API_URL,
  });
  return base;
};

export const axiosInstance = createAxiosInstance();

export default async function requester<Payload>(option: AxiosRequestConfig) {
  const response: AxiosResponse<Payload> = await axiosInstance({
    ...option,
  });

  return {
    status: response.status,
    headers: response.headers,
    payload: response.data,
  };
}

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);
