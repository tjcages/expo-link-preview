import React from "react";
import { StyleSheet } from "react-native";
import { View, Container, Text } from "../components/Themed";

const Main = (props) => {
  return <View style={styles.container}>
    <Text>Hello world!!</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});

export default Main;
