import * as Types from "../store/types";
import { refreshState } from "../hooks/useColorScheme";

export const updateAppTheme = (theme) => (dispatch) => {
  return dispatch({ type: Types.UDPATE_APP_THEME, payload: { theme } });
};
