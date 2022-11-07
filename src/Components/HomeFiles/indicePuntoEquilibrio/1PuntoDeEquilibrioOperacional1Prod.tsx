import "../../../Styles/Teoria.sass";
import puntoA from "../../../img/puntoA.png";
import puntoB from "../../../img/puntoB.png";
import formula3 from "../../../img/teoria1-2.png";
import BotonRegresar from "../../Common/BotonRegresar";

import t1 from "../../../img/tablas/tabla1.png";
import t2 from "../../../img/tablas/tabla2.png";
import t3 from "../../../img/tablas/tabla3.png";
import t4 from "../../../img/tablas/tabla4.png";
import t5 from "../../../img/tablas/tabla5.png";

import f4 from "../../../img/tablas/figura4.png";

import g2 from "../../../img/tablas/grafica2_2.png";
import { useEffect } from "react";
import BotonSiguiente from "../../Common/BotonSiguiente";

const PuntoEquilibrioOperacional1Producto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!window.location.href.includes("#")) return;
    let tokens = window.location.href.split("#");
    let id = tokens[tokens.length - 1];
    let element = document.getElementById(id);

    if (element) {
      window.scroll({
        top: element.getBoundingClientRect().y - 100,
        left: 0,
        behavior: "smooth",
      });
    }
  });

  return (
    <section className="textosEncuadre">
      <BotonRegresar />
      <BotonSiguiente link={"/teoriaPuntoEq-1-2#indice2"} />
      <h2 className="mobileH1" id="indice1">
        1.1 Modelo matemático del punto de equilibrio con un producto
      </h2>
      <div>
        <p>
          Hay empresas que solo venden un tipo de artículo o prestan un servicio en particular, en tal caso podemos
          calcular el punto de equilibrio sin utilidad y con utilidad.
        </p>
        <h4 id="subindice1">1.1.1 Punto de equilibrio con un producto sin utilidad</h4>
        <div className="teoriaSection">
          <p>
            Supongamos que queremos saber cuántas hamburguesas tendríamos que vender en un lapso de un mes para no ganar
            ni perder. Tenemos los siguientes datos (tablas 1 y 2):{" "}
          </p>
          <i>Tabla 1. Costos fijos mensuales </i>
          <br />
          <img className="max-width-1000" src={t1} alt="" />
          <br />
          <div className="fuente">Fuente: Hernández, J., Rodríguez, E. & Jiménez, Y. (2022)</div>
          <br />
          <i className="mt-5">Tabla 2. Datos del producto 1 (hamburguesa sencilla) </i>
          <br />
          <img className="max-width-1000" src={t2} alt="" />
          <br />
          <div className="fuente">Fuente: Hernández, J., Rodríguez, E. & Jiménez, Y. (2022)</div>
          <p className="mt-5">
            Para calcular el punto de equilibrio en número de unidades y en cantidad de dinero sin utilidad ocuparemos
            las fórmulas contenidas en la figura 2.
          </p>
          <i>Figura 2. Fórmulas del punto de equilibrio para un producto sin utilidad </i>
          <br />
          <img className="max-width-1000" src={t3} alt="" />
          <br />
          <div className="fuente">Fuente: Hernández, J., Rodríguez, E. & Jiménez, Y. (2022)</div>
          <p className="mt-5">Sustituyendo los datos en las fórmulas tenemos:</p>
          <ol type="I">
            <li>Punto de equilibrio en número de unidades</li>
            <img className="max-width-500 mt-3" src={puntoA} alt="" />

            <li className="mt-5">
              Punto de equilibrio en ingresos; es decir, la cantidad de dinero que se recibe por concepto de ventas:{" "}
            </li>
            <img className="max-width-500 mt-3" src={puntoB} alt="" />
          </ol>
          <p>
            Entonces, el punto de equilibrio se alcanza al vender 1,500 hamburguesas recibiendo por esa venta $52,500
            pesos{" "}
          </p>
          <p>
            <b>
              Conclusión: Al vender 1,500 hamburguesas solamente estaríamos recuperando el costo total, pero no
              estaríamos ganando.
            </b>{" "}
            Comprobémoslo:
          </p>
          <p className="CentrarTexto">I = CT</p>
          <p className="CentrarTexto">(Q)(P) = CF + CVU (Q)</p>
          <p className="CentrarTexto">(1,500)(35) = 30,000 + (15)(1,500)</p>
          <p className="CentrarTexto">52,500 = 52,500</p>
          <br />
          <p>
            Ahora realicemos la gráfica del punto de equilibrio, para lo cual necesitamos construir una tabla que nos
            oriente (ver tabla 3).
          </p>
          <i className="mt-5">Tabla 3. Información para graficar el punto de equilibrio </i>
          <br />
          <img className="max-width-1000 mt-3" src={t4} alt="" />
          <br />
          <div className="fuente">Fuente: Hernández, J., Rodríguez, E. & Jiménez, Y. (2022)</div>
          <br />
          <section className="leftAlign mt-5">
            Para realizar la gráfica del punto de equilibrio necesitamos los siguientes datos:
            <ol type="1">
              <li>Cantidad (Q)</li>
              <li>Costo fijo (CF)</li>
              <li>Costo total (CT)</li>
              <li>Ingresos o ventas (I)</li>
            </ol>
            Con base en la información contenida en la tabla 3, la gráfica del punto de equilibrio queda tal y como se
          muestra en la figura 3.
          </section>
          
          <br/>
          <i className="mt-4">Figura 3. Gráfica del punto de equilibrio (Hamburguesas sencillas)</i>
          <br/>
          <img className="max-width-600 mt-3" src={g2} alt="" />
          <br />
          <div className="fuente">Fuente: Hernández, J., Rodríguez, E. & Jiménez, Y. (2022)</div>
        </div>
        <section id="subindice2">
          <h4 className="mt-5">1.1.2 Punto de equilibrio con un producto con utilidad</h4>
          <div className="teoriaSection">
            <p>
              También podemos calcular el punto de equilibrio con utilidad utilizando la fórmula que se muestra en la
              figura 4.
            </p>
            <i className="mt-5">Figura 4. Fórmulas del punto de equilibrio para un producto con utilidad. </i>
            <br />
            <img className="max-width-800 mt-4" src={f4} alt="" />
            <br />
            <div className="fuente">Fuente: Hernández, J., Rodríguez, E. & Jiménez, Y. (2022)</div>
            <br />
            <p>
              Continuando con nuestro ejemplo (venta de hamburguesas sencillas) y considerando que se desea una utilidad
              de $40,000 mensuales, entonces el punto de equilibrio se calcula así:{" "}
            </p>
            <img className="max-width-1000 mb-4" src={formula3} alt="" />
            <br />
            <p>
              Con la venta de 3,500 hamburguesas al mes se tendría la utilidad deseada, tal y como se puede observar en
              la tabla 4.
            </p>
            <i>Tabla 4. Comprobación del punto de equilibrio con utilidad</i>
            <br />
            <img className="max-width-800 mt-4" src={t5} alt="" />
            <br />
            <div className="fuente">Fuente: Hernández, J., Rodríguez, E. & Jiménez, Y. (2022)</div>
            <br />
            <p>
              Lo que significa que al vender 3,500 hamburguesas al mes se estaría recuperando el costo total y quedaría
              la utilidad deseada que es de $40,000.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PuntoEquilibrioOperacional1Producto;
