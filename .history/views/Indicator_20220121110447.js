import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";

import { useThemeColor } from "../components/Themed";

const Indicator = () => {
  const color = useThemeColor({}, "primary");

  return <View style={[styles.container, { borderColor: color }]}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: 12,
    height: 12,
    borderRadius: 24,
    borderWidth: 2,
  },
});

export default Indicator;
