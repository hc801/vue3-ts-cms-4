import hyRequest from "..";

import { IAccount, IDataType, ILoginResult } from "./types";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  userMenus = "/role/"
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  });
}

export function requestUserMenusById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.userMenus + id + "/menu",
    showLoading: false
  });
}
