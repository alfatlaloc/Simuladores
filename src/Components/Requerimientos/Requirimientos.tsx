import BotonHome from "../Common/BotonHome";
import supported from "../../img/supported.jpeg";
const Requerimientos = () => {
  return (
    <div className="pagina">
      <BotonHome />
      <h2>Requerimientos</h2>

      <ul className="listaRequerimientos listaElementos">
        <li>
          <strong>Conexión a internet</strong>
        </li>
        <li>
          <strong>Navegador WEB</strong>
          <ul className="listaElementos">
            <li>Chrome 49 (release: 2016/3/2) </li>
            <li>Firefox 50 (release: 2016/11/15)</li>
            <li>Safari 10 (release: 2016/9/20)</li>
            <li>IE 9 (release: 2011/3/14)</li>
            <li>Edge 14 (release: 2016/2/18)</li>
            <li>Opera (Sin probar aún)</li>
          </ul>
        </li>
        <li>
          <strong>Mouse</strong> (opcional)
        </li>
      </ul>
      <br/>
      <img
        src={supported}
        alt="Navegadores soportados"
        className="maxWidthImg"
      />
      <p className="m-2">
        <small>
          * La aplicación puede ejecutarse en cualquier otro navegador que soporte
          React 17, aunque su comportamieto puede variar y en el peor caso
          presentar fallos *
        </small>
      </p>
    </div>
  );
};

export default Requerimientos;
