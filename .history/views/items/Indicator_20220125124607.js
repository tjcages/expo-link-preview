import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";

import Colors from "../../constants/Colors";
import { useThemeColor } from "../../components/Themed";

const Indicator = (props) => {
  const current = props.current ?? false;
  const color = useThemeColor({}, "primary");
  const divider = useThemeColor({}, "divider");

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          current
            ? {
                backgroundColor: Colors.default.green,
                borderColor: Colors.default.green,
              }
            : { borderColor: color },
        ]}
      />
      {!current && <View style={[styles.line, { backgroundColor: divider }]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 24,
    borderWidth: 2,
    marginTop: 4,
  },
  line: {
    flex: 1,
    width: 2,
    marginBottom: -36,
  },
});

export default Indicator;
