import React, { Component } from "react";

class resultComponent extends Component {
  render() {
    const { result } = this.props;
    return <div>{result}</div>;
  }
}

export default resultComponent;
