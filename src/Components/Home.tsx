import { Button, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { Texto } from "./HomeFiles/textConsts";
import { GiStairsGoal } from "react-icons/gi";
import whiteBack from "../img/whiteBackground.png";

import intrd from "../img/Carrusel/introduccion.svg";
import bienv from "../img/Carrusel/bienvenida.svg";
import obj from "../img/Carrusel/objetivo.svg";
import meto from "../img/Carrusel/metodologia.svg";
import evalu from "../img/Carrusel/eval.svg";
import practicaImg from "../img/Carrusel/practica.png";

import glosario from "../img/tarjetas/glosario.svg";
import practica from "../img/tarjetas/practica.svg";
import punto from "../img/tarjetas/punto.svg";
import referencias from "../img/tarjetas/referencias.svg";
import rubrica from "../docs/rubrica.docx";

const Carrusel = () => {
  const history = useHistory();
  return (
    <Carousel variant="dark" wrap fade>
      <Carousel.Item>
        <img className="d-block w-100 imgC" src={whiteBack} alt="Second slide" />

        <Carousel.Caption className="carrusel">
          <section className="scrollText carruselScreen">
            <div className="carruselCont">
              <h3>Introducción</h3>
              <p>{Texto.introduccion}</p>
            </div>
            <img alt="recurso1" className="carruselIMG" src={intrd} />
          </section>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imgC" src={whiteBack} alt="First slide" />
        <Carousel.Caption className="carrusel">
          <section className="scrollText carruselScreen">
            <div className="carruselCont">
              <h3>Bienvenida</h3>
              <p>{Texto.bienvenida}</p>
            </div>
            <img alt="recurso1" className="carruselIMG" src={bienv} />
          </section>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imgC" src={whiteBack} alt="Third slide" />
        <Carousel.Caption className="carrusel">
          <section className="scrollText carruselScreen">
            <div className="carruselCont">
              <h3>Objetivo</h3>
              <GiStairsGoal size="2.5em" />
              <p>{Texto.objetivoAprendizaje}</p>
            </div>
            <img alt="recurso1" className="carruselIMG" src={obj} />
          </section>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imgC" src={whiteBack} alt="Third slide" />

        <Carousel.Caption className="carrusel">
          <section className="scrollText carruselScreen">
            <div className="carruselCont">
              <h3>Metodología</h3>
              <p>{Texto.metodologia}</p>
              <Button
                className="buttonSecondary m-2"
                onClick={() => {
                  history.push("/metodologia");
                }}
              >
                Leer más
              </Button>
            </div>
            <img alt="recurso1" className="carruselIMG" src={meto} />
          </section>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imgC" src={whiteBack} alt="Third slide" />

        <Carousel.Caption className="carrusel">
          <section className="scrollText">
            <h4>Evaluación</h4>
            <p>
              La evaluación de los aprendizajes se llevará a cabo como se muestra a continuación y con base en una lista
              de cotejo.
            </p>
            <p>
              <a className="textButton" href={rubrica} download="rubrica.docx" rel="noreferrer" target="_blank">
                Descargar 
              </a>
              {" "}
              lista de cotejo.
            </p>

            <img className="w-100" src={practicaImg} alt="" />
          </section>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
const Home = () => {
  const history = useHistory();
  return (
    <Container className="pagina" fluid>
      <Carrusel />

      <div className="tarjetas">
        <Card className="text-center tarjeta">
          <Card.Header className="cardHeader">Punto de equilibrio</Card.Header>
          <Card.Body>
            <Card.Text className="textoTrjetas">Teoria sobre el punto de equilibrio.</Card.Text>
            <Button
              className="buttonPrimary m-2 transparente"
              onClick={() => {
                history.push("teoriaPuntoEq");
              }}
            >
              <img alt="Punto de equilibrio" width="50px" height="50px" src={punto} />
            </Button>
          </Card.Body>
        </Card>

        <Card className="text-center tarjeta">
          <Card.Header className="cardHeader">Glosario</Card.Header>
          <Card.Body>
            <Card.Text className="textoTrjetas">
              Significados de términos que se consideran importantes para el aprendizaje del tema.
            </Card.Text>
            <Button
              className="buttonPrimary m-2 transparente"
              onClick={() => {
                history.push("glosario");
              }}
            >
              <img alt="Glosario" width="50px" height="50px" src={glosario} />
            </Button>
          </Card.Body>
        </Card>

        <Card className="text-center tarjeta">
          <Card.Header className="cardHeader">Práctica</Card.Header>
          <Card.Body>
            <Card.Text className="textoTrjetas">
              Definición de las actividades de aprendizaje que tienen valor para la evaluación.
            </Card.Text>
            <Button
              className="buttonPrimary m-2 transparente"
              onClick={() => {
                history.push("practica");
              }}
            >
              <img alt="Glosario" width="50px" height="50px" src={practica} />
            </Button>
          </Card.Body>
        </Card>

        <Card className="text-center tarjeta">
          <Card.Header className="cardHeader">Referencias</Card.Header>
          <Card.Body>
            <Card.Text className="textoTrjetas">
              Fuentes de consulta utilizadas como base para el desarrollo de los temas.
            </Card.Text>
            <Button
              className="buttonPrimary m-2 transparente"
              onClick={() => {
                history.push("referencias");
              }}
            >
              <img alt="Referencias" width="50px" height="50px" src={referencias} />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
