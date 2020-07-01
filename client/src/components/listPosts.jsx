import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import ButtonComponent from "./buttonComponent";

class ListPosts extends Component {
  state = {
    posts: [
      { id: uuidv4(), title: "Post 1" },
      { id: uuidv4(), title: "Post 2" },
      { id: uuidv4(), title: "Post 3" },
    ],
  };
  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <ButtonComponent
          title="Click me"
          className="btn-primary"
          onClick={() => {
            const title = prompt("Enter Post");
            if (title) {
              this.setState((state) => ({
                posts: [...state.posts, { id: uuidv4(), title }],
              }));
            }
          }}
        />

        <TransitionGroup className="login-screen">
          {posts.map(({ id, title }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <div>
                <button
                  className="primary-btn"
                  onClick={() => {
                    this.setState((state) => ({
                      posts: state.posts.filter((post) => post.id !== id),
                    }));
                  }}
                >
                  X
                </button>
                <span>{title}</span>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default ListPosts;
