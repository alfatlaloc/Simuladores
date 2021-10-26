import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { EmpresaState } from "../../Redux/types";
import Empresa from "../Classes/Empresa";
import FormProducto from "./FormProducto";
import FormCosto from "./FormCosto";
import TablaCostos from "./TablaCostos";
import TablaProductos from "./TablaProductos";
import { useSelector } from "react-redux";
import ModificarNombre from "./ModificarNombre";

const ModificarEmpresa = () => {
  const history = useHistory();
  const empresas = useSelector((state: EmpresaState) => state.empresas);

  const { _id } = useParams<{ _id?: string }>();

  const [empresaA, setempresaA] = useState<Empresa>(new Empresa("x"));

  useEffect(() => {
    if (_id) {
      const res = empresas.find((e) => e.nombre === _id);
      if (res) {
        setempresaA(res);
        return;
      } else {
        history.push("/error404");
      }
    }
    return;
  }, [_id, history, empresas]);

  return (
    <div className="pagina">
      <h3 className="mt-2">Empresa {empresaA.nombre}</h3>
      <Tabs
        defaultActiveKey="products"
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-center">
        <Tab eventKey="products" title="Productos">
          <FormProducto empresa={empresaA} />
          <TablaProductos empresa={empresaA} />
        </Tab>
        <Tab eventKey="costosFijos" title="Costos Fijos">
          <FormCosto empresa={empresaA} />
          <h5 className="m-2">
            Costos Fijos Totales: {empresaA.costoFijoTotal()}{" "}
          </h5>
          <TablaCostos empresa={empresaA} />
        </Tab>
        <Tab eventKey="Nombre" title="Nombre empresa">
          <h5>Cambiar Nombre</h5>
          <ModificarNombre empresa={empresaA} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ModificarEmpresa;
