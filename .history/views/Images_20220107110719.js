import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "../components/Themed";

export default class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://cdn.dribbble.com/users/427857/screenshots/17224841/media/94194f711e8d3b25da567496b23c40fc.png?compress=1&resize=1000x750&vertical=top",
        "https://cdn.dribbble.com/users/1030568/screenshots/17218785/media/fc7e126b8554deb6a8420d643c7646e6.png?compress=1&resize=1200x900&vertical=top",
        "https://cdn.dribbble.com/users/427857/screenshots/17215848/media/4d9528b227dacd228bf8b3352ba514b4.png?compress=1&resize=1200x900&vertical=top",
        "https://cdn.dribbble.com/users/131302/screenshots/17202625/media/55c4f36471881d3bd9113a8ce7988ce0.png?compress=1&resize=1200x900&vertical=top",
        "https://cdn.dribbble.com/users/1126935/screenshots/17206653/media/803f8427b07b05859994ac2b80ddf8b2.png?compress=1&resize=1200x900&vertical=top",
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.images.map((image) => {
          return <Image style={styles.image} source={{ uri: image }} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image: {
    width: 64,
    height: 64,
  }
});
