import { useEffect } from "react";
import BotonRegresar from "../Common/BotonRegresar";

const Glosario = () => {
  useEffect(() => {
    if (window.location.href.includes("#")) {
      let tokens = window.location.href.split("#");
      let id = tokens[tokens.length - 1];
      let element = document.getElementById(id);
      
      if (element) {
        element.className = element.className + "glosarioSelected";
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
  return (
    <section className="textosEncuadre">
      <BotonRegresar />
      <h1>Glosario</h1>
      <ul>
        <li id="CV">
          <strong>Costos y gastos variables (CV)</strong>
          <p>
            Son aquellos que están relacionados con el volumen de producción y
            ventas, tal es el caso de la materia prima, la mano de obra a
            destajo, y las comisiones por unidad vendida, por mencionar algunos.
            Lo que significa que siempre que haya producción y ventas habrá
            costos y gastos variables, si no hay producción y ventas
            sencillamente no hay costos ni gastos variables.{" "}
          </p>
        </li>

        <li id="CVU">
          <strong>Costo variable unitario (CVU)</strong>
          <p>Es el costo variable de producir y vender una unidad. </p>
        </li>

        <li id="CVT">
          <strong>Costo variable total (CVT)</strong>{" "}
          <p>
            Es el costo variable de producir y vender “Q” número de unidades, y
            se obtiene multiplicando la cantidad de unidades producidas y/o
            vendidas por su costo variable unitario; es decir C.V.T = (Q) (CVU).{" "}
          </p>
        </li>

        <li id="CF">
          <strong>Costos y gastos fijos (CF) </strong>
          <p>
            Son los costos y gastos constantes, no están en función del volumen
            de producción ni de ventas; es decir, se generan haya o no
            producción y ventas. Algunos ejemplos son: sueldos fijos, renta,
            pago de intereses, depreciación de la maquinaria, etc.{" "}
          </p>
        </li>

        <li id="CT">
          <strong>Costo total (CT)</strong>{" "}
          <p>
            Es la suma de los costos fijos más el costo variable total; es
            decir: <strong>CT = CF + CVU (Q)</strong>
          </p>
        </li>
        <li id="IngresoVentas">
          <strong>Ingreso o ventas</strong>{" "}
          <p>
            Se calcula multiplicando el número de unidades vendidas por su
            precio de venta unitario.
          </p>
        </li>

        <li id="MCU">
          <strong>
            Margen de contribución unitario (MCU) o contribución marginal
            unitaria.{" "}
          </strong>
          (CMU)
          <p>
            Es el resultado que queda de restar al precio de venta unitario (P)
            el costo variable unitario (CVU).
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Glosario;
