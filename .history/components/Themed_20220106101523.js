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
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "secondary"
  );

  return (
    <DefaultText
      style={[{ color, fontSize: 16, fontWeight: "400" }, style]}
      {...otherProps}
    />
  );
}

export function Header(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );

  return (
    <DefaultText
      style={[{ color, fontSize: 28, fontWeight: "700" }, style]}
      {...otherProps}
    />
  );
}

export function Title(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );

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
    text,
    icon,
    flex,
    ...otherProps
  } = props;
  // const backgroundColor = useThemeColor(
  //   { light: darkColor, dark: lightColor },
  //   "background"
  // );

  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && { opacity: 0.3 }]}
      {...otherProps}
      onPress={onPress}
      // onPress={() => signInHandler()}
      disabled={disabled}
    >
      {icon && icon}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export function Divider(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "divider"
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111111",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginHorizontal: 24,
    marginBottom: 36,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  divider: {
    height: 1,
    marginVertical: 12,
  },
});
