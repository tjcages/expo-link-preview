import * as Types from "../store/types";

export const updateAppTheme = (theme) => (dispatch) => {
  return dispatch({ type: Types.UPDATE_USER, payload: { user: null } });
}