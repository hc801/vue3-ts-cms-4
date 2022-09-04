<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
    >
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filter.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filter.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button
            link
            type="primary"
            size="small"
            :icon="Edit"
            @click="handleEditClick"
          >
            编辑
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            :icon="Delete"
            @click="handleDeleteClick"
          >
            删除
          </el-button>
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";

import PageSearch from "@/components/page-search";
import HyTable from "@/base-ui/table";
import { Edit, Delete } from "@element-plus/icons-vue";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

const store = useStore();

const handleQueryClick = () => {
  console.log("handleQueryClick");
};
const handleResetClick = () => {
  console.log("handleResetClick");
};

const getPageData = (queryInfo?: any) => {
  store.dispatch("system/getPageListAction", { pageName: "users", queryInfo });
};
getPageData();

const dataList = computed(() => store.getters["system/pageListData"]("users"));
const dataCount = computed(() =>
  store.getters["system/pageListCount"]("users")
);

const handleEditClick = () => {
  console.log("handleEditClick");
};
const handleDeleteClick = () => {
  console.log("handleDeleteClick");
};
</script>

<style scoped lang="less">
.user {
  .hy-table {
    border-top: 20px solid #f5f5f5;
  }
}
</style>
