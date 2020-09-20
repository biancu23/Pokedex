import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonModal from "./PokemonModal";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Pokemon = ({ pokemon }) => {
  //Nombre y Url de cada Pokemon
  const { name, url } = pokemon;

  //State para almacenar la info de cada Pokemon
  const [pokemoninfo, guardarPokemonInfo] = useState([]);

  //State para el modal
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      const pokemones = await axios.get(url);

      //Se almacena toda la informacion del Pokemon
      guardarPokemonInfo(pokemones.data);
    };

    consultarAPI();
    // eslint-disable-next-line
  }, []);

  //Imagenes Pokemon

  let imgpokemon = '';

  if(pokemoninfo.id){
  imgpokemon = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokemoninfo.id}.png`;

  if (pokemoninfo.id > 9) {
    imgpokemon = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${pokemoninfo.id}.png`;
  }

  if (pokemoninfo.id > 99) {
    imgpokemon = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemoninfo.id}.png`;
  }
  }
  
  //Funcion con el modal centrado
  function MyVerticallyCenteredModal(props) {
    return (

      //Se pasan los state a Pokemon Modal
      <PokemonModal
        pokemoninfo={pokemoninfo}
        props={props}
        imgpokemon={imgpokemon}
      />
    );
  }

  return (
    <Col xs={6} md={4} lg={2} className="px-1 px-md-2">
      <Card className="text-center my-2">
        <Card.Img variant="top" src={imgpokemon} />
        <Card.Body className="px-2">
          <Card.Title className="text-capitalize">{name}</Card.Title>
          <Button variant="danger" onClick={() => setModalShow(true)}>
            Ver Info
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Pokemon;
