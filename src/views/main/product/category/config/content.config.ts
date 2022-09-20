import { ITable } from "@/base-ui/table";

export const contentTableConfig: ITable = {
  title: "类别列表",
  btnText: "新建类别",
  propList: [
    { prop: "name", label: "类别名称", minWidth: "100" },
    {
      prop: "createAt",
      label: "开始时间",
      minWidth: "150",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "结束时间",
      minWidth: "150",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "100", slotName: "handler" }
  ]
};
