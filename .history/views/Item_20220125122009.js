import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { OpenGraphParser, OpenGraphDisplay } from "react-native-opengraph-kit";
import { Text, View, Copy } from "../components/Themed";

import { timeAgo, isToday } from "../utils";

import Indicator from "./Indicator";
import Link from "./Link";

export default class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.isValidUrl = this.isValidUrl.bind(this);
    this.setCurrentURL = this.setCurrentURL.bind(this);

    this.state = {
      url: null,
      linkData: null,
      text: props.message,
      date: props.item.created_at,
      data: []
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
    if (text !== value) {
      this.setState({ url: value });

      OpenGraphParser.extractMeta(value)
        .then((data) => {
            // console.log(data);
            this.setState({ data });
        })
        .catch((error) => {
            console.log(error);
        });
      // OpenGraphParser.extractMeta(value)
      //   .then((data) => {
      //     this.setState({ linkData: data[0] });
      //   })
      //   .catch((error) => {
      //     console.log("Error with Open Graph: " + error);
      //   });
    } else {
      this.setState({ url: null, linkData: null });
    }

    this.setState({ text: text });
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
          {this.state.data.map((meta, i) => (
            <Link {...this.props} key={meta} linkData={meta} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom: 36,
    paddingHorizontal: 16,
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
