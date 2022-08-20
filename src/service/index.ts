import HyRequest from "@/service/request";
import { BASE_TIMEOUT, BASE_URL } from "@/service/request/config";
import localCache from "@/utils/cache";

const hyRequest = new HyRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token");

      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } else {
        console.log("没有token~");
      }

      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});

export default hyRequest;
