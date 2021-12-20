import { useHistory } from "react-router";
import "../../../Styles/Teoria.sass";
import formula1 from "../../../img/Tabla3Imagen1.png";
import formula2 from "../../../img/Tabla3Imagen2.png";
import { Table, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import puntoA from "../../../img/puntoA.png";
import puntoB from "../../../img/puntoB.png";
import formula3 from "../../../img/teoria1-2.png";

const PuntoEquilibrioOperacional1Producto = () => {
    const history = useHistory();
    return (
        <section className="textosEncuadre">
            <h1 id="indice1">Modelo matemático del punto de equilibrio con un producto</h1>
            <div>
                <p>Hay empresas que solo venden un tipo de artículo o prestan un servicio en particular, en tal caso
                    podemos calcular el punto de equilibrio sin utilidad y con utilidad.</p>
                <h4 id="subindice1">Punto de equilibrio con un producto sin utilidad</h4>
                <div>
                    <p>Supongamos que queremos saber cuántas hamburguesas tendríamos que vender en un lapso de un mes para no ganar ni perder. Tenemos los siguientes datos (tablas 1 y 2): </p>
                    <h5>Tabla 1. Costos fijos mensuales </h5>
                    <Tabla1 />
                    <h5>Tabla 2. Datos producto 1 (hamburguesas sencillas) </h5>
                    <Tabla2 />
                    <p>Para calcular el Punto de equilibrio en número de unidades y en cantidad de dinero sin utilidad ocuparemos las fórmulas contenidas en la tabla 3.</p>
                    <h5>Tabla 3. Fórmulas del punto de equilibrio para un producto sin utilidad </h5>
                    <Tabla3 />
                    <p>Sustituyendo los dator en las fórmulas tenemos:</p>
                    <ol type="I">
                        <li>Punto de equilibrio en número de unidades</li>
                        <Card style={{ width: '32rem' }} className="Imagenes">
                            <Card.Img variant="top" src={puntoA} />
                        </Card>
                        <li>Punto de equilibrio en ingresos; es decir, la cantidad de dinero que se recibe por concepto de ventas: </li>
                        <Card style={{ width: '18rem' }} className="Imagenes">
                            <Card.Img variant="top" src={puntoB} />
                        </Card>
                    </ol>
                    <p>Entonces, el punto de equilibrio se alcanza al vender 1,500 hamburguesas recibiendo por esa venta $52,500 pesos </p>
                    <p>
                      <b>
                        Conclusión: Al vender 1,500 hamburguesas solamente estaríamos recuperando el costo
                          total pero no estaríamos ganando.</b> Comprobémoslo:
                    </p>
                    <p className="CentrarTexto">
                        I = CT
                    </p>
                    <p className="CentrarTexto">
                        (Q)(P) = CF + CVU (Q)
                    </p>
                    <p className="CentrarTexto">
                        (1,500)(35) = 30,000 + (15)(1,500)
                    </p>
                    <p className="CentrarTexto">
                        52,500 = 52,500
                    </p>
                    Para realizar la gráfica del punto de equilibrio se necesita de:
                    <ol type="a">
                        <li>Punto de equilibrio en número de unidades</li>
                        <li>Punto de equilibrio en ingresos; es decir, la cantidad de dinero que se recibe por concepto de ventas: </li>
                        <ul>
                            <li>Recta del costo fijo</li>
                            <li>Recta del costo total</li>
                            <li>Recta de ingresos o ventas</li>
                        </ul>
                    </ol>
                    <h5>Tabla 4. Información para graficar el punto de equilibrio </h5>
                    <Tabla4 />
                </div>

                <h4 id="subindice2">Punto de equilibrio con un producto con utilidad</h4>
                <div>
                    <p>También podemos calcular el punto de equilibrio con utilidad. Continuando con
                        nuestro ejemplo (venta de hamburguesas sencillas) y considerando que se desea una
                        utilidad de $40,000 mensuales, entonces el punto de equilibrio se calcula así: </p>
                    <Card className="formulaLarga">
                        <Card.Img variant="top" src={formula3} />
                    </Card>
                    <br/>
                    <p>Con la venta de 3,500 hamburguesas al mes se tendría la utilidad deseada, tal y como
                        se puede observar en la siguiente tabla.</p>
                    <h5>Tabla 5. Comprobación del punto de equilibrio con utilidad</h5>
                    <Tabla5 />
                    <p>Lo que significa que al vender 3,500 hamburguesas al mes se estaría recuperando el costo total y
                        quedaría la utilidad deseada que es de $40,000.</p>
                </div>
            </div>
        </section>
    );
};

const Tabla1 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla1">
            <thead>
            <tr>
                <th colSpan={2}>Costos Fijos Mensuales</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Renta</td>
                <td>$ 10,000.00</td>
            </tr>
            <tr>
                <td>Sueldos</td>
                <td>$ 18,000.00</td>
            </tr>
            <tr>
                <td>Productos de limpieza</td>
                <td>$ 1,000.00</td>
            </tr>
            <tr>
                <td>Servicios</td>
                <td>$ 1,000.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$ 30,000.00</td>
            </tr>
            </tbody>
        </Table>
    );
};

const Tabla2 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla2">
            <thead>
            <tr>
                <th colSpan={3}>Hamburguesa sencilla</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th colSpan={2}>Precio de venta unitario (P)</th>
                <th>$ 35.00</th>
            </tr>
            <tr>
                <th colSpan={2}>Costo variable unitario (CVU) </th>
                <th>$ 15.00</th>
            </tr>
            <tr className="alinearDerecha">
                <td>Carne</td>
                <td>$ 7.00</td>
                <td></td>
            </tr>
            <tr className="alinearDerecha">
                <td >Pan</td>
                <td>$ 4.00</td>
                <td></td>
            </tr>
            <tr className="alinearDerecha">
                <td>Gas</td>
                <td>$ 2.00</td>
                <td></td>
            </tr>
            <tr className="alinearDerecha">
                <td>Varios</td>
                <td>$ 2.00</td>
                <td></td>
            </tr>
            <tr>
                <th colSpan={2}>Margen de contribución unitario (MCU) </th>
                <th>$ 20.00</th>
            </tr>
            </tbody>
        </Table>
    );
};

const Tabla3 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla3">
            <thead>
            <tr>
                <th colSpan={2}>Punto de equilibrio para un producto <a className="azul">sin utilidad</a></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="alinearCentro">Punto de equilibrio en número de unidades </td>
                <td><Image src={formula1} rounded style={{ margin: 'auto'}}/></td>
            </tr>
            <tr>
                <td className="alinearCentro">Punto de equilibrio expresado en cantidad de dinero (pesos) </td>
                <td><Image src={formula2} rounded style={{ margin: 'auto'}}/></td>
            </tr>
            </tbody>
        </Table>
    );
};

const Tabla4 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla4">
            <thead>
                <tr>
                    <th>Q</th>
                    <th>C.F</th>
                    <th>C.V.U</th>
                    <th>C.V.T</th>
                    <th>C.T</th>
                    <th>P</th>
                    <th>Ingresos</th>
                    <th>Utilidad o pérdida</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>30,000</td>
                <td>15</td>
                <td>0</td>
                <td>30,000</td>
                <td>35</td>
                <td>0</td>
                <td>-30,000</td>
              </tr>
              <tr>
                  <td>500</td>
                  <td>30,000</td>
                  <td>15</td>
                  <td>7,500</td>
                  <td>37,500</td>
                  <td>35</td>
                  <td>17,500</td>
                  <td>-20,000</td>
              </tr>
              <tr>
                  <td>1000</td>
                  <td>30,000</td>
                  <td>15</td>
                  <td>15,000</td>
                  <td>45,000</td>
                  <td>35</td>
                  <td>35,000</td>
                  <td>-15,000</td>
              </tr>
              <tr>
                  <td>1500</td>
                  <td>30,000</td>
                  <td>15</td>
                  <td>22,500</td>
                  <td>52,500</td>
                  <td>35</td>
                  <td>52,500</td>
                  <td>0</td>
              </tr>
              <tr>
                  <td>2000</td>
                  <td>30,000</td>
                  <td>15</td>
                  <td>30,000</td>
                  <td>60,000</td>
                  <td>35</td>
                  <td>70,000</td>
                  <td>10,000</td>
              </tr>

            </tbody>
        </Table>
    );
};

const Tabla5 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla5">
            <thead>
            <tr>
                <th colSpan={2}>Comprobacion</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><b>+</b> Ventas = (3,500) ($35)</td>
                <td>$ 122,500.00</td>
            </tr>
            <tr>
                <td><b>-</b> Costo variable total  (CVT) = (3,500) (15)</td>
                <td>$ 52,500.00</td>
            </tr>
            <tr>
                <td className="alinearDerecha"><b>=</b> Margen de contribución (MC)</td>
                <th>$ 70,000.00</th>
            </tr>
            <tr>
                <td><b>-</b> Costos fijos (CF)</td>
                <td>$ 30,000.00</td>
            </tr>
            <tr>
                <td className="alinearDerecha"><b>=</b> Utilidad</td>
                <th>$ 40,000.00</th>
            </tr>
            </tbody>
        </Table>
    );
};

export default PuntoEquilibrioOperacional1Producto;