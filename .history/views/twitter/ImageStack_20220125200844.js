import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Container } from "../../components/Themed";

const ImageStack = (props) => {
  console.log(props.media);
  const aspectArray = props.media.map((media) => media.width / media.height);
  const aspectRatio = Math.max(...aspectArray);

  const renderImage = (media) => (
    <Image
      style={[styles.image]}
      source={{
        uri: media.type === "video" ? media.preview_image_url : media.url,
      }}
    />
  );

  const renderTwo = (mediaArray, horizontal = true) => (
    <Container
      style={[
        styles.stackContainer,
        horizontal ? { flexDirection: "row" } : { flexDirection: "column" },
      ]}
    >
      <Container style={styles.imageContainer}>
        {renderImage(mediaArray[0])}
      </Container>
      <Split horizontal={horizontal} />
      <Container style={styles.imageContainer}>
        {renderImage(mediaArray[1])}
      </Container>
    </Container>
  );

  const renderThree = (mediaArray) => (
    <Container style={styles.stackContainer}>
      {renderTwo(mediaArray.slice(0, 2), false)}
      <Split horizontal={false} />
      {renderImage(mediaArray[2])}
    </Container>
  );

  const render = () => {
    console.log(props.media.length);
    switch (props.media.length) {
      case 1:
        return renderImage(props.media[0]);
      case 2:
        return renderTwo(props.media.slice(0, 2));
      case 3:
        return renderThree(props.media.slice(0, 3));
      default:
        return renderImage(props.media[0]);
    }
  };

  return (
    <Container style={[styles.container, { aspectRatio: aspectRatio }]}>
      {render()}
    </Container>
  );
};

const Split = ({ horizontal }) => (
  <Container
    style={[{ flex: 1 }, horizontal ? { maxWidth: 3 } : { maxHeight: 3 }]}
  />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    marginTop: 12,
    borderRadius: 8,
    maxHeight: 400,
    overflow: "hidden",
  },
  stackContainer: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: { flex: 1 },
  image: {
    flex: 1,
    height: "100%",
  },
});

export default ImageStack;
