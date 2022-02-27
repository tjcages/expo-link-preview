import React, { createRef } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View, Container, Title } from "../components/Themed";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";

const Link = (props) => {
  const webviewRef = createRef();

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
        // source={{ uri: props.linkData.url }}
        source={{body: `<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'></head><body><div id='wrapper'></div></body></html>`}}
        scrollEnabled={false}
        disabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  };

  const handleWebLink = () => {
    WebBrowser.openBrowserAsync(props.linkData.url);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        let loadScript = `
        const document.getElementById('wrapper')
        console.log(document)
        console.log('penis')

      twttr.widgets.createTweet(
    '1485629473206718466', 
      document.getElementById('wrapper'),
    { align: 'center' }
      );
    `;
        webviewRef.current.injectJavaScript(loadScript);
      }}
    >
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
