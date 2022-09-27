import {
  getAddressGoodsSale,
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from "@/service/main/analysis/analysis";
import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { IAnalysisState } from "./types";

const analysisModule: Module<IAnalysisState, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelData: [],
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeTopPanelData(state, list) {
      state.topPanelData = list;
    },
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    async getAnalysisDataAction({ commit }) {
      const topPanelDataResult = await getAmountList();
      commit("changeTopPanelData", topPanelDataResult.data);
      const categoryCountResult = await getCategoryGoodsCount();
      commit("changeCategoryGoodsCount", categoryCountResult.data);
      const categoryFavorResult = await getCategoryGoodsFavor();
      commit("changeCategoryGoodsFavor", categoryFavorResult.data);
      const categorySaleResult = await getCategoryGoodsSale();
      commit("changeCategoryGoodsSale", categorySaleResult.data);
      const addressSaleResult = await getAddressGoodsSale();
      commit("changeAddressGoodsSale", addressSaleResult.data);
    }
  }
};

export default analysisModule;
