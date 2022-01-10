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
            source={{ uri: this.props.user.profile_picture }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
    backgroundColor: Colors.light.container,
    borderRadius: 12,
  },
  profile: {
    width: 24,
    height: 24,
    borderRadius: 64,
  },
});
