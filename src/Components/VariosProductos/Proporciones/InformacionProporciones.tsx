import { Table } from "react-bootstrap";
import { Producto } from "../../Classes/Empresa";

interface props {
  productos: Producto[];
  proporciones: number[];
  costosFijos: number;
}

const InformacionProporciones: React.FC<props> = ({
  productos,
  proporciones,
  costosFijos,
}) => {
  return (
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
          <td className="tdTitulo">Precio de venta</td>
          {productos.map((prd) => {
            return <td>{prd.precio}</td>;
          })}
        </tr>
        <tr>
          <td className="tdTitulo">Proporción de Producción</td>
          {proporciones.map((pro) => {
            return <td>{pro} %</td>;
          })}
        </tr>
        <tr>
          <td className="tdTitulo">Costos Fijos</td>
          <td colSpan={productos.length}>{costosFijos}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default InformacionProporciones;
