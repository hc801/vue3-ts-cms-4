<template>
  <div class="dashboard">
    <!-- 1.顶部数据的统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item"></statistical-panel>
        </el-col>
      </template>
    </el-row>
    <!-- 2.中间的图表 -->
    <el-row :gutter="10">
      <el-col span="7">
        <hy-card title="分类商品数量（饼图）"></hy-card>
      </el-col>
    </el-row>
    <!-- 3.底部的图表 -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";

import HyCard from "@/base-ui/card";
import StatisticalPanel from "@/components/statistical-panel";

const store = useStore();
store.dispatch("analysis/getAnalysisDataAction");

const topPanelData = computed(() => store.state.analysis.topPanelData);
</script>
<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;

  .el-row + .el-row {
    margin-top: 20px;
  }
}
</style>
