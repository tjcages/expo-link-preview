import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet } from "react-native";
import { View, Container, Text } from "../components/Themed";

import Navigation from "../views/main/Navigation"

const Main = (props) => {
  return <View style={styles.container}>
    <Navigation {...props} />
    <Text>Hello world!!</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Main);
