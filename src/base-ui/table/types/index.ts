export interface IPropItem {
  prop?: string;
  label: string;
  minWidth?: string;
  slotName?: string;
}

export interface ITable {
  title?: string;
  btnText?: string;
  propList: IPropItem[];
  showFooter?: boolean;
  showSelectColumn?: boolean;
  showIndexColumn?: boolean;
}
