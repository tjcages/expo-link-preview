import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrentUser, getUsers, updateUserReadState } from "../../api/users";
import { listenToUserGroups, getGroupInfo } from "../../api/groups";
import {
  getRecentThreads,
  loadRecentMessage,
  listenToThreads,
  listenToMessages,
} from "../../api/messages";

import LoadingView from "../screens/LoadingView";

class DataLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageListener: null,
    };
  }

  componentDidMount() {
    // initialization setup
    this.props.getCurrentUser();
  }

  componentDidUpdate(prevProps) {
    // if user data has been loaded, check for messages
    const userChanged = this.props.user !== prevProps.user;
    if (userChanged) {
      this.props.listenToMessages(props.user.uid).then((unsubscribe) => {
        this.setState({ messageListener: unsubscribe });
      });
    }
  }

  render() {
    return this.props.user ? this.props.children : <LoadingView />;
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCurrentUser,
      getUsers,
      updateUserReadState,
      listenToUserGroups,
      getGroupInfo,
      getRecentThreads,
      loadRecentMessage,
      listenToThreads,
      listenToMessages,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DataLayer);
