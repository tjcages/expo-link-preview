import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default class Navigation extends Component {
  render() {
    return <View style={styles.container}>
      <SafeAreaView edges={["top"]}>
        <Text>Heyyy</Text>
      </SafeAreaView>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
  }
})