import React, { createRef } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View, Container, Title } from "../components/Themed";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";

const Link = (props) => {
  const webviewRef = createRef()

  const renderLink = () => {
    return props.linkData.image ? (
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
      />
    );
  };

  const handleWebLink = () => {
    WebBrowser.openBrowserAsync(props.linkData.url);
  };

  return (
    <TouchableOpacity onPress={() => {
      console.log(webviewRef.current)
      let loadScript = "twttr.widgets.createTweet(TWEET_ID_STRING, document.getElementById('wrapper'),{ align: 'center' });"
      webviewRef.current.injectJavascript(loadScript)
    }}>
      <Container style={styles.content} pointerEvents="none">
        <View style={styles.preview}>{renderLink()}</View>
        <View style={styles.previewInfo}>
          {props.linkData.title && (
            <Title style={styles.title}>{props.linkData.title}</Title>
          )}
          {props.linkData.description && (
            <Text>{props.linkData.description}</Text>
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
  title: {
    marginBottom: 6,
  },
});

export default Link;
