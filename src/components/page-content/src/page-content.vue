<template>
  <div class="page-content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary">{{ contentTableConfig.btnText }}</el-button>
      </template>
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          @click="handleNewClick"
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
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </hy-table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useStore } from "@/store";

import HyTable from "@/base-ui/table";
import { Edit, Delete } from "@element-plus/icons-vue";

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
});

const store = useStore();

const pageInfo = ref({ currentPage: 1, pageSize: 10 });
watch(pageInfo, () => getPageData());

// 请求数据
const getPageData = (queryInfo: any = {}) => {
  store.dispatch("system/getPageListAction", {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  });
};
getPageData();

// 从vuex中获取数据
const dataList = computed(() => store.getters["system/pageListData"]("users"));
const dataCount = computed(() =>
  store.getters["system/pageListCount"]("users")
);

// 获取剩余插槽
const otherPropsSlots = props.contentTableConfig.propList.filter(
  (item: any) => {
    if (item.slotName === "status") return false;
    if (item.slotName === "createAt") return false;
    if (item.slotName === "updateAt") return false;
    if (item.slotName === "handler") return false;
    if (item.slotName) return true;
  }
);

// 处理按钮逻辑
const handleNewClick = () => {
  console.log("handleNewClick");
};
const handleEditClick = () => {
  console.log("handleEditClick");
};
const handleDeleteClick = () => {
  console.log("handleDeleteClick");
};

defineExpose({
  getPageData
});
</script>

<style scoped lang="less">
.page-content {
  border-top: 20px solid #f5f5f5;
}
</style>