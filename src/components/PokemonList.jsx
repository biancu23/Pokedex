import React from "react";
import Pokemon from "./Pokemon";

import Row from "react-bootstrap/Row";

const PokemonList = ({ listapokemon }) => {
  return (
    <Row >
      {listapokemon.map(pokemon => (
                <Pokemon
                key={pokemon.name}
                pokemon={pokemon}
                />
                
            ))}
    </Row>
  );
};

export default PokemonList;
