<template>
  <div class="chat">
    <hy-card title="留下你的故事吧">
      <template #header-right>
        <el-button type="primary" @click="handleSubmitClick">
          提交故事
        </el-button>
      </template>
      <hy-editor v-model:value="story.title" :height="80"></hy-editor>
      <hy-editor v-model:value="story.content" :height="300"></hy-editor>
    </hy-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import HyCard from "@/base-ui/card";
import HyEditor from "@/base-ui/editor";
import { ElMessage } from "element-plus";

import { createStory } from "@/service/main/story/story";

const story = reactive({
  title: "默认的title",
  content: "默认的content"
});

const handleSubmitClick = () => {
  createStory({ title: story.title, content: story.content }).then(() => {
    story.title = "";
    story.content = "";
    openCenter();
  });
};

const openCenter = () => {
  ElMessage({
    type: "success",
    showClose: true,
    message: "故事提交成功！",
    center: true
  });
};
</script>

<style scoped lang="less">
.hy-editor + .hy-editor {
  margin-top: 10px;
}
</style>
