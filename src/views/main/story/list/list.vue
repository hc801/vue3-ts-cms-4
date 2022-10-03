<template>
  <div class="list">
    <page-content :contentTableConfig="contentTableConfig" pageName="story">
      <template #title="scope">
        <div v-html="scope.row.title"></div>
      </template>
      <template #content="scope">
        <div v-html="scope.row.content"></div>
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from "@/components/page-content";

import { contentTableConfig } from "./config/content.config";
</script>

<style scoped lang="less">
.page-content {
  border: 0;
}
</style>
