<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '65px' : '210px'">
        <nav-menu :collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @fold-change="handleFoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header";

const isCollapse = ref(false);
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold;
};
</script>

<style scoped lang="less">
.main {
  height: 100%;
  .main-content {
    height: 100%;
    background-color: #011425;

    .el-aside {
      cursor: pointer;
      transition: width 0.3s linear;
    }

    .page {
      .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px !important;
        background-color: #fff;
      }
      .page-content {
        background-color: #eef0f4;

        .page-info {
          display: flex;
          justify-content: center;
          border-radius: 5px;
          background-color: #fff;

          .page-info div {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
