import { useEffect, useState } from "react";
import { Button, Form, Tab, Table, Tabs } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import { EmpresaState } from "../../Redux/types";
import Empresa, { Costo, Producto } from "../Classes/Empresa";
import BotonRegresar from "../Common/BotonRegresar";
import { numerosEnteros, numerosFlotantes } from "../Common/Validaciones";
import ModificarNombreProducto from "./ModificarNombreProducto";
import ModificarPrecioProducto from "./ModificarPrecioProducto";

interface props {
  empresa: Empresa;
  producto: Producto;
}

const FormCostoVariableUnitario: React.FC<props> = ({ empresa, producto }) => {
  const [nombre, setNombre] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const dispatch = useDispatch();

  const agregarCV = () => {
    if (valor === "" || nombre === "") return;

    producto.agregarCosto(new Costo(nombre, Number.parseFloat(valor)));
    empresa.actualizarCostosVariablesProducto(producto);
    dispatch(actualizarEmpresa(empresa));
    setNombre("");
    setValor("0");
  };

  return (
    <Form    >
      <Form.Group
        className="mb-3 justify-content-center"
        controlId="formBasicEmail"
      >
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="text"
          name="nombre"
          placeholder="Nombre de Costo"
          value={nombre}
          onChange={(e) => {
            const nuevoNombre = e.currentTarget.value;

            if (/^[a-zA-Z0-9_.ÑñáéíóúÁÉÍÓÚüÜ\s]{0,60}$/.test(nuevoNombre))
              setNombre(nuevoNombre);
          }}
        />
      </Form.Group>

      <Form.Group
        className="mb-3 justify-content-center"
        controlId="formBasicEmail"
      >
        <Form.Label>Precio</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="text"
          name="valor"
          placeholder="Valor Ej: 1.5"
          min={0}
          value={valor}
          onChange={(e) => {
            const nuevoValor = e.currentTarget.value;

            if (numerosFlotantes(nuevoValor))
              if (Number.parseFloat(nuevoValor) > 0) setValor(nuevoValor);
          }}
        />
      </Form.Group>
      <Button
        className="m-2 buttonPrimary"
        onClick={() => {
          agregarCV();
        }}
      >
        Agregar Costo Variable
      </Button>
    </Form>
  );
};

const MapearCostosVariables: React.FC<props> = ({ empresa, producto }) => {
  const dispatch = useDispatch();

  const elminarCostoVariable = (costoVariableNombre: string) => {
    if (empresa && producto) {
      producto.eliminarCosto(costoVariableNombre);
      dispatch(actualizarEmpresa(empresa));
    }
  };

  return producto && producto.costosVariablesUnitario.length > 0 ? (
    <Table striped bordered={true} hover>
      <thead>
        <tr>
          <th>Costo VU</th>
          <th>Valor</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {producto.costosVariablesUnitario.map((costoVU, index) => {
          return (
            <tr key={"producto/" + index}>
              <td>{costoVU.nombre}</td>
              <td>{costoVU.valor}</td>
              <td>
                <Button
                  onClick={() => {
                    elminarCostoVariable(costoVU.nombre);
                  }}
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

const ModificarProducto = () => {
  const empresas = useSelector((state: EmpresaState) => state.empresas);

  const { _id } = useParams<{ _id?: string }>();
  const { _pr } = useParams<{ _pr?: string }>();
  const [empresaA, setempresaA] = useState<Empresa>(new Empresa("X"));
  const [productoS, setProductoS] = useState<Producto>(new Producto());

  useEffect(() => {
    if (_id && _pr) {
      let res = empresas.find((e) => e.nombre === _id);
      if (res) {
        let auxP = res.obtenerProducto(_pr);
        if (auxP) {
          setProductoS(auxP as Producto);
          setempresaA(res);
          return;
        }
      }
    }
  }, [empresaA, productoS, _id, _pr, empresas]);

  return empresaA && productoS !== undefined ? (
    <div className="pagina">
      <h2 className="m-4">
        Producto {productoS.nombre} en {empresaA.nombre}
      </h2>
      <BotonRegresar />
      <Tabs
        defaultActiveKey="costosVariables"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="costosVariables" title="Costos Variables">
          <h5 className="m-2">Nuevo costo variable</h5>
          <FormCostoVariableUnitario empresa={empresaA} producto={productoS} />

          <h5 className="m-2">
            Costo variable unitario: {productoS.costosTotales()}{" "}
          </h5>
          <MapearCostosVariables empresa={empresaA} producto={productoS} />
        </Tab>
        <Tab eventKey="Nombre" title="Cambiar Nombre">
          <ModificarNombreProducto empresa={empresaA} producto={productoS} />
        </Tab>
        <Tab eventKey="Precio" title="Cambiar Precio">
          <p>Precio actual: $ {productoS.precio}</p>
          <ModificarPrecioProducto empresa={empresaA} producto={productoS} />
        </Tab>
      </Tabs>
    </div>
  ) : null;
};

export default ModificarProducto;
