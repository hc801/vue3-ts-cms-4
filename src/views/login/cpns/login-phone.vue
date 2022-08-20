<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phone.code"></el-input>
          <el-button class="get-code" type="primary" @click="handleGetCodeClick"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";
import { rules } from "../config/phone-config";

const store = useStore();
const phone = reactive({
  number: "",
  code: ""
});

const handleGetCodeClick = () => {
  console.log("获取验证码~");
};

const loginAction = () => {
  store.dispatch("login/phoneLoginAction");
};
defineExpose({ loginAction });
</script>

<style scoped lang="less">
.code {
  display: flex;
  justify-content: center;
  align-items: center;

  .get-code {
    margin-left: 10px;
  }
}
</style>
