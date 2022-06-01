import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { agregarEmpresa, eliminarEmpresa } from "../../Redux/Reducers/actions";
import { EmpresaState } from "../../Redux/types";
import Empresa, { Costo, Producto } from "../Classes/Empresa";
import "../../Styles/Tablas.sass";
import { useHistory } from "react-router";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import BotonHome from "../Common/BotonHome";
import ModalUnProducto from "./ModalUnProducto";

interface propsListaCosto {
  arregloCostos: Costo[];
}

const ListaCostos: React.FC<propsListaCosto> = ({ arregloCostos }) => {
  return arregloCostos.length > 0 ? (
    <ul className="listaElementos">
      {arregloCostos.map((e) => {
        return <li key={e.nombre}> {e.nombre} </li>;
      })}
    </ul>
  ) : (
    <p>Aun no hay costos [ ]</p>
  );
};

interface propsLista {
  arregloP: Producto[];
}

const ListaProductos: React.FC<propsLista> = ({ arregloP }) => {
  return arregloP.length > 0 ? (
    <ul className="listaElementos">
      {arregloP.map((e) => {
        return <li key={e.nombre}> {e.nombre} </li>;
      })}
    </ul>
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
    <Table
      responsive={true}
      striped
      bordered={true}
      className="tablaEmpresas"
      hover
    >
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
              <td className="centerText">{empresa.nombre}</td>
              <td className="centerText">
                <ListaProductos arregloP={empresa.productos} />
              </td>
              <td className="centerText">
                <p>Costos Totales: {empresa.costoFijoTotal()}</p>

                <ListaCostos arregloCostos={empresa.costosFijos} />
              </td>
              <td className="centerText">
                <Button
                  onClick={() => history.push(`/empresa/${empresa.nombre}`)}
                  className="buttonSecondaryDark"
                >
                  <BsPencil />
                </Button>
              </td>
              <td className="centerText">
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
  const [name, setName] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [empresa, setEmpresa] = useState(new Empresa(""));

  return (
    <div className="pagina">
      <BotonHome />
      <h2 className="m-4">Gestor de empresas</h2>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3 justify-content-center">
          <Form.Label>Empresa</Form.Label>
          <Form.Control
            size="lg"
            className="empresaInput"
            type="text"
            placeholder="Nombre de la empresa"
            value={name}
            onChange={(e) => {
              if (
                /^[a-zA-Z0-9_.ÑñáéíóúÁÉÍÓÚüÜ\s]{0,60}$/.test(
                  e.currentTarget.value
                )
              )
                setName(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            El nombre solo puede tener letras, números y espacios.
          </Form.Text>
        </Form.Group>
      </Form>

      <Button
        type="button"
        className="m-1 buttonPrimary"
        onClick={() => {
          if (name === " " || name === "") return;
          let auxEmpresa = new Empresa(name);
          dispatch(agregarEmpresa(auxEmpresa));
          setEmpresa(auxEmpresa);
          handleShow();
          setName("");
        }}
      >
        Agregar empresa
      </Button>

      <MapearEmpresas empresas={Empresas} />

      <ModalUnProducto
        show={show}
        handleClose={handleClose}
        empresa={empresa}
      />
    </div>
  );
};

export default Simulador;
