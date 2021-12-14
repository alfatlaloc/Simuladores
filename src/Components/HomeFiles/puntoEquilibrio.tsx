import { useHistory } from "react-router";
import "../../Styles/Teoria.sass";


const PuntoEquilibrio = () => {
  const history = useHistory();

  return (
    <section className="textosEncuadre">
      <h1>Contenido</h1>
      {/* Indice */}
      <div className="NoPuntear">
        <ul>
          <li><a onClick={() => {history.push("/teoriaPuntoEq-1");}}>
              1 Punto de equilibrio operacional
              </a>
          </li>
          <ul>
            <li><a onClick={() => {history.push("/teoriaPuntoEq-1-1#indice1");}}>1.1 Modelo matemático del punto de equilibrio con un producto</a></li>
            <ul>
                <li><a onClick={() => {history.push("/teoriaPuntoEq-1-1#subindice1");}}>1.1.1 Punto de equilibrio con un producto sin utilidad</a></li>
                <li><a onClick={() => {history.push("/teoriaPuntoEq-1-1#subindice2");}}>1.1.2 Punto de equilibrio con un producto con utilidad</a></li>
            </ul>
            <li><a onClick={() => {history.push("/teoriaPuntoEq-1-2");}}>1.2 Modelo matemático del punto de equilibrio con multiproductos (mezcla de dos o más productos)</a></li>
            <ul>
                <li><a>1.2.1 Punto de equilibrio para una mezcla de productos sin utilidad</a></li>
                <li><a>1.2.2 Punto de equilibrio para una mezcla de productos con utilidad</a></li>
            </ul>
          </ul>
        </ul>
      </div>
    </section>
  );
};
export default PuntoEquilibrio;