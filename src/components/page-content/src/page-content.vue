<template>
  <div class="page-content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick" v-if="isCreate">{{
          contentTableConfig.btnText
        }}</el-button>
      </template>
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          @click="handleNewClick"
          v-if="pageName !== 'goods'"
        >
          {{ scope.row.enable ? "可用" : "下架" }}
        </el-button>
        <el-button
          plain
          size="small"
          :type="scope.row.status ? 'success' : 'danger'"
          @click="handleNewClick"
          v-else
        >
          {{ scope.row.status ? "可用" : "下架" }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filter.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filter.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handler-btns">
          <el-button
            link
            type="primary"
            size="small"
            :icon="Edit"
            @click="handleEditClick(scope.row)"
            v-if="isUpdate"
          >
            编辑
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            :icon="Delete"
            @click="handleDeleteClick(scope.row)"
            v-if="isDelete"
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

import { usePermission } from "@/hook/usePermission";

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

const emit = defineEmits(["newBtnClick", "editBtnClick"]);

const store = useStore();

const pageInfo = ref({ currentPage: 1, pageSize: 10 });
watch(pageInfo, () => getPageData());

// 获取操作的权限
const isQuery = usePermission(props.pageName, "query");
const isCreate = usePermission(props.pageName, "create");
const isUpdate = usePermission(props.pageName, "update");
const isDelete = usePermission(props.pageName, "delete");

// 请求数据
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return;

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
const dataList = computed(() =>
  store.getters["system/pageListData"](props.pageName)
);
const dataCount = computed(() =>
  store.getters["system/pageListCount"](props.pageName)
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
  emit("newBtnClick");
};
const handleEditClick = (item: any) => {
  emit("editBtnClick", item);
};
const handleDeleteClick = (item: any) => {
  store.dispatch("system/deletePageDataAction", {
    pageName: props.pageName,
    id: item.id
  });
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
