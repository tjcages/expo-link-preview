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
          data.includes.media[0].type === "video"
            ? data.includes.media[0].preview_image_url
            : data.includes.media[0].url,
      }}
    />
  );

  const renderTwo = () => {};

  const render = () => {
    switch (props.media.length) {
      case 1:
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
  },
  image: {
    flex: 1,
  },
});

export default ImageStack;
