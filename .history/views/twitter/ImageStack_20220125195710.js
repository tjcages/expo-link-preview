import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Container } from "../../components/Themed";

const ImageStack = (props) => {
  console.log(props.media);
  const aspectArray = props.media.map((media) => media.width / media.height);
  const aspectRatio = Math.max(...aspectArray);

  const renderImage = (media) => (
    <Image
      style={[
        styles.image,
        {

        },
      ]}
      source={{
        uri: media.type === "video" ? media.preview_image_url : media.url,
      }}
    />
  );

  const renderTwo = (mediaArray) => (
    <Container style={styles.horizontalContainer}>
      <Container style={styles.imageContainer}>
        {renderImage(mediaArray[0])}
      </Container>
      <Split />
      <Container style={styles.imageContainer}>
        {renderImage(mediaArray[1])}
      </Container>
    </Container>
  );

  const render = () => {
    console.log(props.media.length);
    switch (props.media.length) {
      case 1:
        return renderImage(props.media[0]);
      case 2:
        return renderTwo(props.media.slice(0, 2));
      default:
        return renderImage(props.media[0]);
    }
  };

  return (
    <Container style={[styles.container, { aspectRatio: aspectRatio * 4/3 }]}>
      {render()}
    </Container>
  );
};

const Split = () => <Container style={{ flex: 1, maxWidth: 3 }} />;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    marginTop: 12,
    borderRadius: 8,
    maxHeight: 400,
    overflow: "hidden",
  },
  horizontalContainer: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
  },
  imageContainer: { flex: 0.5 },
  image: {
    backgroundColor: "blue",
    height: "100%",
  },
});

export default ImageStack;
