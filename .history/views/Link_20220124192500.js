import React, { createRef } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View, Container, Title } from "../components/Themed";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";
import RenderHtml from 'react-native-render-html';

const Link = (props) => {
  const webviewRef = createRef();

  const renderLink = () => {
    const source = {
      html: `<blockquote class="twitter-tweet" style="width: 1000px;"><p lang="en" dir="ltr">Build automations that complete Figma tasks for you with just one click.<br><br>Try it out for free: <a href="https://t.co/9VJQFF58Yl">https://t.co/9VJQFF58Yl</a> <a href="https://t.co/XlF7W5GKzz">pic.twitter.com/XlF7W5GKzz</a></p>&mdash; Product Hunt 😸 (@ProductHunt) <a href="https://twitter.com/ProductHunt/status/1485629473206718466?ref_src=twsrc%5Etfw">January 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
    }
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
    //   <RenderHtml
    //   contentWidth={300}
    //   source={source}
    // />
      <WebView
        ref={webviewRef}
        mediaPlaybackRequiresUserAction={true}
        // source={{ uri: props.linkData.url }}
        source={source}
        scrollEnabled={false}
        disabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={["*"]}
        onMessage={() => {}}
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
        function myFunction() {
          document.getElementById("body").style = "background-color: #ff0000;";
        }
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
