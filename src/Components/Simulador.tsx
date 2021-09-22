import { useEffect, useState } from "react";
import { useForm } from "./customHooks/useForm";
import Empresa from "./Classes/Empresa";
import TablaUnidades from "./Tablas";

interface EmpresaInterface {
  empresa: Empresa;
}

const CrearEntradasEmpresa: React.FC<EmpresaInterface> = ({ empresa }) => {
  const { form, handleChange } = useForm(empresa);

  return (
    <div className="formArea">
      <form>
        <label>
          Precio de Venta:
          <input
            type="text"
            name="precioDeVenta"
            value={form.precioDeVenta}
            onChange={handleChange}
          />
        </label>
        <label>
          Costos Fijos:
          <input
            type="text"
            name="costosFijos"
            value={form.costosFijos}
            onChange={handleChange}
          />
        </label>
        <label>
          Costos Variables:
          <input
            type="text"
            name="costosVariables"
            value={form.costosVariables}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

interface mapearEmpresasProps {
  empresas: Empresa[];
  
}

const MapearEmpresas: React.FC<mapearEmpresasProps> = ({ empresas }) => {


  return (
    <div className="empresaA">
      {empresas.map((empresa, index) => {
        return (
          <div key={"Empresa" + index}>
            <h5>{"Empresa " + index}</h5>
            <CrearEntradasEmpresa empresa={empresa} />
            <TablaUnidades empresa={empresa} />
          </div>
        
        );
      })}
    </div>
  );
};

const Simulador = () => {
  const [Empresas, setEmpresas] = useState<Empresa[]>([new Empresa(0, 0, 0,"nE")]);

  useEffect(() => {
    console.log(Empresas);
  });

  function agregarEmpresa() {
    let Emp = new Empresa(0, 0, 0,"ENueva");
    setEmpresas((state) => [...state, Emp]);
  }

  return (
    <div>
      <h2>Simulador</h2>
      <MapearEmpresas empresas={Empresas} />

      <button onClick={agregarEmpresa}>Agregar Empresa</button>
    </div>
  );
};

export default Simulador;
