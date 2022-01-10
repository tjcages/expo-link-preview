import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { WebView } from "react-native-webview";
import { OpenGraphParser } from "react-native-opengraph-kit";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.isValidUrl = this.isValidUrl.bind(this);
    this.setCurrentURL = this.setCurrentURL.bind(this);
    this.renderLink = this.renderLink.bind(this);

    this.state = {
      url: null,
      linkData: null,
    };
  }

  componentDidMount() {
    this.setCurrentURL(this.props.item.message);
  }

  isValidUrl(text) {
    var urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return true;
    });
  }

  setCurrentURL(value) {
    if (this.isValidUrl(value)) {
      this.setState({ url: value });

      OpenGraphParser.extractMeta(value)
        .then((data) => {
          console.log(data);
          this.setState({ linkData: data[0] });
        })
        .catch((error) => {
          console.log("Error with Open Graph: " + error);
        });
    } else {
      this.setState({ url: null, linkData: null });
    }
  }

  renderLink() {
    return this.state.linkData.image ? (
      <Image
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
        }}
        source={{ uri: this.state.linkData.image }}
      />
    ) : (
      <WebView
        mediaPlaybackRequiresUserAction={true}
        source={{ uri: this.state.linkData.url }}
        scrollEnabled={false}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.message}>
          <View style={styles.content}>
            <Text>{this.props.item.message}</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.preview}>
              {this.state.linkData !== null && this.renderLink()}
            </View>
          </View>
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
    marginBottom: 6,
  },
  message: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
    backgroundColor: Colors.light.container,
    borderRadius: 8,
    marginBottom: 6,
  },
  profile: {
    width: 36,
    height: 36,
    borderRadius: 64,
    marginLeft: 4,
  },
  preview: {
    position: "relative",
    flex: 1,
    minHeight: 224,
    backgroundColor: "#FFF",
    borderRadius: 6,
    overflow: "hidden",
  },
});
