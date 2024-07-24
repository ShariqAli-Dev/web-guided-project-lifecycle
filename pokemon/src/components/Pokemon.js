import React from "react";
import Poki from "./Poki";

class Pokemon extends React.Component {
  constructor() {
    super();
    console.log("Pokemon constructor: ");
  }

  componentDidMount() {
    console.log("Pokemon mounted");
  }

  render() {
    console.log("pokemon renders");
    return (
      <>
        {this.props.pokemon.map((pokemon) => (
          <Poki key={pokemon.id} pokemon={pokemon} />
        ))}
      </>
    );
  }
}

export default Pokemon;
