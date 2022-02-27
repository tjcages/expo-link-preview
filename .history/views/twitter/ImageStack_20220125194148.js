import React from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "../../components/Themed";

const ImageStack = (props) => {
  console.log(props.media);
  const aspectArray = props.media.map((media) => media.width / media.height);
  const aspectRatio = Math.max(...aspectArray);

  return <View style={[styles.container, { aspectRatio }]}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    marginTop: 12,
    borderRadius: 8,
    maxHeight: 400,
  },
});

export default ImageStack;
