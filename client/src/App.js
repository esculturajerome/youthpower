import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Container from "./components/container";

class App extends Component {
  state = {
    images: [
      {
        imageLink: "activity.jpg",
      },
      {
        imageLink: "12years.jpg",
      },
      {
        imageLink: "awarding_certificate.jpg",
      },
      {
        imageLink: "post2.jpg",
      },
      {
        imageLink: "learnmore.jpg",
      },
    ],
  };
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
