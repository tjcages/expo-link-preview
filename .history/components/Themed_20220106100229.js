/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(props, colorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "secondary");

  return (
    <DefaultText
      style={[{ color, fontSize: 16, fontWeight: "400" }, style]}
      {...otherProps}
    />
  );
}

export function Header(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "primary");

  return (
    <DefaultText
      style={[{ color, fontSize: 28, fontWeight: "700" }, style]}
      {...otherProps}
    />
  );
}

export function Title(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "primary");

  return (
    <DefaultText
      style={[{ color, fontSize: 22, fontWeight: "600" }, style]}
      {...otherProps}
    />
  );
}

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Button(props) {
  const {
    style,
    lightColor,
    darkColor,
    onPress,
    disabled,
    children,
    ...otherProps
  } = props;
  // const backgroundColor = useThemeColor(
  //   { light: darkColor, dark: lightColor },
  //   "background"
  // );

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      {...otherProps}
      onPress={onPress}
      // onPress={() => signInHandler()}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
}

export function Divider(props) {
  const {
    style,
    lightColor = "#eee",
    darkColor = "rgba(255,255,255,0.1)",
    ...otherProps
  } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <View
      style={[{ backgroundColor }, styles.divider, style]}
      {...otherProps}
    />
  );
}

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

const styles = StyleSheet.create({
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#111111",
    borderRadius: 12,
    marginHorizontal: 24,
    marginBottom: 36,
  },
  divider: {
    height: 1,
    marginVertical: 12,
  },
});
