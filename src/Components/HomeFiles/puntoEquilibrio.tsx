import { useHistory } from "react-router";
import "../../Styles/Teoria.sass";
import { Table, Card } from "react-bootstrap";

const PuntoEquilibrio = () => {
  const history = useHistory();

  return (
    <section className="textosEncuadre">
      <h1>Indice</h1>
      {/* Indice */}
      <div>
        <ul>
          <li><a href="#indice1">Modelo matemático del punto de equilibrio con un producto</a></li>
          <ul>
              <li><a href="#subindice1">Punto de equilibrio con un producto sin utilidad</a></li>
              <li><a href="#subindice2">Punto de equilibrio con un producto con utilidad</a></li>
          </ul>
          <li><a href="#indice2">Modelo matemático del punto de equilibrio con multiproductos (mezcla de dos o más productos)</a></li>
          <ul>
              <li><a>Punto de equilibrio para una mezcla de productos sin utilidad</a></li>
              <li><a>Punto de equilibrio para una mezcla de productos con utilidad</a></li>
          </ul>
        </ul>
      </div>

      <h1>Análisis del punto de equilibrio operacional </h1>
      <div>
        <p>
            El Punto de equilibrio (PE) es una herramienta que nos da información acerca de cuántas unidades hay que producir y vender para no ganar ni perder; se encuentra cuando:
        </p>
        <p className="CentrarTexto">
            Ingresos = costo total &nbsp;&nbsp;&nbsp;o&nbsp;&nbsp;&nbsp; Ingresos – costo total = 0
        </p>
        <p>
            El punto de equilibrio, tal y como se aprecia en la figura 1 se obtiene cuando las ventas o ingresos son iguales al costo total; es decir, no hay ganancias y tampoco hay pérdidas y solo se recupera el costo total.
        </p>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Figura 1.
                Representación gráfica del punto de equilibrio </Card.Title>
            </Card.Body>
        </Card>
          Para calcular y analizar el punto de equilibrio necesitas conocer los siguientes términos:
        <ul>
          <li><a href="glosario#CV">Costos y gastos variables (CV)</a></li>
          <li><a href="glosario#CVU">Costo variable unitario (CVU)</a></li>
          <li><a href="glosario#CVT">Costo variable total (CVT)</a></li>
          <li><a href="glosario#CF">Costos y gastos fijos (CF)</a></li>
          <li><a href="glosario#CT">Costo total (CT) </a></li>
          <li><a href="glosario#IngresoVentas">Ingreso o ventas</a></li>
          <li><a href="glosario#MCU">Margen de contribución unitario (MCU) o contribución marginal unitaria (CMU) </a></li>
        </ul>
      </div>
      <h3 id="indice1">Modelo matemático del punto de equilibrio con un producto</h3>
      <div>
        <p>Hay empresas que solo venden un tipo de artículo o prestan un servicio en particular, en tal caso podemos calcular el punto de equilibrio sin utilidad y con utilidad.</p>
        <h4 id="subindice1">Punto de equilibrio con un producto sin utilidad</h4>
          <div>
            <p>Supongamos que queremos saber cuántas hamburguesas tendríamos que vender en un lapso de un mes para no ganar ni perder. Tenemos los siguientes datos (tablas 1 y 2): </p>
            <h5>Tabla 1. Costos fijos mensuales </h5>
            <Tabla1 />
            <h5>Tabla 2. Datos producto 1 (hamburguesas sencillas) </h5>
            <Tabla2 />
            <p>Para calcular el Punto de equilibrio en número de unidades y en cantidad de dinero sin utilidad ocuparemos las fórmulas contenidas en la tabla 3.</p>
          </div>
        <h4 id="subindice2">Punto de equilibrio con un producto con utilidad</h4>
          <div>
            <p></p>
          </div>
      </div>
      <h3 id="indice2">Modelo matemático del punto de equilibrio con multiproductos (mezcla de dos o más productos)</h3>
    </section>
  );
};

const Tabla1 = () => {
    return (
        <Table striped bordered hover size="sm smallFont">
            <thead>
              <tr>
                <th>Costos Fijos Mensuales</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th>Renta</th>
                <th>$ 10,000.00</th>
              </tr>
              <tr>
                <th>Sueldos</th>
                <th>$ 18,000.00</th>
              </tr>
              <tr>
                <th>Productos de limpieza</th>
                <th>$ 1,000.00</th>
              </tr>
              <tr>
                <th>Servicios</th>
                <th>$ 1,000.00</th>
              </tr>
              <tr>
                <th>Total</th>
                <th>$ 30,000.00</th>
              </tr>
            </tbody>
        </Table>
    );
};
const Tabla2 = () => {
    return (
        <Table striped bordered hover size="sm smallFont">
            <thead>
            <tr>
                <th>Hamburguesa sencilla</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Precio de venta unitario (P)</th>
                <th>$ 35.00</th>
            </tr>
            <tr>
                <th>Costo variable unitario (CVU) </th>
                <th>$ 15.00</th>
            </tr>
            <tr>
                <th>Carne</th>
                <th>$ 7.00</th>
                <th></th>
            </tr>
            <tr>
                <th>Pan</th>
                <th>$ 4.00</th>
                <th></th>
            </tr>
            <tr>
                <th>Gas</th>
                <th>$ 2.00</th>
                <th></th>
            </tr>
            <tr>
                <th>Varios</th>
                <th>$ 2.00</th>
                <th></th>
            </tr>
            <tr>
                <th>Margen de contribución unitario (MCU) </th>
                <th>$ 20.00</th>
            </tr>
            </tbody>
        </Table>
    );
};
export default PuntoEquilibrio;