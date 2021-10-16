import { Button, Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import Empresa from "../Classes/Empresa";

interface props {
  empresa: Empresa;
}

const TablaCostos: React.FC<props> = ({ empresa }) => {
  const dispatch = useDispatch();


  const eliminarProducto = (costoFijoNombre: string) => {
    empresa.eliminarCostoFijo(costoFijoNombre);
    dispatch(actualizarEmpresa(empresa));
  };

  return empresa.costosFijos.length > 0 ? (
    <Table striped bordered={true} hover className="tablaEmpresas">
      <thead>
        <tr>
          <th>Costo</th>
          <th>Valor</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {empresa.costosFijos.map((costo, index) => {
          return (
            <tr key={"producto/" + index}>
              <td>{costo.nombre}</td>
              <td>{costo.valor}</td>
              <td>
                <Button
                  onClick={() => eliminarProducto(costo.nombre)}
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

export default TablaCostos;
