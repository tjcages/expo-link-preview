import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, FlatList, RefreshControl } from "react-native";
import { View } from "../components/Themed";

import { getCurrentUser } from "../api/users";
import { listenToMessages } from "../api/messages";

import Navigation from "../views/main/Navigation";
import Notice from "../views/main/Notice";
import Item from "../views/items/Item";
import SendPost from "../views/main/SendPost";

const Home = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  console.log("loading home");

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderItem = ({ item }) => <Item {...props} item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.home}
        data={props.messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<SendPost {...props} />}
        ListFooterComponent={<Notice />}
        keyboardDismissMode="interactive"
        contentContainerStyle={{ paddingVertical: 124 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        // decelerationRate="fast"
        refreshControl={
          <RefreshControl style={{marginTop: 100}} refreshing={refreshing} onRefresh={onRefresh} progressViewOffset={-100} />
        }
      />
      <Navigation {...props} />
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
