import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Title } from "../components/Themed";
import Colors from "../constants/Colors";

export default class Notice extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title}>Welcome to my lil app</Title>
        <Text>
          This is a home for you to save everything you like in one place. Feel
          free to create shared boards with friends or run it solo dolo
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
    padding: 16,
    marginBottom: 24,
    backgroundColor: Colors.light.container,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "red",
  },
  title: {
    marginBottom: 6,
  },
});
