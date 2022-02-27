import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, ScrollView, RefreshControl } from "react-native";
import { View } from "../components/Themed";
import { Instagram, Twitter } from "react-native-socials";

import { getCurrentUser } from "../api/users";
import { listenToMessages } from "../api/messages";

import Navigation from "../views/Navigation";
import Notice from "../views/Notice";
import Item from "../views/Item";
import SendPost from "../views/SendPost";

const Home = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  // useEffect(() => {
  //   props.getCurrentUser();
  //   if (props.user) {
  //     console.log("checking user")
  //     props
  //       .listenToMessages(props.user.uid)
  //       .then((unsubscribe) => {});
  //   }
  // }, [])

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.home}
        keyboardDismissMode="interactive"
        stickyHeaderIndices={[0]}
        contentContainerStyle={{ paddingBottom: 124 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        decelerationRate="fast"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Navigation {...props} />
        <Twitter
          consumerKey="i9eNTPHJBpAKBCQ0cxzs0I4Co"
          consumerSecret="8eBwPxIJplb8RlvWRAtIFymmkR62GlL7m4qU1UfT7gH7e8nPIx"
          id="1485784823641755648"
        ></Twitter>
        <Instagram id="CZIp7lcrrlH"></Instagram>
        <View style={styles.content}>
          <SendPost {...props} />
          {props.messages.map((message) => {
            return <Item {...props} key={message.id} item={message} />;
          })}
          <Notice />
        </View>
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
  },
  content: {
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
      listenToMessages,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
