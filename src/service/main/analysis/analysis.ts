import hyRequest from "@/service";
import { IDataType } from "@/service/login/types";

enum AnalysisAPI {
  amountList = "/goods/amount/list"
}

export function getAmountList() {
  return hyRequest.get<IDataType>({
    url: AnalysisAPI.amountList
  });
}
