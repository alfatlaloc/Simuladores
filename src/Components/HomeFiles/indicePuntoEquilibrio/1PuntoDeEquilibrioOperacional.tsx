import { useHistory } from "react-router";
import "../../../Styles/Teoria.sass";

import grafica1 from "../../../img/grafica1PuntoEquilibrio.png";
import BotonRegresar from "../../Common/BotonRegresar";
import BotonSiguiente from "../../Common/BotonSiguiente";
import { useEffect } from "react";

const PuntoEquilibrioOperacional = () => {
  const history = useHistory();
  
  return (
    <section className="textosEncuadre">
      <BotonRegresar />
      <BotonSiguiente link="/teoriaPuntoEq-1-1" />
      <h2 className="mobileH1">Punto de equilibrio operacional </h2>
      <div>
        <p className="mt-4">
          El Punto de equilibrio (PE) es una herramienta que nos da información
          acerca de cuántas unidades hay que producir y vender para no ganar ni
          perder; se encuentra cuando:
        </p>
        <p className="CentrarTexto">
          Ingresos = costo total &nbsp;&nbsp;&nbsp;o&nbsp;&nbsp;&nbsp; Ingresos
          – costo total = 0
        </p>
        <p>
          El punto de equilibrio, tal y como se aprecia en la figura 1 se
          obtiene cuando las ventas o ingresos son iguales al costo total; es
          decir, no hay ganancias y tampoco hay pérdidas y solo se recupera el
          costo total.
        </p>
        <section className="teoriaSection mb-4">
          <h5 className="mt-5">
            Figura 1. Representación gráfica del punto de equilibrio
          </h5>
          <img className="max-width-600 mt-4 mb-3" src={grafica1} alt="" />
          <br />
          Fuente: Hernández, J., Rodríguez, E. & Jiménez, Y. (2022).
        </section>

        Para calcular y analizar el punto de equilibrio necesitas conocer los
        siguientes términos:
        <ul>
          <li>
            <span
              onClick={() => {
                history.push("/glosario#CV");
              }}
            >
              Costos y gastos variables (CV)
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/glosario#CVU");
              }}
            >
              Costo variable unitario (CVU)
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/glosario#CVT");
              }}
            >
              Costo variable total (CVT)
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/glosario#CF");
              }}
            >
              Costos y gastos fijos (CF)
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/glosario#CT");
              }}
            >
              Costo total (CT){" "}
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/glosario#IngresoVentas");
              }}
            >
              Ingreso o ventas
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                history.push("/glosario#MCU");
              }}
            >
              Margen de contribución unitario (MCU) o contribución marginal
              unitaria (CMU){" "}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PuntoEquilibrioOperacional;
