import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, FlatList } from "react-native";
import { View, Container, Text } from "../components/Themed";

import Navigation from "../views/main/Navigation";

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
        data={[0, 1, 2, 3, 4, 5]}
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
