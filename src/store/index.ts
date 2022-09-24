import { createStore, Store, useStore as useVuexStore } from "vuex";
import login from "./login/login";
import system from "./main/system/system";
import analysis from "./main/analysis/analysis";

import { getPageListData } from "@/service/main/system/system";

import { IRootState, IStoreType } from "./types";

const store = createStore<IRootState>({
  state() {
    return {
      name: "coder",
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    };
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData(
        "/department/list",
        {
          offset: 0,
          size: 1000
        },
        false
      );
      const { list: departmentList } = departmentResult.data;

      const roleResult = await getPageListData(
        "/role/list",
        {
          offset: 0,
          size: 1000
        },
        false
      );
      const { list: roleList } = roleResult.data;

      const menuResult = await getPageListData("/menu/list", {}, false);
      const { list: menuList } = menuResult.data;

      commit("changeEntireDepartment", departmentList);
      commit("changeEntireRole", roleList);
      commit("changeEntireMenu", menuList);
    }
  },
  modules: { login, system, analysis }
});

export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
