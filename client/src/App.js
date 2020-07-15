import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Container from "./components/container";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Container />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
