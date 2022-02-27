import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../../../assets/colors";

const BottomSheet = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={props.onPress}
        underlayColor={"transparent"}
        activeOpacity={1}
      >
        <View />
      </TouchableHighlight>

      <SafeAreaView
        edges={["bottom"]}
        style={[styles.bottomSheet, props.style]}
      >
        {props.children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: colors.dark,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: colors.divider,
  },
});

export default BottomSheet;
