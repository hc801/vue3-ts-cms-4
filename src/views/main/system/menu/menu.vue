<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      :pageName="PAGE_NAME"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from "@/components/page-content";

import { contentTableConfig } from "./config/content.config";

const PAGE_NAME = "menu";
</script>

<style scoped lang="less">
.menu {
  .page-content {
    border: 0;
  }
}
</style>
