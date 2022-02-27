import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { View, Container, Title, Text } from "../components/Themed";

import Colors from "../constants/Colors"

import Navigation from "../views/main/Navigation";
import Profile from "../views/shared/Profile";
import Indicator from "../views/shared/Indicator";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Launch Pad",
    subtitle: "Carter posted",
    new: true
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Docket",
    subtitle: "You posted",
    new: true
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Paul Graham UI",
    subtitle: "You posted",
    new: false
  },
];

const Main = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.content}
      onPress={() => props.navigation.navigate("Board", { item })}
    >
      <Container style={styles.item}>
        <Container style={styles.info}>
        <Profile {...props} size="large" />
        <Indicator style={styles.indicator} current />

        <Title style={styles.title}>{item.title}</Title>
        </Container>
        <Text style={[styles.subtitle, item.new && {color: Colors.default.green}]}>{item.subtitle}</Text>
      </Container>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={<Navigation {...props} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  content: {
    width: "50%",
    height: 264,
    padding: 8,
    backgroundColor: "transparent",
  },
  item: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    marginTop: -8,
    marginRight: -42,
  },
  title: {
    marginLeft: 8,
    marginTop: 12,
    textAlign: "center",
    fontSize: 20,
  },
  subtitle: {
    marginLeft: 8,
    marginTop: 12,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 12
  },
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
