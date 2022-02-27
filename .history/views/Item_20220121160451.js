import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";
import { OpenGraphParser } from "react-native-opengraph-kit";
import { Text, View, Container, Title, Copy } from "../components/Themed";

import { timeAgo, isToday } from "../utils";

import Indicator from "../views/Indicator";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.isValidUrl = this.isValidUrl.bind(this);
    this.setCurrentURL = this.setCurrentURL.bind(this);
    this.renderLink = this.renderLink.bind(this);
    this.handleWebLink = this.handleWebLink.bind(this);

    this.state = {
      url: null,
      linkData: null,
      text: props.message,
      date: props.item.created_at,
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
        disabled={true}
      />
    );
  }

  handleWebLink() {
    WebBrowser.openBrowserAsync(this.state.linkData.url);
  }

  render() {
    return (
      <View style={styles.container}>
        <Indicator current={isToday(this.state.date)} />
        <View style={styles.message}>
          <View style={styles.content}>
            <Text style={{ marginBottom: 4 }}>
              {timeAgo.format(this.state.date, "round-minute")}
            </Text>
            <Copy>{this.state.text}</Copy>
          </View>
          {this.state.linkData && (
            <TouchableOpacity onPress={this.handleWebLink}>
              <Container style={styles.content} pointerEvents="none">
                <View style={styles.preview}>{this.renderLink()}</View>
                <View style={styles.previewInfo}>
                  <Title style={styles.title}>
                    {this.state.linkData.title}
                  </Title>
                  <Text>{this.state.linkData.description}</Text>
                </View>
              </Container>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 8,
    paddingBottom: 24,
  },
  message: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 4,
  },
  content: {
    flexDirection: "column",
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 6,
    marginRight: "auto",
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
    marginVertical: 12,
  },
  previewInfo: {
    marginBottom: 6,
    marginHorizontal: 8,
    backgroundColor: "transparent",
  },
  title: {
    marginBottom: 6,
  },
});
