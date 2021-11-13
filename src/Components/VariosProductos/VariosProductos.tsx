import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { EmpresaState } from "../../Redux/types";
import Empresa, { Producto } from "../Classes/Empresa";

import Stepper from "./Stepper";

const VariosProductos = () => {
  const empresas = useSelector((state: EmpresaState) => state.empresas);
  const [empresa, setEmpresa] = useState<Empresa>();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [proporciones, setProporciones] = useState<number[]>([]);

  const hanldeChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const empresaChange = empresas.find(
      (emp) => emp.nombre === e.currentTarget.value
    );
    if (empresaChange) {
      setEmpresa(empresaChange);
    }
  };

  useEffect(() => {
    if (!empresa) setEmpresa(empresas[0]);
    setProductos([]);
  }, [empresa]);

  if (!empresa)
    return (
      <div>
        <h2>Aun no se agregan empresas</h2>;
      </div>
    );

  return (
    <div className="pagina">
      <h2>Mezcla productos</h2>
      <Form className="align-items-center">
        <Form.Group className="mb-3 justify-content-center">
          <Form.Label>Empresa</Form.Label>
          <Form.Select
            aria-label="Empresa"
            className="select"
            value={empresa.nombre}
            onChange={(e) => hanldeChange(e)}
          >
            {empresas.map((empresa) => {
              return (
                <option key={empresa.nombre} value={empresa.nombre}>
                  {empresa.nombre}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Form>
      <Stepper
        empresa={empresa}
        productos={productos}
        setProductos={setProductos}
        proporciones={proporciones}
        setProporciones={setProporciones}
      />

      <p>Tabla</p>
      <p>Calculos</p>
    </div>
  );
};
export default VariosProductos;
