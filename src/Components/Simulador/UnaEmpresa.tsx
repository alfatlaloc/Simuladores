import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { EmpresaState } from "../../Redux/types";
import Empresa, { Producto } from "../Classes/Empresa";
import TablaIngresoNeto from "./TablaIngresoNeto";

const UnaEmpresa = () => {
  const empresas = useSelector((state: EmpresaState) => state.empresas);

  const [empresaA, setEmpresaA] = useState<Empresa>();
  const [productoO, setProductoO] = useState<Producto>();
  const history = useHistory();

  useEffect(() => {
    if (!empresaA) setEmpresaA(empresas[0]);
    if (empresaA) setProductoO(empresaA.productos[0]);
  }, [empresaA, empresas]);

  const hanldeChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const empresaChange = empresas.find(
      (emp) => emp.nombre === e.currentTarget.value
    );
    if (empresaChange) {
      setEmpresaA(empresaChange);
    }
  };

  if (empresaA && productoO)
    return (
      <div className="pagina">
        <h2>Calculo del punto de equilibrio</h2>
        <Form className="align-items-center">
          <Form.Group className="mb-3 justify-content-center">
            <Form.Label>Empresa</Form.Label>
            <Form.Select
              aria-label="Empresa"
              className="select"
              value={empresaA.nombre}
              onChange={(e) => hanldeChange(e)}
            >
              {empresas.map((empresa) => {
                return <option value={empresa.nombre}>{empresa.nombre}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 justify-content-center">
            <Form.Label>Prodcuto</Form.Label>
            <Form.Select
              aria-label="Producto"
              className="select"
              onChange={(e) => {
                let res = empresaA.productos.find(
                  (pr) => pr.nombre === e.currentTarget.value
                );
                if (res) setProductoO(res);
              }}
            >
              {empresaA.productos.map((producto) => {
                return (
                  <option value={producto.nombre}>{producto.nombre}</option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Form>
        <TablaIngresoNeto empresa={empresaA} producto={productoO} />
      </div>
    );
  else if (empresaA)
    return (
      <div className="pagina">
        <h2>La empresa seleccionada no tiene productos</h2>
        <h4>Por favor seleccione otra o agregue productos</h4>
        <Form className="align-items-center">
          <Form.Group className="mb-3 justify-content-center">
            <Form.Label>Empresa</Form.Label>
            <Form.Select
              aria-label="Empresa"
              className="select"
              value={empresaA.nombre}
              onChange={(e) => hanldeChange(e)}
            >
              {empresas.map((empresa) => {
                return <option value={empresa.nombre}>{empresa.nombre}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    );
  return (
    <div className="pagina">
      <h2>No hay ninguna empresa</h2>
      <h4>Por favor agregue una empresa en el Gestor de Empresas</h4>
      <Button
        className="m-4"
        onClick={() => {
          history.push("/simulador");
        }}
      >
        {" "}
        Gestor Empresas
      </Button>
    </div>
  );
};

export default UnaEmpresa;
