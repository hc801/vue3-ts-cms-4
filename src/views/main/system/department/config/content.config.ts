import { ITable } from "@/base-ui/table";

export const contentTableConfig: ITable = {
  title: "部门列表",
  propList: [
    { prop: "name", label: "部门名称", minWidth: "100" },
    { prop: "leader", label: "领导人", minWidth: "100" },
    {
      prop: "createAt",
      label: "开始时间",
      minWidth: "150",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "150",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ],
  btnText: "新建部门"
};
