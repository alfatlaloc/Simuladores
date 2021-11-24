import { useHistory } from "react-router";

const Glosario = () => {
  const history = useHistory();

  return (
    <section className="textosEncuadre">
      <h1>Glosario</h1>
        <ul>
            <li id="CV">Costos y gastos variables (CV)</li>
                <p>Son aquellos que están relacionados con el volumen de producción y ventas, tal es el caso de la materia prima, la mano de obra a destajo, y las comisiones por unidad vendida, por mencionar algunos. Lo que significa que siempre que haya producción y ventas habrá costos y gastos variables, si no hay producción y ventas sencillamente no hay costos ni gastos variables. </p>
            <li id="CVU">Costo variable unitario (CVU)</li>
                <p>Es el costo variable de producir y vender una unidad. </p>
            <li id="CVT">Costo variable total (CVT)</li>
                <p>Es el costo variable de producir y vender “Q” número de unidades, y se obtiene multiplicando la cantidad de unidades producidas y/o vendidas por su costo variable unitario; es decir C.V.T = (Q) (CVU). </p>
            <li id="CF">Costos y gastos fijos (CF)</li>
                <p>Son los costos y gastos constantes, no están en función del volumen de producción ni de ventas; es decir, se generan haya o no producción y ventas. Algunos ejemplos son: sueldos fijos, renta, pago de intereses, depreciación de la maquinaria, etc. </p>
            <li id="CT">Costo total (CT)</li>
                <p>Es la suma de los costos fijos más el costo variable total; es decir:</p>
                <p className="CentrarTexto">CT = CF + CVU (Q) </p>
            <li id="IngresoVentas">Ingreso o ventas</li>
                <p>Se calcula multiplicando el número de unidades vendidas por su precio de venta unitario. </p>
            <li id="MCU">Margen de contribución unitario (MCU) o contribución marginal unitaria (CMU)</li>
                <p>Es el resultado que queda de restar al precio de venta unitario (P) el costo variable unitario (CVU).</p>
        </ul>
    </section>
  );
};

export default Glosario;