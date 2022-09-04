import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";
import store, { setupStore } from "@/store";
import "normalize.css";
import "./assets/css/index.less";

import { globalRegister } from "@/global";

setupStore();

const app = createApp(App);

app.use(globalRegister);
app.use(store);
app.use(router);

app.mount("#app");
