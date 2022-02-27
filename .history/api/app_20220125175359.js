import * as Types from "../store/types";
import { refreshState } from "../hooks/useColorScheme";

export const updateAppTheme = (theme) => (dispatch) => {
  var delayInMilliseconds = 1000; //1 second

  setTimeout(function () {
    refreshState();
  }, delayInMilliseconds);
  return dispatch({ type: Types.UDPATE_APP_THEME, payload: { theme } });
};
