<template>
  <div class="department">
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
      :modalConfig="modalConfig"
      :pageName="PAGE_NAME"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { usePageSearch } from "@/hook/usePageSearch";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";
import { usePageModal } from "@/hook/usePageModal";

const PAGE_NAME = "department";

const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch();

const newCallback = () => {
  modalConfig.title = "新建部门";
};
const editCallback = () => {
  modalConfig.title = "编辑部门";
};
const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal(
  newCallback,
  editCallback
);
</script>

<style scoped></style>
