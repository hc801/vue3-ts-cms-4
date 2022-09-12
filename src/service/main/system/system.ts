import hyRequest from "@/service";
import { IDataType } from "@/service/login/types";

export function getPageListData(
  url: string,
  queryInfo: any,
  showLoading = true
) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo,
    showLoading
  });
}

export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url,
    data: newData
  });
}

export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url
  });
}

export function editPageData(url: string, editData: any) {
  return hyRequest.patch({
    url,
    data: editData
  });
}
