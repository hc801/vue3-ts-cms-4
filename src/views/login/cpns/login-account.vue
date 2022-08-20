<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { ElForm } from "element-plus";
import localCache from "@/utils/cache";

import { rules } from "../config/account-config";

const account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
});

const formRef = ref<InstanceType<typeof ElForm>>();

const state = useStore();

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.是否需要记住密码
      if (isKeepPassword) {
        localCache.setCache("name", account.name);
        localCache.setCache("password", account.password);
      } else {
        localCache.deleteCache("name");
        localCache.deleteCache("password");
      }

      // 2.开始进行登录逻辑
      state.dispatch("login/accountLoginAction", { ...account });
    }
  });
};

defineExpose({ loginAction });
</script>

<style scoped lang="less"></style>
