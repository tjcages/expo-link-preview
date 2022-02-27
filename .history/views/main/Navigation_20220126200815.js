import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { View, Divider, getTheme } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import Profile from "../shared/Profile";

const Navigation = (props) => {
  const theme = props.theme;
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <BlurView style={[styles.blur]} intensity={50} tint={getTheme()} />
      <View style={styles.blurOverlay} />

      <View style={styles.content}>
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
    width: 36,
    height: 36,
    padding: 0,
    backgroundColor: "transparent",
  },
});

export default Navigation;
