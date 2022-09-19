import { ITable } from "@/base-ui/table";

export const contentTableConfig: ITable = {
  title: "菜单列表",
  propList: [
    { prop: "name", label: "菜单名称", minWidth: "100" },
    { prop: "type", label: "类型", minWidth: "50" },
    { prop: "url", label: "菜单url", minWidth: "180" },
    { prop: "icon", label: "菜单icon", minWidth: "100" },
    { prop: "permission", label: "权限", minWidth: "180" },
    {
      prop: "createAt",
      label: "创建时间",
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
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children: "children"
    }
  },
  btnText: "新建菜单",
  showFooter: false,
  showIndexColumn: false,
  showSelectColumn: false
};
