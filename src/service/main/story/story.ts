import hyRequest from "@/service";
import { IDataType } from "@/service/login/types";

export function createStory(data: any) {
  return hyRequest.post<IDataType>({
    url: "/story",
    data
  });
}
