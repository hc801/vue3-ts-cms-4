import { Module } from "vuex";
import { ISystemState } from "./types";
import { IRootState } from "@/store/types";
import {
  getPageListData,
  createPageData,
  deletePageData,
  editPageData
} from "@/service/main/system/system";

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0
    };
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list;
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const { pageName } = payload;
      const pageUrl = `/${pageName}/list`;

      const pageResult = await getPageListData(pageUrl, payload.queryInfo);

      const { list, totalCount } = pageResult.data;
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, totalCount);
    },
    async createPageDataAction({ dispatch }, payload) {
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;

      await createPageData(pageUrl, newData);

      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async deletePageDataAction({ dispatch }, payload) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      await deletePageData(pageUrl);

      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async editPageDataAction({ dispatch }, payload) {
      const { pageName, id, editData } = payload;
      const pageUrl = `/${pageName}/${id}`;

      await editPageData(pageUrl, editData);

      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemModule;
