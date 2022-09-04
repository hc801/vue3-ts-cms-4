<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          class="user-avatar"
          :size="30"
          src="https://avatars.githubusercontent.com/u/78576743?v=4"
        />
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="CircleClose">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { CircleClose } from "@element-plus/icons-vue";

const store = useStore();
const name = computed(() => store.state.login.userInfo.name);
</script>

<style scoped lang="less">
.user-info {
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    .user-avatar {
      margin-right: 5px;
    }
  }
}
</style>
