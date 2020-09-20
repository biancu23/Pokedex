import React from "react";

import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";

const PokemonModal = ({ pokemoninfo, props, imgpokemon }) => {
  //Informacion de cada Pokemon
  const { id, name, weight, height, stats, types } = pokemoninfo;

  //Variable para asignarle valores a las habilidades
  let velocidad,
    defensaEspecial,
    ataqueEspecial,
    defensa,
    ataque,
    salud = "";

  //Variable OVR Pokemon
  let statTotal = 0;

  //Verifica si tiene resultados y asigna los valores a cada habilidad
  if (stats) {
    velocidad = stats[0].base_stat;
    defensaEspecial = stats[1].base_stat;
    ataqueEspecial = stats[2].base_stat;
    defensa = stats[3].base_stat;
    ataque = stats[4].base_stat;
    salud = stats[5].base_stat;

    //Calcular el OVR de cada Pokemon
    statTotal = parseFloat(
      (velocidad +
        defensaEspecial +
        ataqueEspecial +
        defensa +
        ataque +
        salud) /
        6
    ).toFixed(2);
  }

  // Extraer tipo de pokemon
  let tipoPrincipal = "";
  let tipoSecundario = "";

  //Cuando tiene los datos de los tipos de pokemon
  if (types) {
    //Cuando solo tiene un tipo
    if (types[0] && !types[1]) {
      tipoPrincipal = types[0].type.name;
    }

    //Cuando tiene dos tipos
    if (types[1] && types[0]) {
      tipoPrincipal = types[1].type.name;
      tipoSecundario = types[0].type.name;
    }
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Image
          style={{ width: "400px" }}
          className="mx-5"
          src={imgpokemon}
          alt={name}
        />
      </Modal.Header>
      <Modal.Body>
        <Row className="align-items-center">
          <Col sm={4}>
            <h5 className="text-capitalize text-center">{name}</h5>
          </Col>
          <Col sm={4}>
            <h5 className="text-capitalize text-center">
              <Badge pill className={tipoPrincipal}>
                {tipoPrincipal}
              </Badge>{" "}
              <Badge pill className={tipoSecundario}>
                {tipoSecundario}
              </Badge>{" "}
            </h5>
          </Col>
          <Col sm={4}>
            <h5 className="text-center">OVR: {statTotal}</h5>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={4}>
            <p>
              <span className="font-weight-bold">ID:</span> {id} <br />
              <span className="font-weight-bold">Peso:</span> {weight / 10} KG
              <br />
              <span className="font-weight-bold">Estatura:</span> {height * 10}{" "}
              CM
              <br />
            </p>
          </Col>
          <Col md={8}>
            <Row className="align-items-center">
              <Col sm={4}>
                <span className="font-weight-bold">Salud:</span>
              </Col>
              <Col sm={8}>
                {salud > 0 && salud <= 25 ? (
                  <ProgressBar
                    now={salud}
                    label={`${salud}`}
                    variant="danger"
                  />
                ) : salud > 25 && salud <= 50 ? (
                  <ProgressBar
                    now={salud}
                    label={`${salud}`}
                    variant="warning"
                  />
                ) : salud > 50 && salud <= 75 ? (
                  <ProgressBar now={salud} label={`${salud}`} variant="info" />
                ) : (
                  <ProgressBar
                    now={salud}
                    label={`${salud}`}
                    variant="success"
                  />
                )}
              </Col>

              <Col sm={4}>
                <span className="font-weight-bold">Velocidad:</span>
              </Col>
              <Col sm={8}>
                {salud > 0 && salud <= 25 ? (
                  <ProgressBar
                    now={velocidad}
                    label={`${velocidad}`}
                    variant="danger"
                  />
                ) : velocidad > 25 && velocidad <= 50 ? (
                  <ProgressBar
                    now={velocidad}
                    label={`${velocidad}`}
                    variant="warning"
                  />
                ) : velocidad > 50 && velocidad <= 75 ? (
                  <ProgressBar
                    now={velocidad}
                    label={`${velocidad}`}
                    variant="info"
                  />
                ) : (
                  <ProgressBar
                    now={velocidad}
                    label={`${velocidad}`}
                    variant="success"
                  />
                )}
              </Col>

              <Col sm={4}>
                <span className="font-weight-bold">Ataque:</span>
              </Col>
              <Col sm={8}>
                {ataque > 0 && ataque <= 25 ? (
                  <ProgressBar
                    now={ataque}
                    label={`${ataque}`}
                    variant="danger"
                  />
                ) : ataque > 25 && ataque <= 50 ? (
                  <ProgressBar
                    now={ataque}
                    label={`${ataque}`}
                    variant="warning"
                  />
                ) : ataque > 50 && ataque <= 75 ? (
                  <ProgressBar
                    now={ataque}
                    label={`${ataque}`}
                    variant="info"
                  />
                ) : (
                  <ProgressBar
                    now={ataque}
                    label={`${ataque}`}
                    variant="success"
                  />
                )}
              </Col>

              <Col sm={4}>
                <span className="font-weight-bold">Defensa:</span>
              </Col>
              <Col sm={8}>
                {defensa > 0 && defensa <= 25 ? (
                  <ProgressBar
                    now={defensa}
                    label={`${defensa}`}
                    variant="danger"
                  />
                ) : defensa > 25 && defensa <= 50 ? (
                  <ProgressBar
                    now={defensa}
                    label={`${defensa}`}
                    variant="warning"
                  />
                ) : defensa > 50 && defensa <= 75 ? (
                  <ProgressBar
                    now={defensa}
                    label={`${defensa}`}
                    variant="info"
                  />
                ) : (
                  <ProgressBar
                    now={defensa}
                    label={`${defensa}`}
                    variant="success"
                  />
                )}
              </Col>

              <Col sm={4}>
                <span className="font-weight-bold">Ataque S:</span>
              </Col>
              <Col sm={8}>
                {ataqueEspecial > 0 && ataqueEspecial <= 25 ? (
                  <ProgressBar
                    now={ataqueEspecial}
                    label={`${ataqueEspecial}`}
                    variant="danger"
                  />
                ) : ataqueEspecial > 25 && ataqueEspecial <= 50 ? (
                  <ProgressBar
                    now={ataqueEspecial}
                    label={`${ataqueEspecial}`}
                    variant="warning"
                  />
                ) : ataqueEspecial > 50 && ataqueEspecial <= 75 ? (
                  <ProgressBar
                    now={ataqueEspecial}
                    label={`${ataqueEspecial}`}
                    variant="info"
                  />
                ) : (
                  <ProgressBar
                    now={ataqueEspecial}
                    label={`${ataqueEspecial}`}
                    variant="success"
                  />
                )}{" "}
              </Col>
              <Col sm={4}>
                <span className="font-weight-bold">Defensa S:</span>
              </Col>
              <Col sm={8}>
                {defensaEspecial > 0 && defensaEspecial <= 25 ? (
                  <ProgressBar
                    now={defensaEspecial}
                    label={`${defensaEspecial}`}
                    variant="danger"
                  />
                ) : defensaEspecial > 25 && defensaEspecial <= 50 ? (
                  <ProgressBar
                    now={defensaEspecial}
                    label={`${defensaEspecial}`}
                    variant="warning"
                  />
                ) : defensaEspecial > 50 && defensaEspecial <= 75 ? (
                  <ProgressBar
                    now={defensaEspecial}
                    label={`${defensaEspecial}`}
                    variant="info"
                  />
                ) : (
                  <ProgressBar
                    now={defensaEspecial}
                    label={`${defensaEspecial}`}
                    variant="success"
                  />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PokemonModal;
