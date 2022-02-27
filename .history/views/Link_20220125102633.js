import React, { createRef } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View, Container, Title } from "../components/Themed";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";

import Twitter from "./Twitter";

const Link = (props) => {
  const webviewRef = createRef();

  const linkContainer = (children) => (
    children
  )

  const renderLink = () => {
    if (props.linkData.site_name === "Twitter") {
      return <Twitter twitterURL={props.linkData.url} />;
    }
    return linkContainer(
      props.linkData.image ? (
        <Image
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
          }}
          source={{ uri: props.linkData.image }}
        />
      ) : (
        <WebView
          ref={webviewRef}
          mediaPlaybackRequiresUserAction={true}
          source={{ uri: props.linkData.url }}
          scrollEnabled={false}
          disabled={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          originWhitelist={["*"]}
          onMessage={() => {}}
        />
      )
    )
  };

  const handleWebLink = () => {
    WebBrowser.openBrowserAsync(props.linkData.url);
  };

  return (
    <TouchableOpacity onPress={() => handleWebLink()}>
      <Container style={styles.content} pointerEvents="none">
        {/* <View style={styles.preview}>{renderLink()}</View> */}
        <View style={styles.previewInfo}>
          {props.linkData.title && (
            <Title style={styles.text}>{props.linkData.title}</Title>
          )}
          {props.linkData.description && (
            <Text style={styles.text}>{props.linkData.description}</Text>
          )}
        </View>
      </Container>
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
  text: {
    marginBottom: 6,
  },
});

export default Link;
