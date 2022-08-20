import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface HyRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

export interface HyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HyRequestInterceptor<T>;
  showLoading?: boolean;
}
