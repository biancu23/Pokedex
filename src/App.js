import React, { useState, useEffect } from "react";
import axios from 'axios'

import PokemonList from "./components/PokemonList";

//Import de Componentes de Bootstrap React
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

//Import de Imagenes
import Pokeball from "./pokeball.png";


function App() {

  //state para almacenar los pokemon obtenidas desde la api
  //se inicia como un arreglo vacio
  //Se almacena el resultado en listapokemon y se pasa a PokemonList
  const [listapokemon, guardarListaPokemon] = useState([]);

  const [load, setLoad] = useState("true");

  useEffect(() => {
    

    const consultarAPI = async () => {
      
      const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=156`;

      const pokemones = await axios.get(url);

      //toma los pokemon desde la api y los almacena en el state con guardarListaPokemon
      guardarListaPokemon(pokemones.data.results);

    };
    
    consultarAPI();
    
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 4000);


  return (
    <Container fluid>
      
      <Row>
        <Col sm={12} className="bg-danger p-3 text-center">
          <h1> <Image src={Pokeball} rounded /> Pokedex 2.0 </h1>
        </Col>
      </Row>
      {load ? (
        <div className="d-flex justify-content-center pt-5 " >
        <div className="spinner-border" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
      ) : (
        <PokemonList
        listapokemon={listapokemon}
        />
      )}
      
    </Container>
  );
}

export default App;
