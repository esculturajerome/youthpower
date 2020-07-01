import React, { Component } from "react";
import DisplayContent from "../components/contentDisplay";

class ContentScreen extends Component {
  state = { id: null, title: null, date: null, body: null };

  componentDidMount() {
    const { id } = this.props.location.state;
    const { title } = this.props.location.state;
    const { date } = this.props.location.state;
    const { body } = this.props.location.state;

    this.setState({ id, title, date, body });
  }

  render() {
    const { title, date, body } = this.state;
    return (
      <React.Fragment>
        <DisplayContent title={title} date={date} body={body} />
      </React.Fragment>
    );
  }
}

export default ContentScreen;
