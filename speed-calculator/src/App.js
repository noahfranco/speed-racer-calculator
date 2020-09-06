import React, { Component } from "react";
import "./App.css";
import KeyPad from "./component/keyPad.js";
import ResultComponent from "./component/resultComponent.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  calcuate() {
    try {
      this.setState({
        result: (eval(this.state.result) || " ") + "",
      });
    } catch (error) {
      this.setState({
        result: error.message,
      });
    }
  }

  reset() {
    this.setState({
      result: "",
    });
  }

  onClick = (button) => {
    if (button === "=") {
      this.calcuate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  }

  render() {
    return (
      <div className="img">
        <ResultComponent result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
