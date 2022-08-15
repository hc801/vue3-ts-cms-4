import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";
import store from "@/store";
import "normalize.css";
import "./assets/css/index.less";

import { globalRegister } from "@/global";
import hyRequest from "@/service";

hyRequest.request({
  method: "GET",
  url: "/test",
  interceptors: {
    requestInterceptor: (config) => {
      console.log("request请求成功的拦截器");
      return config;
    },
    responseInterceptor: (res) => {
      console.log("request响应成功的拦截器");
      return res;
    }
  }
});

const app = createApp(App);

app.use(globalRegister);
app.use(router);
app.use(store);

app.mount("#app");
