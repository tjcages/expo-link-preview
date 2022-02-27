import React from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "../../components/Themed";

const ImageStack = (props) => {
  console.log(props.media);
  var height = props.media.map((media) => media.height / media.width);
  console.log(height);
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

export default ImageStack;
