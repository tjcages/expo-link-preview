import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Container, Title, useThemeColor } from "../components/Themed";
import { WebView } from "react-native-webview";

const Link = (props) => {
  // standard, themed colors to be used
  const container = useThemeColor({}, "container");
  const primary = useThemeColor({}, "primary");
  const secondary = useThemeColor({}, "secondary");
  const divider = useThemeColor({}, "divider");

  const {
    textColor = secondary,
    titleColor = primary,
    containerColor = container,
    borderColor = divider,
    twitterLogoColor,
    link,
    onPress,
    ...otherProps
  } = props;

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
            backgroundColor: containerColor,
            width: "100%",
            height: 400,
          }}
          source={{ uri: props.data.image }}
        />
      ) : (
        <WebView
          mediaPlaybackRequiresUserAction={true}
          source={{ uri: props.data.url }}
          scrollEnabled={false}
          disabled={true}
        />
      )
    );
  };

  return (
    <Container
      style={[styles.content, { backgroundColor: containerColor, borderColor }]}
      pointerEvents="none"
      {...otherProps}
    >
      {renderLink()}
      <View style={styles.previewInfo}>
        {props.data.title && (
          <Title style={[styles.text, { color: titleColor }]} numberOfLines={2}>
            {props.data.title}
          </Title>
        )}
        {props.data.description && (
          <Text style={[styles.text, { color: textColor }]} numberOfLines={2}>
            {props.data.description}
          </Text>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 12,
    borderRadius: 12,
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
