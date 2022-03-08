import { Button, Carousel, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { Texto } from "./HomeFiles/textConsts";
import { ImEnter } from "react-icons/im";
import { GiStairsGoal } from "react-icons/gi";
import whiteBack from "../img/whiteBackground.png";

import intrd from "../img/Carrusel/introduccion.svg";
import bienv from "../img/Carrusel/bienvenida.svg";
import obj from "../img/Carrusel/objetivo.svg";
import meto from "../img/Carrusel/metodologia.svg";
import evalu from "../img/Carrusel/eval.svg";

const TablaEvaluacion = () => {
  return (
    <Table striped bordered hover size="sm smallFont">
      <thead>
        <tr>
          <th>Actividad de aprendizaje</th>
          <th>Evidencia de aprendizaje</th>
          <th>Valor en la evaluación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Actividad 1.</strong> Cálculo del punto de equilibrio para
            un solo producto
          </td>
          <td>
            Reporte con el análisis del punto del equilibrio de tres empresas
            que venden un mismo producto. <br />
            Solución del cuestionario.
          </td>
          <td>5 puntos</td>
        </tr>
        <tr>
          <td>
            <strong>Actividad 2.</strong> Cálculo del punto de equilibrio para
            varios productos (mezcla){" "}
          </td>
          <td>
            Reporte con el análisis del punto de equilibrio de tres empresas que
            venden variedad de productos <br />
            Solución del cuestionario.
          </td>
          <td>5 puntos</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <strong>Total</strong>
          </td>
          <td>10 puntos</td>
        </tr>
      </tbody>
    </Table>
  );
};
const Carrusel = () => {
  const history = useHistory();
  return (
    <Carousel variant="dark" wrap fade>
      <Carousel.Item>
        <img
          className="d-block w-100 imgC"
          src={whiteBack}
          alt="Second slide"
        />

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
              <h3>Metología</h3>
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
              La evaluación de los aprendizajes se llevará a cabo como se
              muestra en la siguiente tabla: <TablaEvaluacion />

            <img alt="recurso1" className="carruselIMGEval" src={evalu} />
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
            <Card.Text className="textoTrjetas">
              Teoria sobre el punto de equilibrio.
            </Card.Text>
            <Button
              className="buttonPrimary m-2"
              onClick={() => {
                history.push("teoriaPuntoEq");
              }}
            >
              <ImEnter />
            </Button>
          </Card.Body>
        </Card>

        <Card className="text-center tarjeta">
          <Card.Header className="cardHeader">Glosario</Card.Header>
          <Card.Body>
            <Card.Text className="textoTrjetas">
              Significados de términos que se consideran importantes para el
              aprendizaje del tema.
            </Card.Text>
            <Button
              className="buttonPrimary m-2"
              onClick={() => {
                history.push("glosario");
              }}
            >
              <ImEnter />
            </Button>
          </Card.Body>
        </Card>

        <Card className="text-center tarjeta">
          <Card.Header className="cardHeader">Práctica</Card.Header>
          <Card.Body>
            <Card.Text className="textoTrjetas">
              Definición de las actividades de aprendizaje que tienen valor para
              la evaluación.
            </Card.Text>
            <Button
              className="buttonPrimary m-2"
              onClick={() => {
                history.push("practica");
              }}
            >
              <ImEnter />
            </Button>
          </Card.Body>
        </Card>

        <Card className="text-center tarjeta">
          <Card.Header className="cardHeader">Referencias</Card.Header>
          <Card.Body>
            <Card.Text className="textoTrjetas">
              Fuentes de consulta utilizadas como base para el desarrollo de los
              temas.
            </Card.Text>
            <Button
              className="buttonPrimary m-2"
              onClick={() => {
                history.push("referencias");
              }}
            >
              <ImEnter />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
