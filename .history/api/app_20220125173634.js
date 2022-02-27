import * as Types from "../store/types";

export const updateAppTheme = (theme) => (dispatch) => {
  console.log("hello" + theme)
  // return dispatch({ type: Types.UDPATE_APP_THEME, payload: { theme } });
}