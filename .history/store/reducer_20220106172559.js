import * as Types from "./types";

const initialState = {
  user: null,
  messages: [],

  loadingState: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_USER:
      return { ...state, user: action.payload.user };
    case Types.UPDATE_LOADING_STATE:
      return {
        ...state,
        loadingState: false,
        messages: action.payload.messages,
      };
    default:
      return state;
  }
};

export { reducer };
