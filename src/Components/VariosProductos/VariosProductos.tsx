import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";

import { EmpresaState } from "../../Redux/types";
import Empresa, { Producto } from "../Classes/Empresa";

import Stepper from "./Stepper";
import BotonHome from "../Common/BotonHome";
interface formProps {
  empresas: Empresa[];
  empresa: Empresa;
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}
const FormEmpresa: React.FC<formProps> = ({
  empresa,
  empresas,
  handleChange,
}) => {
  return (
    <Form className="align-items-center">
      <Form.Group className="mb-3 justify-content-center">
        <Form.Label>Empresa</Form.Label>
        <Form.Select
          aria-label="Empresa"
          className="select inputMargin"
          value={empresa.nombre}
          onChange={(e) => handleChange(e)}
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
  );
};

const VariosProductos = () => {
  const empresas = useSelector((state: EmpresaState) => state.empresas);
  const [empresa, setEmpresa] = useState<Empresa>();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [proporciones, setProporciones] = useState<number[]>([]);
  const [contMarginal, setContMarginal] = useState<number[]>([]);
  const [contMarginalPon, setContMarginalPon] = useState<number[]>([]);
  const [CMPP, setCMPP] = useState<number>(0);

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
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
  }, [empresa, empresas]);

  if (!empresa)
    return (
      <div className="pagina">
        <BotonHome />
        <h2>Aun no se agregan empresas</h2>
      </div>
    );

  if (empresa.productos.length < 1)
    return (
      <div className="pagina">
        <BotonHome />
        <h2>Mezcla productos</h2>
        <FormEmpresa
          empresa={empresa}
          empresas={empresas}
          handleChange={handleChange}
        />
        <h2>La empresa seleccionada no tiene productos</h2>
      </div>
    );

  return (
    <div className="pagina">
      <BotonHome />
      <h2>Mezcla productos</h2>
      <FormEmpresa
        empresa={empresa}
        empresas={empresas}
        handleChange={handleChange}
      />
      <p className="m-2"><small>
        Para que un producto aparezca aqui debe de tener costos variables (Mayor
        que 0).
      </small></p>
      <Stepper
        empresa={empresa}
        productos={productos}
        setProductos={setProductos}
        proporciones={proporciones}
        setProporciones={setProporciones}
        contMarginal={contMarginal}
        setContMarginal={setContMarginal}
        setContMarginalPon={setContMarginalPon}
        contMarginalPon={contMarginalPon}
        CMPP={CMPP}
        setCMPP={setCMPP}
      />
    </div>
  );
};
export default VariosProductos;
