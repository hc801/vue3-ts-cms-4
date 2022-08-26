<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
  </div>
</template>

<script setup lang="ts">
import PageSearch from "@/components/page-search";

import { searchFormConfig } from "./config/search.config";

const handleQueryClick = () => {
  console.log("handleQueryClick");
};
const handleResetClick = () => {
  console.log("handleResetClick");
};
</script>

<style scoped lang="less"></style>
