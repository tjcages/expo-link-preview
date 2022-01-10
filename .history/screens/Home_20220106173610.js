import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, ScrollView } from "react-native";
import { View } from "../components/Themed";

import { getCurrentUser } from "../api/users";
import { listenToMessages } from "../api/messages";

import Navigation from "../views/Navigation";
import Notice from "../views/Notice";
import SendPost from "../views/SendPost";

const Home = (props) => {
  useEffect(() => {
    props.getCurrentUser();
    
    if (props.user) {
      props.listenToMessages(props.user.uid).then((unsubscribe) => {});
    }
  }, []);

  console.log(props.messages)

  return (
    <View style={styles.container}>
      <Navigation {...props} />
      <ScrollView style={styles.home} keyboardDismissMode="interactive">
        {
          props.messages.map(message => {
            return <Notice />
          })
        }
      </ScrollView>
      <SendPost {...props} />
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
    padding: 16,
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
      listenToMessages
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
