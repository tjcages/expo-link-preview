import React, { createRef } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View } from "../components/Themed";
import * as WebBrowser from "expo-web-browser";

import LinkPreview from "./links/LinkPreview";
import Twitter from "./links/Twitter";

const Link = (props) => {
  const webviewRef = createRef();

  const linkContainer = (children) => (
    <View style={styles.preview}>{children}</View>
  );

  const renderLink = () => {
    if (props.linkData.site_name === "Twitter") {
      return <Twitter twitterURL={props.linkData.url} />;
    } else {
      return <LinkPreview {...props} />;
    }
  };

  const handleWebLink = () => {
    WebBrowser.openBrowserAsync(props.linkData.url);
  };

  return (
    <TouchableOpacity onPress={() => handleWebLink()}>
      {renderLink()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    paddingHorizontal: 12,
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
    borderRadius: 6,
    overflow: "hidden",
    marginVertical: 12,
  },
  previewInfo: {
    marginBottom: 6,
    marginHorizontal: 8,
    backgroundColor: "transparent",
  },
  text: {
    marginBottom: 6,
  },
});

export default Link;
