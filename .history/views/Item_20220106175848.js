import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>{this.props.item.message}</Text>
        </View>
        <TouchableOpacity style={styles.profile}>
          <Image
            style={styles.profile}
            source={{ uri: props.user.profile_picture }}
          />
        </TouchableOpacity>
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
  profile: {
    width: 56,
    height: 56,
    borderRadius: 64,
  }
});
