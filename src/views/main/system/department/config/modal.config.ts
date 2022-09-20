import { IDialog } from "@/base-ui/form";

export const modalConfig: IDialog = {
  title: "新建部门",
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称"
    },
    {
      field: "leader",
      type: "input",
      label: "领导人",
      placeholder: "请输入领导人"
    }
  ],
  collLayout: { span: 24 },
  itemStyle: {}
};
