import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";

import Colors from "../constants/Colors";
import { useThemeColor } from "../components/Themed";

const Indicator = (props) => {
  const current = props.current ?? false;
  const color = useThemeColor({}, "primary");

  return (
    <View
      style={[
        styles.container,
        current
          ? { backgroundColor: Colors.default.green, borderColor: Colors.default.green }
          : { borderColor: color },
      ]}
    ></View>
  );
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
