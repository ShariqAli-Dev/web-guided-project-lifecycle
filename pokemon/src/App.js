import React from "react";

import data from "../data";
import "./styles.scss";

import Pokemon from "./components/Pokemon";

class App extends React.Component {
  constructor() {
    console.log("app constructor");
    super();
    this.state = {
      pokemon: data,
    };
  }

  componentDidMount() {
    console.log("App mounted");
  }

  render() {
    console.log("app render");
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
