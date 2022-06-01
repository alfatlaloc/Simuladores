import "../../../Styles/Teoria.sass";
import BotonRegresar from "../../Common/BotonRegresar";
import formulaLarga2 from "../../../img/formulaLarga2.png";
import formula_mazcla_1 from "../../../img/formula_mazcla_con_utilidad.png";

import { useEffect } from "react";
import t6 from "../../../img/tablas/tabla6.png";
import t7 from "../../../img/tablas/tabla7.png";
import t8 from "../../../img/tablas/tabla8.png";
import t9 from "../../../img/tablas/tabla9.png";
import t10 from "../../../img/tablas/tabla10.png";
import t11 from "../../../img/tablas/tabla11.png";
import t12 from "../../../img/tablas/tabla12.png";

const PuntoEquilibrioOperacionalMultiplesProductos = () => {
  useEffect(() => {
    if (window.location.href.endsWith("#subindice4")) {
      document.getElementById("subindice4")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  return (
    <section className="textosEncuadre">
      <BotonRegresar />
      <h1 className="mobileH1" id="indice2">
        1.2 Modelo matemático del punto de equilibrio con multiproductos (mezcla
        de dos o más productos)
      </h1>
      <div>
        <p>
          Lo más común es encontrar empresas que venden más de dos tipos de
          productos, si ese es el caso, podemos calcular el punto de equilibrio
          de la mezcla sin utilidad y con utilidad.{" "}
        </p>
        <h4 id="subindice3">
          1.2.1 Punto de equilibrio para una mezcla de productos sin utilidad{" "}
        </h4>
        <div className="teoriaSection">
          <p>
            Continuando con el ejemplo de las hamburguesas, supongamos que ahora
            venderemos hamburguesas sencillas y hamburguesas hawaianas. Del
            total de las hamburguesas vendidas al mes se estima que el 20% son
            sencillas y el 80% son hawaianas.
          </p>

          <h5>Tabla 6. Relación de costos fijos mensuales</h5>

          <img className="max-width-1000 mb-5" src={t6} alt="" />
          <h5>Tabla 7. Información del producto 1 (hamburguesa sencilla) </h5>
          <img className="max-width-1000 mb-5" src={t7} alt="" />
          <h5>Tabla 8. Información del producto 2 (hamburguesa hawaiana) </h5>
          <img className="max-width-1000 mb-5" src={t8} alt="" />
          <p>
            Para calcular el punto de equilibrio de una mezcla en número de
            unidades y en cantidad de dinero sin utilidad ocuparemos las
            fórmulas contenidas en la tabla 9
          </p>
          <h5 className="mt-4">
            Tabla 9. Fórmula del punto de equilibrio para una mezcla de
            productos sin utilidad
          </h5>
          <img className="max-width-1000 mb-4" src={t9} alt="" />
          <p>
            Para calcular el punto de equilibrio utilizamos la fórmula anterior,
            conocemos los costos fijos y necesitamos calcular el margen de
            contribución ponderado promedio (MCPP), el cual se determina así:
          </p>

          <h5 className="mt-4">
            Tabla 10. Cálculo del margen de contribución ponderado promedio
          </h5>
          <img className="max-width-1000 mt-2 mb-4" src={t10} alt="" />
          <p>
            PE Mezcla = 30,000/24 = 1,250 hamburguesas (incluye tanto sencillas
            como hawaianas). Para saber cuántas sencillas y cuántas hawaianas
            solo hay que multiplicar por su proporción en las ventas:
          </p>
          <p>Hamburguesas sencillas = (1,250) (0.20) = 250</p>
          <p>Hamburguesas hawaianas = (1,250) (0.80) = 1,000</p>
          <p>
            Es decir, el punto de equilibrio se obtiene vendiendo 250
            hamburguesas sencillas y 1,000 hawaianas y recibiendo de esa venta
            $53,750 pesos, así no se gana y no se pierde (Tabla 11).
          </p>
          <p>
            Por cada unidad vendida, por arriba del punto de equilibrio, se
            tendría utilidad; sin embargo, si se vende una cantidad menor que la
            del punto de equilibrio se obtendrá pérdida.
          </p>
          <h5 className="mt-4">
            Tabla 11. Comprobación del punto de equilibrio multiproducto sin
            utilidad
          </h5>
          <img className="max-width-1000 mb-4" src={t11} alt="" />
        </div>
        <h4 id="subindice4">
          1.2.2 Punto de equilibrio para una mezcla de productos con utilidad{" "}
        </h4>
        <div className="teoriaSection">
          <p>
            También podemos calcular el punto de equilibrio, para una mezcla de
            productos, con utilidad utilizando la siguiente fórmula:
          </p>
          <h5 className="mt-4">
            Tabla 12. Fórmula del punto de equilibrio con utilidad para una
            mezcla de productos.
          </h5>
          <img className="max-width-1000" src={formula_mazcla_1} alt="" />
          <p>
            Continuando con nuestro ejemplo y considerando que la empresa desea
            obtener una utilidad de 45,000 pesos mensuales, entonces el punto de
            equilibrio se calcula así:
          </p>

          <img className="max-width-800 mt-4 mb-4" src={formulaLarga2} alt="" />
          <p>
            Para obtener el punto de equilibrio para cada uno de los productos
            de la mezcla, simplemente se multiplica el punto de equilibrio de la
            mezcla, que en nuestro ejemplo son 3,125 unidades por la proporción
            en las ventas totales, obteniéndose los siguientes resultados:
          </p>
          <p>Hamburguesas sencillas = (3,125) (0.20) = 625</p>
          <p>Hamburguesas hawaianas= (3,125) (0.80) = 2,500</p>
          <p>= (2,000) (0.40) = 800</p>
          <p>
            Ahora, comprobemos que con ese volumen de ventas se obtiene una
            utilidad de $45,000 (ver tabla 12).
          </p>
          <h5 className="mt-4">
            Tabla 13. Comprobación del punto de equilibrio multiproducto con
            utilidad
          </h5>
          <img className="max-width-1000 mb-4" src={t12} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PuntoEquilibrioOperacionalMultiplesProductos;
