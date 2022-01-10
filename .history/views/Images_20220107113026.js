import React, { Component } from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { View } from "../components/Themed";

import Colors from "../constants/Colors";

export default class Images extends Component {
  constructor(props) {
    super(props);

    this.renderImage = this.renderImage.bind(this);
    this.handleImageSelected = this.handleImageSelected.bind(this);

    this.state = {
      images: [
        "https://cdn.dribbble.com/users/427857/screenshots/17224841/media/94194f711e8d3b25da567496b23c40fc.png?compress=1&resize=1000x750&vertical=top",
        "https://cdn.dribbble.com/users/1030568/screenshots/17218785/media/fc7e126b8554deb6a8420d643c7646e6.png?compress=1&resize=1200x900&vertical=top",
        "https://cdn.dribbble.com/users/427857/screenshots/17215848/media/4d9528b227dacd228bf8b3352ba514b4.png?compress=1&resize=1200x900&vertical=top",
        "https://cdn.dribbble.com/users/131302/screenshots/17202625/media/55c4f36471881d3bd9113a8ce7988ce0.png?compress=1&resize=1200x900&vertical=top",
        "https://cdn.dribbble.com/users/1126935/screenshots/17206653/media/803f8427b07b05859994ac2b80ddf8b2.png?compress=1&resize=1200x900&vertical=top",
      ],
      selected: [],
    };
  }

  handleImageSelected(image) {
    if (this.state.selected.includes(image)) {
      const filtered = this.state.selected.filter(
        (selectedImage) => selectedImage !== image
      );
      this.setState({ selected: filtered });
    } else {
      const newSelected = [...this.state.selected, image];
      this.setState({ selected: newSelected });
    }
  }

  renderImage(image) {
    return (
      <TouchableOpacity
        style={[
          styles.imageContainer,
          this.state.selected.includes(image) && styles.selected,
        ]}
        onPress={() => this.handleImageSelected(image)}
      >
        <Image style={styles.image} source={{ uri: image }} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        kseyboardDismissMode="none"
      >
        <View style={styles.container}>
          {this.state.images.map((image) => this.renderImage(image))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: 12,
    paddingHorizontal: 64,
  },
  imageContainer: {
    width: 90,
    height: 90,
    marginRight: 8,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "transparent",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  selected: {
    borderColor: Colors.default.blue,
  },
});
