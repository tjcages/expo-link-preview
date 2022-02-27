import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Container } from "../../components/Themed";

const ImageStack = (props) => {
  console.log(props.media);
  const aspectArray = props.media.map((media) => media.width / media.height);
  const aspectRatio = Math.max(...aspectArray);

  const renderImage = (media) => (
    <Image
      style={styles.image}
      source={{
        uri: media.type === "video" ? media.preview_image_url : media.url,
      }}
    />
  );

  const renderTwo = (mediaArray) => (
    <Container style={{flex: 1, backgroundColor: "blue"}}>
      <Container style={{flex: 0.5}}>
        {renderImage(mediaArray[0])}
      </Container>
      <Split />
    </Container>
  );

  const render = () => {
    console.log(props.media.length);
    switch (props.media.length) {
      case 1:
        return renderImage(props.media[0]);
        case 2:
          return renderTwo(props.media.slice(0, 1))
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

const Split = () => (
  <View style={{flex: 1, backgroundColor: "black"}}/>
)

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
    height: "100%",
  },
});

export default ImageStack;
