import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, ScrollView, RefreshControl } from "react-native";
import { View } from "../components/Themed";

import { getCurrentUser } from "../api/users";
import { listenToMessages } from "../api/messages";

import Navigation from "../views/Navigation";
import Notice from "../views/Notice";
import Item from "../views/Item";
import SendPost from "../views/SendPost";

const Home = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setRefreshing(true);
    try {
      const response = await fetch(
        "https://api.twitter.com/2/tweets/1485491595139231744?expansions=author_id",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAGDzYQEAAAAAZ0ZFMwJPqe8Jb01e2o1zBsWhs50%3DGhL4hZkBjXmqh2BLCJbP2UKb0HKwUr1doMfGDdlfJfcQUYkvrP",
          },
        }
      );
      const json = await response.json();

      console.log("done")
      console.log(json)
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    // setRefreshing(true);
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 1000);
    // setRefreshing(true)
    // fetch("https://api.twitter.com/2/tweets/1028039268030210048", {
    //   headers: {
    //     Authorization:
    //       "Bearer AAAAAAAAAAAAAAAAAAAAAGDzYQEAAAAAZ0ZFMwJPqe8Jb01e2o1zBsWhs50%3DGhL4hZkBjXmqh2BLCJbP2UKb0HKwUr1doMfGDdlfJfcQUYkvrP",
    //   },
    // })
    //   .then((response) => {
    //     console.log("done")
    //     console.log(response);
    //     setRefreshing(false)
    //   })
    //   .catch((error) => {
    //     console.log("error")
    //     console.error(error);
    //     setRefreshing(false)
    //   });
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
