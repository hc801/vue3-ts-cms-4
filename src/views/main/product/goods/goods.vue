<template>
  <div class="goods">
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
    >
      <template #name="scope">
        {{ scope.row.name }}
      </template>
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 100%"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        >
        </el-image>
      </template>
      <template #oldPrice="scope"> {{ "￥" + scope.row.oldPrice }}</template>
      <template #newPrice="scope"> {{ "￥" + scope.row.newPrice }}</template>
    </page-content>
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

const PAGE_NAME = "goods";

const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch();

const newCallback = () => {
  modalConfig.title = "新建商品";
};
const editCallback = () => {
  modalConfig.title = "编辑商品";
};
const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal(
  newCallback,
  editCallback
);
</script>

<style scoped lang="less"></style>
