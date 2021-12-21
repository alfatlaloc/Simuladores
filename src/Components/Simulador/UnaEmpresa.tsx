import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { EmpresaState } from "../../Redux/types";
import Empresa, { Producto } from "../Classes/Empresa";
import BotonHome from "../Common/BotonHome";
import FormEyP from "./FormEyP";
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

  const handleCHange = (e: React.FormEvent<HTMLSelectElement>) => {
    const empresaChange = empresas.find(
      (emp) => emp.nombre === e.currentTarget.value
    );
    if (empresaChange) {
      setEmpresaA(empresaChange);
    }
  };

  if (empresaA && productoO)
    if (productoO.costosTotales() > 0)
      return (
        <div className="pagina">
          <BotonHome />
          <h2>Calculo del punto de equilibrio</h2>
          <FormEyP
            handleChange={handleCHange}
            empresa={empresaA}
            producto={productoO}
            empresas={empresas}
            setProducto={setProductoO}
          />
          <TablaIngresoNeto empresa={empresaA} producto={productoO} />
        </div>
      );
    else {
      return (
        <div className="pagina">
          <BotonHome />
          <h2>Calculo del punto de equilibrio</h2>
          <FormEyP
            handleChange={handleCHange}
            empresa={empresaA}
            producto={productoO}
            empresas={empresas}
            setProducto={setProductoO}
          />
          <h3>El producto no tiene Costos Variables</h3>
          <h4>Por favor agregue alguno</h4>
        </div>
      );
    }
  else if (empresaA)
    return (
      <div className="pagina">
        <BotonHome />
        <h2>La empresa seleccionada no tiene productos</h2>
        <h4>Por favor seleccione otra o agregue productos</h4>
        <Form className="align-items-center">
          <Form.Group className="mb-3 justify-content-center">
            <Form.Label>Empresa</Form.Label>
            <Form.Select
              aria-label="Empresa"
              className="select"
              value={empresaA.nombre}
              onChange={(e) => handleCHange(e)}
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
        <Button
          className="m-4"
          onClick={() => {
            history.push("/simulador");
          }}
        >
          Gestor empresas
        </Button>
      </div>
    );
  return (
    <div className="pagina">
      <BotonHome />
      <h2>No hay ninguna empresa</h2>
      <h4>Por favor agregue una empresa en el Gestor de Empresas</h4>
      <Button
        className="m-4"
        onClick={() => {
          history.push("/simulador");
        }}
      >
        Gestor empresas
      </Button>
    </div>
  );
};

export default UnaEmpresa;
