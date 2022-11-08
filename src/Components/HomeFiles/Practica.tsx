import { useEffect } from "react";
import { Button } from "react-bootstrap";
import pdf from "../../docs/practica.pdf";

const Practica = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  
  return (
    <section className="pagina">
      <h1>Práctica</h1>
      <p>
        Después de revisar el contenido temático y utilizando este simulador del
        punto de equilibrio, realiza la siguiente práctica:
      </p>
      <Button type="button" className="m-1 buttonPrimary">
        <a className="decoNone" href={pdf} download="practica.pdf" rel="noreferrer" target="_blank">
          Descargar
        </a>
      </Button>
    </section>
  );
};

export default Practica;
