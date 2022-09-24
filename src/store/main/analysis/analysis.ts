import { getAmountList } from "@/service/main/analysis/analysis";
import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { IAnalysisState } from "./types";

const analysisModule: Module<IAnalysisState, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelData: []
    };
  },
  mutations: {
    changeTopPanelData(state, list) {
      state.topPanelData = list;
    }
  },
  actions: {
    async getAnalysisDataAction({ commit }) {
      const topPanelDataResult = await getAmountList();
      commit("changeTopPanelData", topPanelDataResult.data);
    }
  }
};

export default analysisModule;
