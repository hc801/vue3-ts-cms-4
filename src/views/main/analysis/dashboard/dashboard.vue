<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <div class="statistical-panel">
            <div class="header">
              <span>{{ item.title }}</span>
              <el-tooltip :content="item.tips" placement="top" effect="light">
                <el-icon><Warning /></el-icon>
              </el-tooltip>
            </div>
            <div class="content">
              <hy-count-up
                :number="item.number1"
                :options="
                  item.amount === 'saleroom' ? counterOption2 : counterOption1
                "
              ></hy-count-up>
            </div>
            <div class="footer">
              <span>{{ item.subtitle }}&nbsp;</span>
              <hy-count-up
                :number="item.number2"
                :options="
                  item.amount === 'saleroom' ? counterOption2 : counterOption1
                "
              ></hy-count-up>
            </div>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";

import hyCountUp from "@/base-ui/count-up";
import { Warning } from "@element-plus/icons-vue";

const store = useStore();
store.dispatch("analysis/getAnalysisDataAction");

const topPanelData = computed(() => store.state.analysis.topPanelData);

const counterOption1 = {
  decimalPlaces: 0, // 保留两位
  prefix: "" // 单位
};
const counterOption2 = {
  decimalPlaces: 0, // 保留两位
  prefix: "￥" // 单位
};
</script>
<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;
}
@h: 48px;
.statistical-panel {
  padding: 0 20px;
  background-color: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    padding-top: 10px;
  }

  .content {
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
  }

  .footer {
    display: flex;
    align-items: center;

    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    margin-top: 10px;
    border-top: 1px solid #f0f0f0;
  }
}
</style>
