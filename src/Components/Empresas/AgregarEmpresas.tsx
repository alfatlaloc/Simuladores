import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { agregarEmpresa, eliminarEmpresa } from "../../Redux/Reducers/actions";
import { EmpresaState } from "../../Redux/types";
import Empresa, { Costo, Producto } from "../Classes/Empresa";
import "../../Styles/Tablas.sass";
import { useHistory } from "react-router";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import BotonRegresar from "../Common/BotonRegresar";

interface propsListaCosto {
  arregloCostos: Costo[];
}

const ListaCostos: React.FC<propsListaCosto> = ({ arregloCostos }) => {
  return arregloCostos.length > 0 ? (
    <p>
      {arregloCostos.map((e) => {
        return e.nombre + ", ";
      })}
    </p>
  ) : (
    <p>Aun no hay costos [ ]</p>
  );
};

interface propsLista {
  arregloP: Producto[];
}

const ListaProductos: React.FC<propsLista> = ({ arregloP }) => {
  return arregloP.length > 0 ? (
    <p>
      {arregloP.map((e, index) => {
        if (index === 0) return e.nombre;
        return ", " + e.nombre;
      })}
    </p>
  ) : (
    <p>Aun no hay productos [ ]</p>
  );
};

interface mapearEmpresasProps {
  empresas: Empresa[];
}

const MapearEmpresas: React.FC<mapearEmpresasProps> = ({ empresas }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return empresas.length > 0 ? (
    <Table responsive={true} striped bordered={true} className="tablaEmpresas" hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Productos</th>
          <th>Costos Fijos</th>
          <th>Modificar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {empresas.map((empresa, index) => {
          return (
            <tr key={"Empresa" + index}>
              <td>{empresa.nombre}</td>
              <td>
                <ListaProductos arregloP={empresa.productos} />
              </td>
              <td>
                <p>Costos Totales: {empresa.costoFijoTotal()}</p>

                <ListaCostos arregloCostos={empresa.costosFijos} />
              </td>
              <td>
                <Button
                  onClick={() => history.push(`/empresa/${empresa.nombre}`)}
                  className="buttonSecondaryDark"
                >
                  <BsPencil />
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => dispatch(eliminarEmpresa(empresa))}
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

const Simulador = () => {
  const Empresas = useSelector((state: EmpresaState) => state.empresas);
  const dispatch = useDispatch();
  const [name, setname] = useState("default");

  return (
    <div className="pagina">
      <BotonRegresar />
      <h2 className="m-4">Gestor de empresas</h2>

      <Form>
        <Form.Group
          className="mb-3 justify-content-center"
          controlId="formBasicEmail"
        >
          <Form.Label>Nombre de la empresa</Form.Label>
          <Form.Control
            size="lg"
            className="empresaInput"
            type="text"
            placeholder="Nombre de la empresa"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            El nombre solo puede tener letras, numeros y espacios.
          </Form.Text>
        </Form.Group>
      </Form>

      <Button
        className="m-1 buttonPrimary"
        onClick={() => {
          dispatch(agregarEmpresa(new Empresa(name)));
        }}
      >
        Agregar Empresa
      </Button>

      <MapearEmpresas empresas={Empresas} />
      
    </div>
  );
};

export default Simulador;
