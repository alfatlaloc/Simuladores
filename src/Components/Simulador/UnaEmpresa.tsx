import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { EmpresaState } from "../../Redux/types";
import Empresa, { Producto } from "../Classes/Empresa";
import TablaIngresoNeto from "./TablaIngresoNeto";

const UnaEmpresa = () => {
  const empresas = useSelector((state: EmpresaState) => state.empresas);

  const [empresaA, setEmpresaA] = useState<Empresa>();
  const [productoO, setProductoO] = useState<Producto>();

  useEffect(() => {
    if(!empresaA) setEmpresaA(empresas[0]);
    if(empresaA) setProductoO(empresaA.productos[0]);
  }, [empresaA]);

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
  return null;
};

export default UnaEmpresa;
