import React, { useState, useEffect } from "react";
import { useColorScheme as _useColorScheme } from "react-native";

// import and get the redux persistent state
// we can use this persistent state to determine user preferences
import reduxStore from "../store/store";

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.

export default function useColorScheme() {
  const [state, setState] = useState(reduxStore.store.getState());
  const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    setState(reduxStore.store.getState());
    console.log("SUBSCRIBING");
    if (subscriber === null) {
      const sub = reduxStore.store.subscribe(() => {
        console.log("CALLING");
        setState(reduxStore.store.getState());
      });
      setSubscriber(sub);
    }
  }, []);

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
