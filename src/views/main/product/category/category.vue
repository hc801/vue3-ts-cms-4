<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="PAGE_NAME"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
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
import { usePageModal } from "@/hook/usePageModal";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

const PAGE_NAME = "category";

const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch();

const newCallback = () => {
  modalConfig.title = "新建分类";
};
const editCallback = () => {
  modalConfig.title = "编辑分类";
};
const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal(
  newCallback,
  editCallback
);
</script>

<style scoped></style>
