import { App } from "vue";

import "element-plus/dist/index.css";
import {
  ElAside,
  ElAvatar,
  ElButton,
  ElCheckbox,
  ElCol,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRow,
  ElSelect,
  ElSubMenu,
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
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElOption
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
