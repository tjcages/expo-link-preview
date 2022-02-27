import React from "react";
import { StyleSheet, Image } from "react-native";
import { Container } from "../../components/Themed";

const ImageStack = (props) => {
  console.log(props.media);
  const aspectArray = props.media.map((media) => media.width / media.height);
  const aspectRatio = Math.max(...aspectArray);

  const renderImage = (media) => (
    <Image
      style={styles.image}
      source={{
        uri:
          media.type === "video"
            ? media.preview_image_url
            : media.url,
      }}
    />
  );

  const renderTwo = () => {};

  const render = () => {
    console.log(props.media.length)
    switch (props.media.length) {
      case 1:
        return renderImage(props.media[0]);
        default:
          return renderImage(props.media[0]);
    }
  };

  return (
    <Container style={[styles.container, { aspectRatio }]}>
      {render()}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    marginTop: 12,
    borderRadius: 8,
    maxHeight: 400,
    overflow: "hidden",
  },
  image: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%"
  },
});

export default ImageStack;
