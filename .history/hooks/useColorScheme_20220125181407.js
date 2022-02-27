import React, { useState } from "react";
import { useColorScheme as _useColorScheme } from "react-native";

// import and get the redux persistent state
// we can use this persistent state to determine user preferences
import reduxStore from "../store/store";

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.

reduxStore.store.subscribe(() => {
  console.log("CALLING")
  state = reduxStore.store.getState()
});

export default function useColorScheme() {
  switch (state.theme) {
    case "system":
      // if persisted theme is system, use standard react-native color scheme
      const theme = _useColorScheme();
      return theme;
    default:
      // else, return the persistent theme
      return state.theme;
  }
}
