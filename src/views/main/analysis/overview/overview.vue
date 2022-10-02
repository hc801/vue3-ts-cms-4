<template>
  <div class="overview">
    <hy-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </hy-card>
    <hy-card title="技术栈">
      <hy-text-link :textArrs="technologyStacks"></hy-text-link>
      <hy-descriptions
        title="生产环境依赖"
        :column="2"
        :tableData="dependencies"
      ></hy-descriptions>
      <hy-descriptions
        title="开发环境依赖"
        :column="2"
        :tableData="devDependencies"
      ></hy-descriptions>
    </hy-card>
    <hy-card title="项目结构">
      <hy-code language="bash" :code="projectDir"></hy-code>
    </hy-card>
    <hy-card title="项目规范">
      <hy-descriptions
        title="文件命名规范"
        :tableData="fileStandard"
      ></hy-descriptions>
      <hy-descriptions
        title="编写组件规范"
        :tableData="componentStandard"
      ></hy-descriptions>
    </hy-card>
    <hy-card title="git提交规范">
      <hy-descriptions :tableData="gitStandard"></hy-descriptions>
    </hy-card>
  </div>
</template>

<script setup lang="ts">
import HyCard from "@/base-ui/card";
import HyTextLink from "@/base-ui/text-link";
import HyDescriptions from "@/base-ui/descriptions";
import HyCode from "@/base-ui/code";

import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir,
  componentStandard,
  fileStandard,
  gitStandard
} from "./config";
</script>

<style scoped lang="less">
.c-left {
  text-align: left;
}

.el-card {
  &:deep(.el-card__header span) {
    font-weight: 700;
  }
}

.el-card + .el-card {
  margin-top: 20px;
}

.hy-descriptions {
  margin-bottom: 20px;
}
</style>
