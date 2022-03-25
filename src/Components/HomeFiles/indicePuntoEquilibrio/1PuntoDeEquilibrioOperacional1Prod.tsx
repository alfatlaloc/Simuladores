import "../../../Styles/Teoria.sass";
import formula1 from "../../../img/Tabla3Imagen1.png";
import formula2 from "../../../img/Tabla3Imagen2.png";
import { Table, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import puntoA from "../../../img/puntoA.png";
import puntoB from "../../../img/puntoB.png";
import formula3 from "../../../img/teoria1-2.png";
import BotonRegresar from "../../Common/BotonRegresar";

import t1 from "../../../img/tablas/tabla1.png";
import t2 from "../../../img/tablas/tabla2.png";
import t3 from "../../../img/tablas/tabla3.png";
import t4 from "../../../img/tablas/tabla4.png";
import t5 from "../../../img/tablas/tabla5.png";

import g2 from "../../../img/tablas/grafica2_2.png";
import { useEffect } from "react";

const PuntoEquilibrioOperacional1Producto = () => {
  useEffect(() => {
    if (window.location.href.endsWith("#subindice2")) {
      document.getElementById("subindice2")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  return (
    <section className="textosEncuadre">
      <BotonRegresar />
      <h2 className="mobileH1" id="indice1">
        Modelo matemático del punto de equilibrio con un producto
      </h2>
      <div>
        <p>
          Hay empresas que solo venden un tipo de artículo o prestan un servicio
          en particular, en tal caso podemos calcular el punto de equilibrio sin
          utilidad y con utilidad.
        </p>
        <h4 id="subindice1">
          I. Punto de equilibrio con un producto sin utilidad
        </h4>
        <div className="teoriaSection">
          <p>
            Supongamos que queremos saber cuántas hamburguesas tendríamos que
            vender en un lapso de un mes para no ganar ni perder. Tenemos los
            siguientes datos (tablas 1 y 2):{" "}
          </p>
          <h5>Tabla 1. Costos fijos mensuales </h5>
          <br />
          <img className="max-width-1000" src={t1} alt="" />
          <h5 className="mt-5">
            Tabla 2. Datos producto 1 (hamburguesas sencillas){" "}
          </h5>
          <br />
          <img className="max-width-1000" src={t2} alt="" />
          <p className="mt-5">
            Para calcular el Punto de equilibrio en número de unidades y en
            cantidad de dinero sin utilidad ocuparemos las fórmulas contenidas
            en la tabla 3.
          </p>
          <h5>
            Tabla 3. Fórmulas del punto de equilibrio para un producto sin
            utilidad{" "}
          </h5>
          <br />
          <img className="max-width-1000" src={t3} alt="" />
          <p className="mt-5">
            Sustituyendo los datos en las fórmulas tenemos:
          </p>
          <ol type="I">
            <li>Punto de equilibrio en número de unidades</li>
            <img className="max-width-500 mt-3" src={puntoA} alt="" />

            <li className="mt-5">
              Punto de equilibrio en ingresos; es decir, la cantidad de dinero
              que se recibe por concepto de ventas:{" "}
            </li>
            <img className="max-width-500 mt-3" src={puntoB} alt="" />
          </ol>
          <p>
            Entonces, el punto de equilibrio se alcanza al vender 1,500
            hamburguesas recibiendo por esa venta $52,500 pesos{" "}
          </p>
          <p>
            <b>
              Conclusión: Al vender 1,500 hamburguesas solamente estaríamos
              recuperando el costo total pero no estaríamos ganando.
            </b>{" "}
            Comprobémoslo:
          </p>
          <p className="CentrarTexto">I = CT</p>
          <p className="CentrarTexto">(Q)(P) = CF + CVU (Q)</p>
          <p className="CentrarTexto">(1,500)(35) = 30,000 + (15)(1,500)</p>
          <p className="CentrarTexto">52,500 = 52,500</p>

          <h5 className="mt-5">
            Tabla 4. Información para graficar el punto de equilibrio{" "}
          </h5>
          <img className="max-width-1000 mt-3" src={t4} alt="" />
          <br />
          <section className="leftAlign mt-5">
            Para realizar la gráfica del punto de equilibrio se necesita de:
            <ol type="1">
              <li>Cantidad "Q"</li>
              <li>Costo fijo</li>
              <li>Costo total</li>
              <li>Ingresos o ventas</li>
            </ol>
          </section>
          <img className="max-width-600 mt-3" src={g2} alt="" />
        </div>
        <section id="subindice2">
          <h4 className="mt-5">
            II. Punto de equilibrio con un producto con utilidad
          </h4>
          <div className="teoriaSection">
            <p>
              También podemos calcular el punto de equilibrio con utilidad.
              Continuando con nuestro ejemplo (venta de hamburguesas sencillas)
              y considerando que se desea una utilidad de $40,000 mensuales,
              entonces el punto de equilibrio se calcula así:{" "}
            </p>
            <img className="max-width-1000 mb-4" src={formula3} alt="" />
            <br />
            <p>
              Con la venta de 3,500 hamburguesas al mes se tendría la utilidad
              deseada, tal y como se puede observar en la siguiente tabla.
            </p>
            <h5>Tabla 5. Comprobación del punto de equilibrio con utilidad</h5>
            <img className="max-width-800 mt-4" src={t5} alt="" />
            <p>
              Lo que significa que al vender 3,500 hamburguesas al mes se
              estaría recuperando el costo total y quedaría la utilidad deseada
              que es de $40,000.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PuntoEquilibrioOperacional1Producto;
