import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContentScreen from "../screens/contentScreen";
import LandingScreen from "../screens/landingScreen";
import LoginScreen from "../screens/loginScreen";

function Container({ location }) {
  return (
    <Wrapper>
      {/* <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
          unmountOnExit
          appear
        > */}
      <section className="route-section">
        <Switch location={location}>
          <Route
            path="/activity/:id/"
            render={(props) => <ContentScreen {...props} />}
          />
          <Route
            path="/about/"
            render={(props) => <ContentScreen {...props} />}
          />
          <Route path="/login" render={() => <LoginScreen />} />
          <Route path="/" exact component={LandingScreen} />
        </Switch>
      </section>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default withRouter(Container);
