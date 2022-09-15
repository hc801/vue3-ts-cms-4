<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
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
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      :pageName="PAGE_NAME"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { usePageSearch } from "@/hook/usePageSearch";
import { usePageModal } from "@/hook/usePageModal";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

const PAGE_NAME = "users";

const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch();

const store = useStore();
const modalConfigRef = computed(() => {
  const departMentItem = modalConfig.formItems.find(
    (item) => item.field === "departmentId"
  );
  departMentItem!.options = store.state.entireDepartment.map((item) => ({
    title: item.name,
    value: item.id
  }));
  const roleItem = modalConfig.formItems.find(
    (item) => item.field === "roleId"
  );
  roleItem!.options = store.state.entireRole.map((item) => ({
    title: item.name,
    value: item.id
  }));

  return modalConfig;
});

const passwordItem = modalConfig.formItems.find(
  (item) => item.field === "password"
);
const newCallback = () => {
  modalConfig.title = "新建用户";
  passwordItem!.isHidden = false;
};
const editCallback = () => {
  modalConfig.title = "修改用户";
  passwordItem!.isHidden = true;
};

const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal(
  newCallback,
  editCallback
);
</script>

<style scoped lang="less"></style>
