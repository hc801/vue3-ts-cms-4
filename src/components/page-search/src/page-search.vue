<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh" @click="handleResetClick">
            重置
          </el-button>
          <el-button :icon="Search" type="primary" @click="handleSearchClick">
            搜索
          </el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HyForm from "@/base-ui/form";
import { Refresh, Search } from "@element-plus/icons-vue";

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(["resetBtnClick", "queryBtnClick"]);

const formItems = props.searchFormConfig.formItems ?? [];
const formOriginData: any = {};
for (const item of formItems) {
  formOriginData[item.field] = "";
}

const formData = ref(formOriginData);

const handleResetClick = () => {
  formData.value = formOriginData;
  emit("resetBtnClick");
};
const handleSearchClick = () => {
  emit("queryBtnClick", formData.value);
};
</script>

<style scoped lang="less">
.page-search {
  padding: 20px 0;

  .handle-btns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 40px;
  }
}
</style>
