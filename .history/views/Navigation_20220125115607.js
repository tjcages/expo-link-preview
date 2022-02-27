import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { View, Divider } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import useColorScheme from "../hooks/useColorScheme";

import Profile from "../views/Profile";

const Navigation = (props) => {
  const theme = useColorScheme();
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <BlurView style={[styles.blur]} intensity={50} tint={theme} />
      <View style={styles.blurOverlay} />
      {props.user !== null && (
        <View style={styles.content}>
          <Profile
            {...props}
            size="medium"
            onPress={() => props.navigation.navigate("Settings")}
          />
        </View>
      )}
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
