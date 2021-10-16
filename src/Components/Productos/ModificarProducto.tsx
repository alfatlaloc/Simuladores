import { useEffect, useState } from "react";
import { Button, Form, Tab, Table, Tabs } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import { EmpresaState } from "../../Redux/types";
import Empresa, { Costo, Producto } from "../Classes/Empresa";
import { useForm } from "../customHooks/useForm";

interface props {
  empresa: Empresa;
  producto: Producto;
}

const FormCostoVariableUnitario: React.FC<props> = ({ empresa, producto }) => {
  const { form, handleChange } = useForm(new Costo());
  const dispatch = useDispatch();

  const agregarCV = () => {
    producto.agregarCosto(new Costo(form.nombre, form.valor));
    empresa.actualizarCostosVariablesProducto(producto);
    dispatch(actualizarEmpresa(empresa));
  };

  return (
    <Form>
      <Form.Group
        className="mb-3 justify-content-center"
        controlId="formBasicEmail"
      >
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="text"
          name="nombre"
          placeholder="Costo Variable"
          value={form.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group
        className="mb-3 justify-content-center"
        controlId="formBasicEmail"
      >
        <Form.Label>Precio</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="number"
          name="valor"
          placeholder="Valor"
          min={0}
          value={form.valor}
          onChange={handleChange}
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
      <h1>Modificar Producto</h1>

      <Tabs
        defaultActiveKey="costosVariables"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="costosVariables" title="Costos Variables">
        <FormCostoVariableUnitario empresa={empresaA} producto={productoS} />

        <h5 className="m-2">Costo variable unitario: {productoS.costosTotales()} </h5>
          <MapearCostosVariables empresa={empresaA} producto={productoS} />
          
        </Tab>
        <Tab eventKey="Nombre" title="Nombre producto">
          <h5>Combiar Nombre</h5>
        </Tab>
      </Tabs>
    </div>
  ) : null;
};

export default ModificarProducto;
