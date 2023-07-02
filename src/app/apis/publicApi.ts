import { AxiosRequestConfig } from "axios";

import { CommonResponse } from "@/types/api";
import { publicApi } from "./API";

/**
 * 인가필요 없는 get 요청
 * @param url 요청 endPoint
 * @param config axios config ex) paramas
 * @returns status, message, data:T
 */
export const getpublicApi = async <T>(
  url: string,
  config?: AxiosRequestConfig
) => {
  const response = await publicApi
    .get<CommonResponse<T>>(url, config)
    .then((res) => res.data);

  return response;
};

/**
 * 인가 필요없는 post 요청
 * @param url 요청 endPoint
 * @param data post할 데이터 타입은 D
 * @param config axios config
 * @returns status, message, data:T
 */
export const postPublicApi = async <T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
) => {
  const response = await publicApi
    .post<CommonResponse<T>>(url, data, config)
    .then((res) => res.data);

  return response;
};
