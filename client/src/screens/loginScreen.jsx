import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Login from "../components/login";

class LoginScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Login handleBack={() => this.props.history.goBack()} />
      </React.Fragment>
    );
  }
}

export default withRouter(LoginScreen);
