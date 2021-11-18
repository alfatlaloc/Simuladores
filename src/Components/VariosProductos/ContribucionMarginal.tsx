import { Table } from "react-bootstrap";
import { Producto } from "../Classes/Empresa";

interface props {
  productos: Producto[];
  proporciones: number[];
  costosFijos: number;
}

const ContribucionMarginal: React.FC<props> = ({
  productos,
  proporciones,
  costosFijos,
}) => {
  return (
    <div>
      <h5>Contribucion Marginal</h5>
      <Table className="tablaEmpresas" striped bordered hover>
        <thead>
          <tr>
            <th className="tdTitulo">Producto</th>
            {productos.map((prd) => {
              return <th>{prd.nombre}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tdTitulo">Contribución Marginal</td>
            {productos.map((prd) => {
              return <td>{prd.precio - prd.costosTotales()}</td>;
            })}
          </tr>
          <tr>
            <td className="tdTitulo">Contribución Marginal Ponderada</td>
            {productos.map((prd, index) => {
              let contribucionMarginal = prd.precio - prd.costosTotales();
              return (
                <td>{contribucionMarginal * (proporciones[index] / 100)} %</td>
              );
            })}
          </tr>
          <tr>
            <td className="tdTitulo">
              Contribución Marginal Ponderada Promedio
            </td>
            <td colSpan={productos.length}>{costosFijos}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ContribucionMarginal;
