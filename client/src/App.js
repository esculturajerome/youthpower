import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Container from "./components/container";
import Nav from "./components/navigation";
import Gallery from "./components/gallery";

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
        {/* <Gallery galleryImages={this.state.images} /> */}
        <Router>
          <Container />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

// const { isOpen } = this.state;
{
  /* <ContentScreen postData={posts} /> */
}
{
  /* {!isOpen && <RecentActivities postData={posts} />} */
}
{
  /* {!isOpen && <LandingScreen onClick={this.toggleLogin} />} */
}
{
  /* {isOpen && <ListPosts />} */
}
{
  /* <Nav />
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul> */
}

{
  /* <Login /> */
}
{
  /* <LandingPage />
      <RecentActivities />
      <DonationSection />
      <LearnMore />
      <Footer /> */
}
