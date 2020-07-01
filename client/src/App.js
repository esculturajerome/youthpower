import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingScreen from "./screens/landingScreen";

import "./App.css";
import ContentScreen from "./screens/contentScreen";

class App extends Component {
  // state = {
  //   isOpen: false,
  // };

  // toggleLogin = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // };

  // componentDidMount() {
  //   axios.get("/api/post").then((response) => {
  //     this.setState({ users: response.data });
  //   });
  //   axios
  //     .get("/")
  //     .then((res) => res.json())
  //     .then((users) => this.setState({ users }));
  // }

  render() {
    // const { isOpen } = this.state;
    return (
      <React.Fragment>
        {/* <ContentScreen postData={posts} /> */}
        {/* {!isOpen && <RecentActivities postData={posts} />} */}
        {/* {!isOpen && <LandingScreen onClick={this.toggleLogin} />} */}
        {/* {isOpen && <ListPosts />} */}
        {/* <Nav />
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul> */}
        <Router>
          <Switch>
            <Route exact path="/" component={LandingScreen} />
            <Route path="/activity/:id/" component={ContentScreen} />
            {/* <Route path="/login" component={Login} />
            <Route path="/works" component={Works} />
            <Route component={NoMatch} /> */}
          </Switch>
        </Router>

        {/* <Login /> */}
        {/* <LandingPage />
      <RecentActivities />
      <DonationSection />
      <LearnMore />
      <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
