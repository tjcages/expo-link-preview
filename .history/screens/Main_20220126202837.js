import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, FlatList } from "react-native";
import { View, Container, Text } from "../components/Themed";

import Navigation from "../views/main/Navigation";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Main = (props) => {
  const renderItem = ({ item }) => {
    <Container style={styles.content}>
      <Text>Hello!</Text>
    </Container>;
  };

  return (
    <View style={styles.container}>
      <Navigation {...props} />
      <FlatList
        style={{ flex: 1 }}
        data={DATA}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  content: {
    height: 300,
    width: "50%",
    backgroundColor: "blue"
  }
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
