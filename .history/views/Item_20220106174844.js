import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Title } from "../components/Themed";
import Colors from "../constants/Colors";

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title}>{this.props.item.message}</Title>
      
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
  },
  title: {
    marginBottom: 6,
  },
});
