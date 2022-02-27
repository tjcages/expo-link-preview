import React from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "../../components/Themed";

const ImageStack = (props) => {
  console.log(props.media);
  const heightArray = props.media.map((media) => media.height / media.width);
  const height = Math.max(...heightArray);

  return <View style={[styles.container, { height }]}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
  },
});

export default ImageStack;
