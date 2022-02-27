import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Icon } from "react-native-elements";
import { View, Button, Divider, getTheme, useThemeColor } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import Profile from "../shared/Profile";

const Navigation = (props) => {
  const secondary = useThemeColor({}, "secondary");

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <BlurView style={[styles.blur]} intensity={50} tint={getTheme()} />
      <View style={styles.blurOverlay} />

      <View style={styles.content}>
        <Button style={styles.button} icon={<Icon name="chevron-left" color={secondary} />} />
        {props.user !== null && (
          <Profile
            {...props}
            size="medium"
            onPress={() => props.navigation.navigate("Settings", { ...props })}
          />
        )}
      </View>
      <Divider style={{ marginBottom: 0 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  button: {
    padding: 12,
    backgroundColor: "red",
  },
});

export default Navigation;
