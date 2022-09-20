import { IDialog } from "@/base-ui/form";

export const modalConfig: IDialog = {
  title: "新建类别",
  formItems: [
    {
      field: "name",
      type: "input",
      label: "类别名称",
      placeholder: "请输入类别名称"
    }
  ],
  collLayout: { span: 24 },
  itemStyle: {}
};
