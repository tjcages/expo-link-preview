import React, { createRef } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View, Container, Title } from "../../components/Themed";
import { WebView } from "react-native-webview";

const Link = (props) => {
  const webviewRef = createRef();

  const linkContainer = (children) => (
    <View style={styles.preview}>{children}</View>
  );

  const renderLink = () => {
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
    );
  };

  return (
    <Container style={styles.content} pointerEvents="none">
      {renderLink()}
      <View style={styles.previewInfo}>
        {props.linkData.title && (
          <Title style={styles.text}>{props.linkData.title}</Title>
        )}
        {props.linkData.description && (
          <Text style={styles.text} numberOfLines={2}>{props.linkData.description}</Text>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 6,
    borderWidth: 1,
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
    fontSize: 20,
    marginBottom: 6,
  },
});

export default Link;
