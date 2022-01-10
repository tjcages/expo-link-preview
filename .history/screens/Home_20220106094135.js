import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, ScrollView } from "react-native";
import { Text, View, Header, Button, Divider } from "../components/Themed";

import { signOut } from "../api/authentication";
import { getCurrentUser } from "../api/users";

import Navigation from "../views/Navigation";
import Notice from "../views/Notice";

const Home = (props) => {
  useEffect(() => {
    props.getCurrentUser();
  }, []);

  return (
    <View style={styles.container}>
      <Navigation {...props} />
      <ScrollView style={styles.home}>
        <Notice />
        <Header>HOME!!!!</Header>
        <Divider />
        <Text style={styles.text}>
          This is a home for you to save everything you like in one place. Feel
          free to create shared boards with friends or run it solo dolo
        </Text>
        <Button onPress={() => signOut()}>
          <Text style={styles.buttonText}>Log out</Text>
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  home: {
    flex: 1,
    paddingHorizontal: 24,
  },
  text: {
    marginBottom: 48,
  },
  buttonText: {
    color: "white",
  },
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCurrentUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
