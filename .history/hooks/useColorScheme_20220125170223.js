import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";
import userDefaults from "react-native-user-defaults";

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme() {
  userDefaults.get(
    "UserPreferredColorTheme",
    "com.gc.circleapp",
    (err, data) => {
      if (!err) {
        console.log("DATA HERE")
        console.log(data); 
      }// value for the appearance key
    }
  );
  const theme = _useColorScheme();
  return theme;
}
