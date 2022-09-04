import axios from "axios";

import type { AxiosInstance } from "axios";
import { HyRequestConfig, HyRequestInterceptor } from "@/service/request/type";

import { ElLoading } from "element-plus";

const DEFAULT_LOADING = true;

class HyRequest {
  instance: AxiosInstance;
  interceptors?: HyRequestInterceptor;
  showLoading?: boolean;
  loading?: any;

  constructor(config: HyRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据...",
            background: "rgba(0,0,0,.5)"
          });
        }

        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loading && this.loading.close();
        return res.data;
      },
      (err) => {
        this.loading && this.loading.close();
        return err;
      }
    );
  }

  request<T>(config: HyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading !== undefined) {
        this.showLoading = config.showLoading;
      }

      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 将loading设置为true这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          resolve(res);
        })
        .catch((err) => {
          // 将loading设置为true这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          reject(err);
        });
    });
  }

  get<T>(config: HyRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T>(config: HyRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  patch<T>(config: HyRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "PATCH" });
  }

  delete<T>(config: HyRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
}

export default HyRequest;
