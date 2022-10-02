<template>
  <div class="hy-descriptions">
    <el-descriptions :title="title" :column="column" border>
      <template v-for="item in tableData" :key="item.name">
        <el-descriptions-item>
          <template #label>{{ item.name }}</template>
          <el-tag>{{ item.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import { DescriptionProp } from "../types";

withDefaults(
  defineProps<{
    title?: string;
    column?: number;
    tableData: DescriptionProp[];
  }>(),
  {
    column: 1
  }
);
</script>

<style scoped lang="less"></style>
