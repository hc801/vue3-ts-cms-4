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
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      goodsList: [],
      goodsCount: 0,
      categoryList: [],
      categoryCount: 0,
      storyList: [],
      storyCount: 0
    };
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list;
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count;
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list;
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count;
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list;
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count;
    },
    changeDepartmentList(state, list: any[]) {
      state.departmentList = list;
    },
    changeDepartmentCount(state, count: number) {
      state.departmentCount = count;
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list;
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count;
    },
    changeCategoryList(state, list: any[]) {
      state.categoryList = list;
    },
    changeCategoryCount(state, count: number) {
      state.categoryCount = count;
    },
    changeStoryList(state, list: any[]) {
      state.storyList = list;
    },
    changeStoryCount(state, count: number) {
      state.storyCount = count;
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
      const { pageName, showLoading } = payload;
      const pageUrl = `/${pageName}/list`;

      const pageResult = await getPageListData(
        pageUrl,
        payload.queryInfo,
        showLoading
      );

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
        },
        showLoading: false
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
        },
        showLoading: false
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
        },
        showLoading: false
      });
    }
  }
};

export default systemModule;
