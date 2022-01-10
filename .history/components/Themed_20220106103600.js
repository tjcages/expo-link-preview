/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  TextInput,
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

// –––– TEXT –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

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

// –––– TEXTFIELDS –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

export function TextField(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "container"
  );

  return (
    <TextInput
      style={[{ color, backgroundColor }, fieldStyles.textField, style]}
      {...otherProps}
    />
  );
}

const fieldStyles = StyleSheet.create({
  textField: {
    flex: 1,
    fontSize: 18,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
  },
});

// –––– BUTTONS –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

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
      style={[buttonStyles.button, style, disabled && { opacity: 0.3 }]}
      {...otherProps}
      onPress={onPress}
      // onPress={() => signInHandler()}
      disabled={disabled}
    >
      <DefaultView style={[buttonStyles.buttonContainer, flex && { flex: 1 }]}>
        {icon && icon}
        <Text style={buttonStyles.buttonText}>{text}</Text>
      </DefaultView>
    </TouchableOpacity>
  );
}

export function SendButton(props) {
  const { style, lightColor, darkColor, onPress, disabled, ...otherProps } =
    props;

  const backgroundColor = useThemeColor(
    { light: darkColor, dark: lightColor },
    "container"
  );

  return (
    <TouchableOpacity
      style={[buttonStyles.sendButton, style, disabled && { backgroundColor }]}
      {...otherProps}
      onPress={onPress}
      // onPress={() => signInHandler()}
      disabled={disabled}
    >
      <DefaultView style={[buttonStyles.buttonContainer, flex && { flex: 1 }]}>
        {icon && icon}
        <Text style={buttonStyles.buttonText}>{text}</Text>
      </DefaultView>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#111111",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginHorizontal: 24,
    marginBottom: 36,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});

// –––– VIEWS –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Divider(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "divider"
  );

  return (
    <View
      style={[{ backgroundColor }, viewStyles.divider, style]}
      {...otherProps}
    />
  );
}

// –––– STYLES ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

const viewStyles = StyleSheet.create({
  divider: {
    height: 1,
    marginVertical: 12,
  },
});
