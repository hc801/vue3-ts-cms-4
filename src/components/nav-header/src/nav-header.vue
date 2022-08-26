<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold"><Fold /></template>
      <template v-else><Expand /></template>
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserInfo from "./user-info.vue";
import { Fold, Expand } from "@element-plus/icons-vue";

const emit = defineEmits(["foldChange"]);

const isFold = ref(false);
const handleFoldClick = () => {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
};
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
