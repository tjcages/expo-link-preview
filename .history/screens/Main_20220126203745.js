import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, FlatList } from "react-native";
import { View, Container, Text } from "../components/Themed";

import Navigation from "../views/main/Navigation";
import Profile from "../views/shared/Profile";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Main = (props) => {
  const renderItem = (item) => (
    <View style={styles.content}>
      <Container style={styles.item}>
        <Profile {...props} size="large" />
      </Container>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: 124 }}
      />
      <Navigation {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: "wrap",
  },
  content: {
    width: "50%",
    height: 300,
    padding: 16,
    backgroundColor: "transparent",
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
    borderRadius: 12,
  }
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
