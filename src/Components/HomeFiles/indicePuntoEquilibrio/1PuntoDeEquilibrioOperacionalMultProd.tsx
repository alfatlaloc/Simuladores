import { Table, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import "../../../Styles/Teoria.sass";
import BotonRegresar from "../../Common/BotonRegresar";
import formula1 from "../../../img/Tabla9Imagen1.png";
import puntoE from "../../../img/PEmezcla.png";
import formulaLarga2 from "../../../img/formulaLarga2.png";

const PuntoEquilibrioOperacionalMultiplesProductos = () => {
    return (
        <section className="textosEncuadre">
            <BotonRegresar/>
            <h1 className="mobileH1" id="indice2">Modelo matemático del punto de equilibrio con multiproductos
                (mezcla de dos o más productos)</h1>
            <div>
                <p>Lo más común es encontrar empresas que venden más de dos tipos de productos, si ese es el caso,
                    podemos calcular el punto de equilibrio de la mezcla sin utilidad y con utilidad. </p>
                <h4 id="subindice3">Punto de equilibrio para una mezcla de productos sin utilidad </h4>
                <div>
                    <p>Continuando con el ejemplo de las hamburguesas, supongamos que ahora venderemos hamburguesas
                        sencillas y hamburguesas hawaianas. Del total de las hamburguesas vendidas al mes se estima
                        que el 20% son sencillas y el 80% son hawaianas.</p>
                    <h5>Tabla 6. Relación de costos fijos mensuales</h5>
                    <Tabla6 />
                    <h5>Tabla 7. Información del producto 1 (hamburguesa sencilla) </h5>
                    <Tabla7 />
                    <h5>Tabla 8. Información del producto 2 (hamburguesa hawaiana) </h5>
                    <Tabla8 />
                    <p>Para calcular el Punto de equilibrio de una mezcla en número de unidades y en cantidad de dinero
                        sin utilidad ocuparemos las fórmulas contenidas en la tabla 9</p>
                    <h5>Tabla 9. Fórmulas del punto de equilibrio para una mezcla de productos sin utilidad</h5>
                    <Tabla9 />
                    <p>Para calcular el punto de equilibrio utilizamos la fórmula de la mezcla:</p>
                    <Card style={{ width: '20rem', margin: 'auto' }} className="Imagenes">
                        <Card.Img variant="top" src={puntoE} />
                    </Card>
                    <p>Conocemos los costos fijos y necesitamos calcular el margen de contribución ponderado promedio
                        (MCP), se determina así:</p>
                    <h5>Tabla 10. Cálculo del margen de contribución ponderado promedio</h5>
                    <Tabla10 />
                    <p>PE Mezcla = 30,000/24 = 1,250 hamburguesas (incluye tanto sencillas como hawaianas). Para saber
                        cuántas sencillas y cuántas hawaianas solo hay que multiplicar por su proporción en las ventas:
                    </p>
                    <p>Hamburguesas sencillas = (1,250) (0.20) =  250</p>
                    <p>Hamburguesas hawaianas = (1,250) (0.80) = 1,000</p>
                    <p>Es decir, el punto de equilibrio se obtiene vendiendo 250 hamburguesas sencillas y 1,000
                        hawaianas y recibiendo de esa venta $53,750 pesos, así no se gana y no se pierde (Tabla 11).
                    </p>
                    <p>Por cada unidad vendida, por arriba del punto de equilibrio, se tendría utilidad; sin embargo,
                        si se vende una cantidad menor que la del punto de equilibrio se obtendrá pérdida.</p>
                    <h5>Tabla 11. Comprobación del punto de equilibrio multiproducto sin utilida</h5>
                    <Tabla11 />
                </div>
                <h4 id="subindice4">Punto de equilibrio para una mezcla de productos con utilidad </h4>
                <div>
                    <p>También podemos calcular el punto de equilibrio, para una mezcla de productos, con utilidad.
                        Continuando con nuestro ejemplo y considerando que la empresa desea obtener una utilidad de
                        45,000 pesos mensuales, entonces el punto de equilibrio se calcula así:</p>
                    <Card className="formulaLarga">
                        <Card.Img variant="top" src={formulaLarga2} />
                    </Card>
                    <p>Donde::::::::</p>
                    <p>
                        Para obtener el punto de equilibrio para cada uno de los productos de la mezcla, simplemente se
                        multiplica el punto de equilibrio de la mezcla, que en nuestro ejemplo son 3,125 unidades por la
                        proporción en las ventas totales, obteniéndose los siguientes resultados:</p>
                    <p>Hamburguesas sencillas   = (3,125) (0.20) =    625</p>
                    <p>Hamburguesas hawaianas= (3,125) (0.80) = 2,500</p>
                    <p>= (2,000) (0.40) = 800</p>
                    <p>Ahora, comprobemos que con ese volumen de ventas se obtiene una utilidad de $45,000
                        (ver tabla 12).</p>
                    <h5>Tabla 12. Comprobación del punto de equilibrio multiproducto con utilidad</h5>
                    <Tabla12 />
                </div>
            </div>
        </section>
    );
};

const Tabla6 = () => {
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

const Tabla7 = () => {
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
            <tr>
                <th colSpan={2}>Proporción en las ventas totales </th>
                <th>0.20</th>
            </tr>
            </tbody>
        </Table>
    );
};

const Tabla8 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla2">
            <thead>
            <tr>
                <th colSpan={3}>Hamburguesa hawaiana</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th colSpan={2}>Precio de venta unitario (P)</th>
                <th>$ 45.00</th>
            </tr>
            <tr>
                <th colSpan={2}>Costo variable unitario (CVU) </th>
                <th>$ 20.00</th>
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
                <td>Piña</td>
                <td>$ 3.00</td>
                <td></td>
            </tr>
            <tr className="alinearDerecha">
                <td>Varios</td>
                <td>$ 4.00</td>
                <td></td>
            </tr>
            <tr>
                <th colSpan={2}>Margen de contribución unitario (MCU) </th>
                <th>$ 25.00</th>
            </tr>
            <tr>
                <th colSpan={2}>Proporción en las ventas totales </th>
                <th>0.80</th>
            </tr>
            </tbody>
        </Table>
    );
};

const Tabla9 = () => {
    return (
        <div className='scrollTabla'>
            <Table striped bordered hover size="sm" className="tabla3">
                <thead>
                <tr>
                    <th colSpan={2}>Punto de equilibrio para un producto <span className="azul">sin utilidad</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="alinearCentro">Punto de equilibrio en número de unidades </td>
                    <td><Image src={formula1} rounded style={{ margin: 'auto'}} className="imagenTabla"/></td>
                </tr>
                <tr>
                    <td className="alinearCentro">Punto de equilibrio expresado en cantidad de dinero (pesos) </td>
                    <td>---</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

const Tabla10 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla4">
            <thead>
            <tr>
                <th rowSpan={2} className="verticalAlign">Datos</th>
                <th colSpan={2}>Hamburguesas</th>
            </tr>
            <tr>
                <th>Sencilla</th>
                <th>Hawaiana</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Precio de venta unitario (P)</td>
                <td className="alinearCentro">$ 35.00</td>
                <td className="alinearCentro">$ 45.00</td>
            </tr>
            <tr>
                <td>Costo variable unitario (CVU)</td>
                <td className="alinearCentro">$ 15.00</td>
                <td className="alinearCentro">$ 20.00</td>
            </tr>
            <tr>
                <td>Margen de contribución unitario (MCU)</td>
                <td className="alinearCentro">$ 20.00</td>
                <td className="alinearCentro">$ 25.00</td>
            </tr>
            <tr>
                <td>Porcentaje de proporción en las ventas</td>
                <td className="alinearCentro">0.20</td>
                <td className="alinearCentro">0.80</td>
            </tr>
            <tr>
                <th>Margen de contribución ponderado (MCP)</th>
                <th className="alinearCentro">($20) (0.20)= $4</th>
                <th className="alinearCentro">($25) (0.80) = $20</th>
            </tr>
            <tr>
                <th>Margen de contribución ponderado promedio (MCPP)</th>
                <th colSpan={2} className="alinearCentro">0.80</th>
            </tr>
            </tbody>
        </Table>
    );
};

const Tabla11 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla4">
            <thead>
            <tr>
                <th></th>
                <th>Sencillas</th>
                <th>Hawaianas</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="alinearIzquierda">+ Ventas = (Q)(P)</td>
                <td className="alinearCentro">$ 8,750.00</td>
                <td className="alinearCentro">$ 45,000.00</td>
                <td className="alinearCentro">$ 53,750.00</td>
            </tr>
            <tr>
                <td className="alinearIzquierda">- Costo variable</td>
                <td className="alinearCentro">$ 3,750.00</td>
                <td className="alinearCentro">$ 20,000.00</td>
                <td className="alinearCentro">$ 23,750.00</td>
            </tr>
            <tr>
                <td className="alinearIzquierda">= Margen de contribución</td>
                <td className="alinearCentro">$ 5,000.00</td>
                <td className="alinearCentro">$ 25,000.00</td>
                <td className="alinearCentro">$ 30,000.00</td>
            </tr>
            <tr>
                <td colSpan={3} className="alinearIzquierda">- Costos fijos</td>
                <td className="alinearCentro">$ 30,000.00</td>
            </tr>
            <tr>
                <th colSpan={3} className="alinearIzquierda">= Ganancia</th>
                <th className="alinearCentro">$ -</th>
            </tr>
            </tbody>
        </Table>
    );
};

const Tabla12 = () => {
    return (
        <Table striped bordered hover size="sm" className="tabla4">
            <thead>
            <tr>
                <th></th>
                <th>Sencillas</th>
                <th>Hawaianas</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="alinearIzquierda">+ Ventas = (Q)(P)</td>
                <td className="alinearCentro">$ 21,875.00</td>
                <td className="alinearCentro">$ 112,500.00</td>
                <td className="alinearCentro">$ 134,375.00</td>
            </tr>
            <tr>
                <td className="alinearIzquierda">- Costo variable</td>
                <td className="alinearCentro">$ 9,375.00</td>
                <td className="alinearCentro">$ 50,000.00</td>
                <td className="alinearCentro">$ 59,375.00</td>
            </tr>
            <tr>
                <td className="alinearIzquierda">= Margen de contribución</td>
                <td className="alinearCentro">$ 12,500.00</td>
                <td className="alinearCentro">$ 62,500.00</td>
                <td className="alinearCentro">$ 75,000.00</td>
            </tr>
            <tr>
                <td colSpan={3} className="alinearIzquierda">- Costos fijos</td>
                <td className="alinearCentro">$ 30,000.00</td>
            </tr>
            <tr>
                <th colSpan={3} className="alinearIzquierda">= Ganancia</th>
                <th className="alinearCentro">$ 45,000.00</th>
            </tr>
            </tbody>
        </Table>
    );
};


export default PuntoEquilibrioOperacionalMultiplesProductos;