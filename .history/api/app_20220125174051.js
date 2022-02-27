import * as Types from "../store/types";

export const updateAppTheme = (theme) => (dispatch) => {
  return dispatch({ type: Types.UDPATE_APP_THEME, payload: { theme } });
}