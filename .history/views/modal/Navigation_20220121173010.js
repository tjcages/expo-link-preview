import React from "react";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { Divider, NavButton, View } from "../../components/Themed";

import useColorScheme from "../../hooks/useColorScheme";

const Navigation = (props) => {
  const theme = useColorScheme();
  return (
    <View style={{ backgroundColor: props.background }}>
      <View style={styles.content}>
        <NavButton text="Done" onPress={props.onDismiss} />
      </View>
      <Divider style={{ marginBottom: 0 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 4,
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
