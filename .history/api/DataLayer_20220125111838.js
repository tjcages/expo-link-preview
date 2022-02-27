import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrentUser } from "./users";
import { listenToMessages } from "./messages";

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
    console.log("Updating")
    console.log(this.props.user)
    // if user data has been loaded, check for messages
    const userChanged = this.props.user !== prevProps.user;
    if (userChanged && this.props.user) {
      console.log("updating here")
      this.props.listenToMessages(this.props.user.uid).then((unsubscribe) => {
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
      listenToMessages,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DataLayer);
