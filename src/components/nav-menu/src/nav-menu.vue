<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <div v-if="!collapse" class="title">Vue3+TS</div>
    </div>
    <el-menu
      :collapse="collapse"
      text-color="#b7bdc3"
      class="el-menu-vertical"
      default-active="2"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <template v-if="item.icon === 'el-icon-monitor'">
                  <Monitor />
                </template>
                <template v-if="item.icon === 'el-icon-setting'">
                  <Setting />
                </template>
                <template v-if="item.icon === 'el-icon-goods'">
                  <Goods />
                </template>
                <template v-if="item.icon === 'el-icon-chat-line-round'">
                  <ChatLineRound />
                </template>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <el-icon>
              <template v-if="item.icon === 'el-icon-monitor'">
                <Monitor />
              </template>
              <template v-if="item.icon === 'el-icon-setting'">
                <Setting />
              </template>
              <template v-if="item.icon === 'el-icon-goods'">
                <Goods />
              </template>
              <template v-if="item.icon === 'el-icon-chat-line-round'">
                <ChatLineRound />
              </template>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";

import {
  Monitor,
  Goods,
  ChatLineRound,
  Setting
} from "@element-plus/icons-vue";

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
});

const store = useStore();
const userMenus = computed(() => store.state.login.userMenus);

const router = useRouter();

const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? "not-found"
  });
};
</script>

<style scoped lang="less">
.nav-menu {
  .logo {
    height: 28px;
    padding: 12px 10px 8px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
    }
  }

  .el-menu {
    border-right: none;
  }

  .el-sub-menu {
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  .el-menu-item:hover {
    color: #fff !important;
  }

  .el-menu .is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
