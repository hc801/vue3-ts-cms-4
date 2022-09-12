import { Module } from "vuex";
import router from "@/router";

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from "@/service/login/login";
import localCache from "@/utils/cache";

import { IRootState } from "../types";
import { ILoginState } from "./types";
import { IAccount } from "@/service/login/types";

import { mapMenuToRoutes } from "@/utils/map-menus";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: {}
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;

      const routes = mapMenuToRoutes(userMenus);
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登录逻辑
      const res = await accountLoginRequest(payload);
      const { id, token } = res.data;
      localCache.setCache("token", token);
      commit("changeToken", token);

      // 发送初始化请求（完整的role/department）
      dispatch("getInitialDataAction", null, { root: true });

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      localCache.setCache("userInfo", userInfo);
      commit("changeUserInfo", userInfo);

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusById(userInfo.role.id);
      const userMenus = userMenusResult.data;
      localCache.setCache("userMenus", userMenus);
      commit("changeUserMenus", userMenus);

      // 4.跳转到首页
      router.push("/main");
    },
    // phoneLoginAction({ commit }, payload) {
    //   console.log("phoneLoginAction");
    // },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);

        // 发送初始化请求（完整的role/department）
        dispatch("getInitialDataAction", null, { root: true });
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }
    }
  }
};

export default loginModule;
