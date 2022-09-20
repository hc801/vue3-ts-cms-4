import { ITable } from "@/base-ui/table";

export const contentTableConfig: ITable = {
  title: "商品列表",
  btnText: "新建商品",
  propList: [
    { prop: "name", label: "商品名称", minWidth: "100", slotName: "name" },
    { prop: "oldPrice", label: "原价", minWidth: "50", slotName: "oldPrice" },
    { prop: "newPrice", label: "现价", minWidth: "50", slotName: "newPrice" },
    { prop: "inventoryCount", label: "库存", minWidth: "60" },
    { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "imgUrl" },
    { prop: "status", label: "状态", minWidth: "70", slotName: "status" },
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
    { label: "操作", minWidth: "100", slotName: "handler" }
  ]
};
