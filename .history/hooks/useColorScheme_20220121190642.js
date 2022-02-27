import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme() {
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
    return result
  }
  
  const userTheme = await getValueFor("UserPreferredColorTheme")
  const theme = _useColorScheme()
  console.log(theme)
  return "light"
  // return _useColorScheme();
}
