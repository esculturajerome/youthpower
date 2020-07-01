import React, { Component } from "react";

class Nav extends Component {
  state = { onScroll: null };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let onScroll = "onScroll";
      if (window.scrollY === 0) {
        onScroll = null;
      }
      this.setState({ onScroll });
    });
  }

  render() {
    const { onClick } = this.props;
    const { onScroll } = this.state;
    return (
      <div className={`navbar ${onScroll}`}>
        <h1>Youth Power</h1>
        <ul className="navButtons">
          <li className="primary-btn" onClick={onClick}>
            Join
          </li>
          <li className="primary-btn">Donate</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
