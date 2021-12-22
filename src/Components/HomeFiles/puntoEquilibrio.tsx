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
          <li><span onClick={() => {history.push("/teoriaPuntoEq-1");}}>
              1 Punto de equilibrio operacional
              </span>
          </li>
          <ul>
            <li><span onClick={() => {history.push("/teoriaPuntoEq-1-1#indice1");}}>
                1.1 Modelo matemático del punto de equilibrio con un producto</span></li>
            <ul>
                <li><span onClick={() => {history.push("/teoriaPuntoEq-1-1#subindice1");}}>
                    1.1.1 Punto de equilibrio con un producto sin utilidad</span></li>
                <li><span onClick={() => {history.push("/teoriaPuntoEq-1-1#subindice2");}}>
                    1.1.2 Punto de equilibrio con un producto con utilidad</span></li>
            </ul>
            <li><span onClick={() => {history.push("/teoriaPuntoEq-1-2#indice2");}}>
                1.2 Modelo matemático del punto de equilibrio con multiproductos (mezcla de dos o más productos)</span></li>
            <ul>
                <li><span onClick={() => {history.push("/teoriaPuntoEq-1-2#subindice3");}}>
                    1.2.1 Punto de equilibrio para una mezcla de productos sin utilidad</span></li>
                <li><span onClick={() => {history.push("/teoriaPuntoEq-1-2#subindice4");}}>
                    1.2.2 Punto de equilibrio para una mezcla de productos con utilidad</span></li>
            </ul>
          </ul>
        </ul>
      </div>
    </section>
  );
};
export default PuntoEquilibrio;