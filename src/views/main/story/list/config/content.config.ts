import { ITable } from "@/base-ui/table";

export const contentTableConfig: ITable = {
  title: "故事列表",
  propList: [
    { prop: "title", label: "故事标题", minWidth: "150", slotName: "title" },
    { prop: "content", label: "故事", minWidth: "300", slotName: "content" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "150",
      slotName: "createAt"
    }
  ],
  showSelectColumn: false
};
