import React, { Component } from "react";
import Input from "./input";

import "../styles/login.css";

class Login extends Component {
  render() {
    const { handleBack } = this.props;
    return (
      <div className="login">
        <button onClick={handleBack}>back</button>
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <div className="input-container">
          <p className="login-title">Email</p>
          <Input name="email" autoFocus="autoFocus" type="email" />
          <p className="login-title">Password</p>
          <Input name="password" type="password" />
        </div>
      </div>
    );
  }
}

export default Login;
