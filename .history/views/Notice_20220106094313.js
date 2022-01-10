import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Headline } from "../components/Themed";
import Colors from "../constants/Colors";

export default class Notice extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Headline>This is my Headline</Headline>
        <Text>
          This is a super long description that will describe the home screen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 24,
    marginBottom: 24,
    backgroundColor: Colors.light.container,
    borderRadius: 12,
  },
});
