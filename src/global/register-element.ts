import { App } from "vue";

import "element-plus/dist/index.css";
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElTabPane,
  ElTabs
} from "element-plus";

const components = [
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElButton,
  ElCheckbox,
  ElLink
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
