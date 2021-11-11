import { Button, Carousel, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { Texto } from "./HomeFiles/textConsts";
import { ImEnter } from "react-icons/im";
import { GiStairsGoal } from "react-icons/gi";
import whiteBack from "../img/whiteBackground.png";

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
    <Carousel className="carrusel" variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 imgC"
          src={whiteBack}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Introducción</h3>
          <p>{Texto.introduccion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgC"
          src="https://fondosmil.com/fondo/17538.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvenida</h3>
          <p>{Texto.bienvenida}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 imgC" src={whiteBack} alt="Third slide" />

        <Carousel.Caption>
          <h3>Objetivo</h3>
          <GiStairsGoal size="2.5em" />
          <p>{Texto.objetivoAprendizaje}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imgC" src={whiteBack} alt="Third slide" />

        <Carousel.Caption>
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
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 imgC" src={whiteBack} alt="Third slide" />

        <Carousel.Caption>
          <h4>Evaluación</h4>
          La evaluación de los aprendizajes se llevará a cabo como se muestra en
          la siguiente tabla: <TablaEvaluacion />
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

      <Card className="text-center tarjeta">
        <Card.Header className="cardHeader">Punto de equilibrio</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button
            className="buttonPrimary m-2"
            onClick={() => {
              history.push("tabla");
            }}
          >
            <ImEnter />
          </Button>
        </Card.Body>
      </Card>

      <Card className="text-center tarjeta">
        <Card.Header className="cardHeader">Glosario</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button
            className="buttonPrimary m-2"
            onClick={() => {
              history.push("instrucciones");
            }}
          >
            <ImEnter />
          </Button>
        </Card.Body>
      </Card>

      <Card className="text-center tarjeta">
        <Card.Header className="cardHeader">
          Actividades de aprendizaje
        </Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button
            className="buttonPrimary m-2"
            onClick={() => {
              history.push("simulador");
            }}
          >
            <ImEnter />
          </Button>
        </Card.Body>
      </Card>
      <Card className="text-center tarjeta">
        <Card.Header className="cardHeader">Referencias</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button
            className="buttonPrimary m-2"
            onClick={() => {
              history.push("simulador");
            }}
          >
            <ImEnter />
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
