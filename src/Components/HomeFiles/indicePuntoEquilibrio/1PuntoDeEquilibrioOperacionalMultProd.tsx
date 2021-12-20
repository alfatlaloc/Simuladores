import { useHistory } from "react-router";
import { Table, Card } from "react-bootstrap";
import "../../../Styles/Teoria.sass";
import BotonRegresar from "../../Common/BotonRegresar";

const PuntoEquilibrioOperacionalMultiplesProductos = () => {
    const history = useHistory();

    return (
        <section className="textosEncuadre">
            <BotonRegresar/>
            <h1 className="mobileH1" id="indice2">Modelo matemático del punto de equilibrio con multiproductos
                (mezcla de dos o más productos)</h1>
            <div>
                <p>Lo más común es encontrar empresas que venden más de dos tipos de productos, si ese es el caso,
                    podemos calcular el punto de equilibrio de la mezcla sin utilidad y con utilidad. </p>
                <h4 id="subindice1">Punto de equilibrio para una mezcla de productos sin utilidad </h4>
                <div>
                    <p>Continuando con el ejemplo de las hamburguesas, supongamos que ahora venderemos hamburguesas
                        sencillas y hamburguesas hawaianas. Del total de las hamburguesas vendidas al mes se estima
                        que el 20% son sencillas y el 80% son hawaianas.</p>
                    <h5>Tabla 6. Relación de costos fijos mensuales</h5>
                    <Tabla6 />
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

export default PuntoEquilibrioOperacionalMultiplesProductos;