import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.linkify = this.linkify.bind(this);
  }

  linkify(text) {
    var urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + "</a>";
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>{this.linkify(this.props.item.message)}</Text>
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
    borderRadius: 8,
  },
  profile: {
    width: 36,
    height: 36,
    borderRadius: 64,
    marginLeft: 4,
  },
});
