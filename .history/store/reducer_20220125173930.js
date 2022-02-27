import * as Types from "./types";

const initialState = {
  user: null,
  messages: [],

  loadingState: true,
  theme: "light",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_USER:
      return { ...state, user: action.payload.user };
    case Types.UPDATE_USER_MESSAGES:
      return {
        ...state,
        loadingState: false,
        messages: action.payload.messages,
      };
    case Types.UDPATE_APP_THEME:
      return { ...state, theme: action.payload.theme };
    default:
      return state;
  }
};

export { reducer };
