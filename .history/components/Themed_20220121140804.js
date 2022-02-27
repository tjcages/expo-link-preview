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
import { Icon, Button as DefaultButton } from "react-native-elements";

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

export function Copy(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "copy");

  return (
    <DefaultText
      style={[{ color, fontSize: 20, fontWeight: "500" }, style]}
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
  const { fieldRef, style, lightColor, darkColor, addContainer, icon, ...otherProps } =
    props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );
  const placeholderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "secondary"
  );
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "container"
  );

  return (
    <DefaultView style={{ flex: 1 }}>
      <TextInput
        ref={fieldRef}
        style={[
          { color },
          addContainer && { backgroundColor },
          fieldStyles.textField,
          style,
        ]}
        placeholderTextColor={placeholderColor}
        {...otherProps}
      />
    </DefaultView>
  );
}

const fieldStyles = StyleSheet.create({
  textField: {
    position: "relative",
    flex: 1,
    fontSize: 18,
    borderRadius: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  icon: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

// –––– BUTTONS –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

export function Button(props) {
  const {
    style,
    onPress,
    lightColor,
    darkColor,
    disabled,
    text,
    icon,
    flex,
    ...otherProps
  } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "mainButton"
  );

  const textColor = useThemeColor(
    { light: Colors.dark.primary, dark: Colors.light.primary },
    "primary"
  );

  return (
    <TouchableOpacity
      style={[
        { backgroundColor },
        buttonStyles.button,
        style,
        disabled && { opacity: 0.3 },
      ]}
      {...otherProps}
      onPress={onPress}
      // onPress={() => signInHandler()}
      // disabled={disabled}
      disabled={false}
    >
      <DefaultView style={[buttonStyles.buttonContainer, flex && { flex: 1 }]}>
        {icon && icon}
        <DefaultText style={[{ color: textColor }, buttonStyles.buttonText]}>
          {text}
        </DefaultText>
      </DefaultView>
    </TouchableOpacity>
  );
}

export function SendButton(props) {
  const {
    style,
    lightColor,
    darkColor,
    onPress,
    icon,
    disabled,
    ...otherProps
  } = props;

  return (
    <DefaultView style={[buttonStyles.sendButtonContainer, style]}>
      <DefaultButton
        {...otherProps}
        onPress={onPress}
        // disabled={disabled}
        buttonStyle={buttonStyles.sendButton}
        icon={icon}
      />
    </DefaultView>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
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
    textAlign: "center",
  },
  sendButtonContainer: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  sendButton: {
    width: 36,
    height: 36,
    padding: 4,
    backgroundColor: Colors.default.blue,
    borderRadius: 64,
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

export function Container(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "container"
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
