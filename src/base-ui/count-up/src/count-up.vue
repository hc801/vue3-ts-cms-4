<template>
  <span ref="countRef"></span>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { CountUp } from "countup.js";

import type { CountUpOptions } from "countup.js";

const props = defineProps({
  number: {
    type: Number,
    default: 0
  },
  options: {
    type: Object,
    default: () => ({})
  }
});

const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ",", // 千位分割
  decimal: ".", // 小数分割
  prefix: "￥" // 单位
};

const countRef = ref<HTMLElement>();
const instance = ref<CountUp>();

watch(
  () => props.number,
  () => {
    update(props.number);
  }
);

onMounted(() => {
  createCounter();
});

const createCounter = () => {
  if (!countRef.value) return;

  const ops: CountUpOptions = { ...defaultOptions, ...props.options };
  instance.value = new CountUp(countRef.value, props.number, ops);
  start();
};

const start = () => {
  if (!instance.value) return;
  instance.value.start();
};

const update = (number: number) => {
  if (!instance.value) return;
  instance.value.update(number);
};
</script>

<style scoped lang="less"></style>
