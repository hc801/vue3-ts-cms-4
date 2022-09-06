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
      pageName="users"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";

import { usePageSearch } from "@/hook/usePageSearch";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch();
</script>

<style scoped lang="less"></style>
