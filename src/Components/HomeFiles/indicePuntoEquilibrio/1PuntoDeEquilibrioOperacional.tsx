import { useHistory } from "react-router";
import "../../../Styles/Teoria.sass";
import { Card } from "react-bootstrap";
import grafica1 from "../../../img/grafica1PuntoEquilibrio.png";
import BotonRegresar from "../../Common/BotonRegresar";
import BotonSiguiente from "../../Common/BotonSiguiente";

const PuntoEquilibrioOperacional = () => {
    const history = useHistory();

    return (
        <section className="textosEncuadre">
            <BotonRegresar/>
            <BotonSiguiente link="/teoriaPuntoEq-1-1"/>
            <h1 className="mobileH1">Punto de equilibrio operacional </h1>
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
                <Card style={{ width: '35rem', margin: 'auto'}}>
                    <Card.Img variant="top" src={grafica1} />
                    <Card.Body>
                        <Card.Title>Figura 1.
                            Representación gráfica del punto de equilibrio </Card.Title>
                    </Card.Body>
                </Card>
                Para calcular y analizar el punto de equilibrio necesitas conocer los siguientes términos:
                <ul>
                    <li><a onClick={() => {history.push("/glosario#CV");}}>
                        Costos y gastos variables (CV)
                    </a></li>
                    <li><a onClick={() => {history.push("/glosario#CVU");}}>Costo variable unitario (CVU)</a></li>
                    <li><a onClick={() => {history.push("/glosario#CVT");}}>Costo variable total (CVT)</a></li>
                    <li><a onClick={() => {history.push("/glosario#CF");}}>Costos y gastos fijos (CF)</a></li>
                    <li><a onClick={() => {history.push("/glosario#CT");}}>Costo total (CT) </a></li>
                    <li><a onClick={() => {history.push("/glosario#IngresoVentas");}}>Ingreso o ventas</a></li>
                    <li><a onClick={() => {history.push("/glosario#MCU");}}>Margen de contribución unitario (MCU) o contribución marginal unitaria (CMU) </a></li>
                </ul>
            </div>
        </section>
    );
};

export default PuntoEquilibrioOperacional;