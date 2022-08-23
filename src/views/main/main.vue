<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header"><nav-header></nav-header></el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header";
</script>

<style scoped lang="less">
.main {
  height: 100%;
  .main-content {
    height: 100%;
    background-color: #011425;

    .page {
      .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
      }
      .page-content {
        display: flex;
        justify-content: center;
        background-color: #eef0f4;
      }
    }
  }
}
</style>
