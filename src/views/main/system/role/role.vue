<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="PAGE_NAME"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
      :pageName="PAGE_NAME"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      ></el-tree>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed } from "vue";
import { useStore } from "@/store";
import { ElTree } from "element-plus";
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hook/usePageSearch";
import { usePageModal } from "@/hook/usePageModal";
import { menuMapLeafKeys } from "@/utils/map-menus";

const PAGE_NAME = "role";

const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch();

const elTreeRef = ref<InstanceType<typeof ElTree>>();
const newCallback = () => {
  modalConfig.title = "新建角色";
};
const editCallback = (item: any) => {
  const leafKeys = menuMapLeafKeys(item.menuList);
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys);
  });
  modalConfig.title = "编辑角色";
};
const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal(
  newCallback,
  editCallback
);

const store = useStore();
const menus = computed(() => store.state.entireMenu);

const otherInfo = ref({});
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys;
  const halfCheckedKeys = data2.halfCheckedKeys;
  const menuList = [...checkedKeys, ...halfCheckedKeys];
  otherInfo.value = { menuList };
};
</script>

<style scoped></style>
