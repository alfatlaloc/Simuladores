import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="pagina">
      <h1>Home</h1>
      <p>
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
      <p></p>
      <Button
        className="buttonPrimary m-2"
        onClick={() => {
          history.push("tabla");
        }}
      >
        Tablas
      </Button>
      <br />

      <Button
        className="buttonPrimary m-2"
        onClick={() => {
          history.push("instrucciones");
        }}
      >
        Instrucciones
      </Button>

      <br />

      <Button
        className="buttonPrimary m-2"
        onClick={() => {
          history.push("simulador");
        }}
      >
        Simulador
      </Button>
    </div>
  );
};

export default Home;
