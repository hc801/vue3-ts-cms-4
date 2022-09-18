type IFormType = "input" | "password" | "select" | "datepicker";

export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  // 针对select
  options?: any[];
  // 针对datepicker
  otherOptions?: any;
  // 针对password在编辑时可以隐藏
  isHidden?: boolean;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  collLayout?: any;
  itemStyle?: any;
}

export interface IDialog extends IForm {
  title?: string;
}
