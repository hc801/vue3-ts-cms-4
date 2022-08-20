<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";
import loginPhoneVue from "./login-phone.vue";

import { UserFilled, Iphone } from "@element-plus/icons-vue";
import { ref } from "vue";

const isKeepPassword = ref(true);
const currentTab = ref("account");
const accountRef = ref<InstanceType<typeof LoginAccount>>();
const phoneRef = ref<InstanceType<typeof loginPhoneVue>>();

const handleLoginClick = () => {
  if (currentTab.value === "account") {
    accountRef.value?.loginAction(isKeepPassword.value);
  } else if (currentTab.value === "phone") {
    phoneRef.value?.loginAction();
  }
};
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 200px;
  text-align: center;

  .custom-tabs-label {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-icon {
      margin-right: 3px;
    }
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
