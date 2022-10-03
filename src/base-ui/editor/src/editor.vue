<template>
  <div
    ref="editorRef"
    class="hy-editor"
    :style="{ width: width ? `${width}px` : `100%` }"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

import type Editor from "wangeditor";
import WangEditor from "wangeditor";

const props = withDefaults(
  defineProps<{
    value: string;
    zIndex?: number;
    height?: number;
    width?: number;
    focus?: boolean;
  }>(),
  {
    zIndex: 500,
    height: 500,
    width: 0,
    focus: false
  }
);

const emit = defineEmits(["update:value"]);

const editorRef = ref<HTMLElement>();
const isInitContent = ref(false);
const instance = ref<Editor>();
const content = reactive({
  html: "",
  text: ""
});

watch(
  () => props.value,
  () => {
    initEditorConfig(props.value);
  }
);

onMounted(() => {
  createWangEditor();
});

const createWangEditor = () => {
  instance.value = new WangEditor(editorRef.value);
  setEditorConfig();
  instance.value.create();
  initEditorConfig(props.value);
};

const initEditorConfig = (htmlStr: string, isFocus = true) => {
  if (!instance.value) return;
  const editor = instance.value;
  editor.config.focus = isFocus;
  isInitContent.value = true;
  editor.txt.html(htmlStr);
};

const setEditorConfig = () => {
  if (!instance.value) return;

  const editor = instance.value;
  editor.config.height = props.height;
  editor.config.zIndex = props.zIndex;
  editor.config.focus = props.focus;

  editor.config.onchange = (newHtml: string) => {
    content.html = newHtml;
    content.text = editor.txt.text();
    if (!isInitContent.value) {
      emit("update:value", content.html);
    }
    isInitContent.value = false;
  };

  // 配置触发 onchange 的时间频率，默认为 200ms
  editor.config.onchangeTimeout = 500; // 修改为 500ms
  // 配置菜单栏，删减菜单，调整顺序
  editor.config.menus = [
    "head",
    "bold",
    "fontSize",
    "fontName",
    "italic",
    "underline",
    "strikeThrough",
    "indent",
    "lineHeight",
    "foreColor",
    "backColor",
    "link",
    "list",
    // 'todo',
    "justify",
    "quote",
    // 'emoticon',
    "image",
    // 'video',
    // 'table',
    "code",
    "splitLine",
    "undo",
    "redo"
  ];
};
</script>

<style scoped lang="less"></style>
