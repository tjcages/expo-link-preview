import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";
import reduxStore from "../store/store";

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme() {
  const state = reduxStore.store.getState()
  console.log("Trying!")
  console.log(state)
  const theme = _useColorScheme()
  return theme;
}
