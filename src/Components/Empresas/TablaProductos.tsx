import { Table, Button } from "react-bootstrap";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import Empresa, { Costo } from "../Classes/Empresa";

interface propsLista {
  arregloP: Costo[];
}

const ListaCostosVariables: React.FC<propsLista> = ({ arregloP }) => {
  return arregloP.length > 0 ? (
    <p>
      {arregloP.map((e,index) => {
        if( index === 0) return e.nombre;
        else return `, ${e.nombre}`;
      })}
    </p>
  ) : (
    <p>Aun no hay costos variables [ ]</p>
  );
};

interface props {
  empresa: Empresa;
}

const TablaProductos: React.FC<props> = ({ empresa }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const eliminarProducto = (productoNombre: string) => {
    empresa.eliminarProducto(productoNombre);
    dispatch(actualizarEmpresa(empresa));
  };

  return empresa.productos.length > 0 ? (
    <Table striped bordered={true} hover className="tablaEmpresas">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Costos Variables</th>
          <th>Precio</th>
          <th>Modificar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {empresa.productos.map((producto, index) => {
          return (
            <tr key={"producto/" + index}>
              <td>{producto.nombre}</td>
              <td>
                <p>Costos variables: {producto.costosTotales()}</p>
                <ListaCostosVariables
                  arregloP={producto.costosVariablesUnitario}
                />
              </td>
              <td>{producto.precio}</td>
              <td>
                <Button
                  onClick={() =>
                    history.push(
                      `/empresa/${empresa.nombre}/producto/${producto.nombre}`
                    )
                  }
                  className="editButto buttonPrimary"
                >
                  <BsPencil />
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => eliminarProducto(producto.nombre)}
                  variant="danger"
                >
                  <BsFillTrashFill />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  ) : null;
};

export default TablaProductos;
