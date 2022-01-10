import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, ScrollView } from "react-native";
import { View } from "../components/Themed";

import { getCurrentUser } from "../api/users";
import { listenToMessages } from "../api/messages";

import Navigation from "../views/Navigation";
import Notice from "../views/Notice";
import Item from "../views/Item";
import SendPost from "../views/SendPost";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.props.user && this.props.loadingState) {
      this.props.listenToMessages(this.props.user.uid).then((unsubscribe) => {});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigation {...this.props} />
        <ScrollView style={styles.home} keyboardDismissMode="interactive">
          <Notice />
          {this.props.messages.map((message) => {
            return <Item key={message.id} item={message} />;
          })}
        </ScrollView>
        <SendPost {...this.props} />
      </View>
    );
  }
}

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
      listenToMessages,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
