import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import LandingScreen from "./screens/landingScreen";

import "./App.css";
import Nav from "./components/navigation";
import LoginScreen from "./screens/loginScreen";
import ListPosts from "./components/listPosts";
import ContentScreen from "./screens/contentScreen";
import RecentActivities from "./components/landingComponents/recentActivitiesSection";

class App extends Component {
  state = {
    users: [],
    isOpen: false,
    posts: [
      {
        id: uuidv4(),
        title: "Post 1",
        image: "",
        date: "June 20, 2020",
        body:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        id: uuidv4(),
        title: "Post 2",
        date: "May 20, 2020",
        body:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        id: uuidv4(),
        title: "Post 3",
        date: "October 20, 2020",
        body:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
    ],
  };

  toggleLogin = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  componentDidMount() {
    // axios.get("/api/post").then((response) => {
    //   this.setState({ users: response.data });
    // });
    // axios
    //   .get("/")
    //   .then((res) => res.json())
    //   .then((users) => this.setState({ users }));
  }

  render() {
    const { isOpen, posts } = this.state;
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
