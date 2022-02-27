import * as Types from "./types";

const initialState = {
  user: null,
  messages: [],

  loadingState: true,
  theme: "system",
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
      console.log("updating!")
      console.log(action.payload.theme)
      return { ...state, theme: action.payload.theme };
    default:
      return state;
  }
};

export { reducer };
