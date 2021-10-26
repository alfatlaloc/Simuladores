import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container, Card } from "react-bootstrap";


const Home = () => {
  const history = useHistory();
  return (
    <Container className="pagina" fluid>
      <h1>Home</h1>
      <p className="lead textoIntro">
        El simulador permite al estudiante aprender de manera práctica, a través
        del descubrimiento y la construcción de situaciones hipotéticas. Un
        simulador tiene la ventaja de permitirle al estudiante desarrollar la
        destreza mental o física a través de su uso y ponerlo en contacto con
        situaciones que pueden ser utilizadas de manera práctica. Si son usados
        en trabajo colaborativo, estimulan el trabajo en equipo al estimular la
        discusión del tema.A través de él, podemos experimentar situaciones
        reales como en el caso del simulador, (prototipo financiero en Excel
        para el cálculo del punto de equilibrio){" "}
      </p>

        <Card className="text-center tarjeta">
            <Card.Header>Tablas</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button className="buttonPrimary m-2"
                        onClick={() => {
                            history.push("tabla");
                        }}>Ir</Button>
            </Card.Body>
        </Card>

        <Card className="text-center tarjeta">
            <Card.Header>Instrucciones</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button className="buttonPrimary m-2"
                        onClick={() => {
                            history.push("instrucciones");
                        }}>Ir</Button>
            </Card.Body>
        </Card>

        <Card className="text-center tarjeta">
            <Card.Header>Simulador</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button className="buttonPrimary m-2"
                        onClick={() => {
                            history.push("simulador");
                        }}>Ir</Button>
            </Card.Body>
        </Card>

    </Container>
  );
};

export default Home;
