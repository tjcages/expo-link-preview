import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { WebView } from "react-native-webview";
import { OpenGraphParser } from "react-native-opengraph-kit";
import { Text, View, Title, Copy } from "../components/Themed";
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
      text: props.message,
    };
  }

  componentDidMount() {
    this.setCurrentURL(this.props.item.message);
  }

  isValidUrl(text) {
    var urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return "";
    });
  }

  setCurrentURL(value) {
    const text = this.isValidUrl(value);
    if (text) {
      this.setState({ url: value });

      OpenGraphParser.extractMeta(value)
        .then((data) => {
          // console.log(data);
          this.setState({ linkData: data[0] });
        })
        .catch((error) => {
          console.log("Error with Open Graph: " + error);
        });
    } else {
      this.setState({ url: null, linkData: null });
    }

    this.setState({ text: text });
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
            <Copy>{this.state.text}</Copy>
          </View>
          {this.state.linkData && (
            <View
              style={styles.content}
            >
              <View style={styles.preview}>{this.renderLink()}</View>
              <View style={styles.previewInfo}>
                <Title style={styles.title}>{this.state.linkData.title}</Title>
                <Text>{this.state.linkData.description}</Text>
              </View>
            </View>
          )}
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
    justifyContent: "flex-end",
    marginBottom: 6,
  },
  message: {
    flexDirection: "column",
  },
  content: {
    flexDirection: "column",
    padding: 16,
    backgroundColor: Colors.light.container,
    borderRadius: 12,
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
    marginBottom: 12,
  },
  previewInfo: {
    marginBottom: 6,
    marginHorizontal: 8,
    backgroundColor: "transparent",
  },
});
