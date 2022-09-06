<template>
  <div class="hy-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="header-handler">
          <slot name="headerHandler"> </slot>
        </div>
      </slot>
    </div>
    <el-table :data="listData" border>
      <el-table-column
        type="selection"
        align="center"
        v-if="showSelectColumn"
        width="60"
      ></el-table-column>
      <el-table-column
        type="index"
        align="center"
        v-if="showSelectColumn"
        width="60"
        label="序号"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column align="center" v-bind="propItem">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="page.currentPage"
          v-model:page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  title: {
    type: String,
    default: "默认的title"
  },
  propList: {
    type: Array,
    required: true
  },
  btnText: {
    type: String,
    default: "新建数据"
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  showSelectColumn: {
    type: Boolean,
    default: true
  },
  showIndexColumn: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(["update:page"]);

const handleSizeChange = (pageSize: number) => {
  emit("update:page", { ...props.page, pageSize });
};
const handleCurrentChange = (currentPage: number) => {
  emit("update:page", { ...props.page, currentPage });
};
</script>

<style scoped lang="less">
.hy-table {
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;

    .title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
}
</style>
