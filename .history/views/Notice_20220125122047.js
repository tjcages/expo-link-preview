import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Title } from "../components/Themed";
import Colors from "../constants/Colors";

export default class Notice extends Component {
  render() {
    return (
      <View
        lightColor={Colors.dark.background}
        darkColor={Colors.light.background}
        style={styles.container}
      >
        <Title
          lightColor={Colors.dark.primary}
          darkColor={Colors.light.primary}
          style={styles.title}
        >
          Welcome to my lil app
        </Title>
        <Text
          lightColor={Colors.dark.secondary}
          darkColor={Colors.light.secondary}
        >
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
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  title: {
    marginBottom: 6,
  },
});
