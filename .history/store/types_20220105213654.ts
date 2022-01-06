import { Action } from "redux";

export const UPDATE_LOADING_STATE = "update_loading_state";
export const UPDATE_USER = "update_user";

export interface UpdateAction extends Action<string> {
  type: "update_user";
}
