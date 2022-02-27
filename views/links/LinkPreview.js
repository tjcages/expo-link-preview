import React, { createRef } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View, Container, Title } from "../../components/Themed";
import { WebView } from "react-native-webview";

const Link = (props) => {
  const webviewRef = createRef();
  console.log(props.data)

  const linkContainer = (children) => (
    <View style={styles.preview}>{children}</View>
  );

  const renderLink = () => {
    return linkContainer(
      props.data.image ? (
        <Image
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: "white",
            width: "100%",
            height: 400,
          }}
          source={{ uri: props.data.image }}
        />
      ) : (
        <WebView
          ref={webviewRef}
          mediaPlaybackRequiresUserAction={true}
          source={{ uri: props.data.url }}
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
        {props.data.title && (
          <Title style={styles.text} numberOfLines={2}>{props.data.title}</Title>
        )}
        {props.data.description && (
          <Text style={styles.text} numberOfLines={2}>{props.data.description}</Text>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
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
    flex: 1,
    position: "relative",
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
