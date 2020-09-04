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

  render() {
    return (
      <div>
        <ResultComponent result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
