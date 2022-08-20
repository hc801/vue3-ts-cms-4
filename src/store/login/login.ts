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
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const res = await accountLoginRequest(payload);
      const { id, token } = res.data;
      localCache.setCache("token", token);
      commit("changeToken", token);

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
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
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
