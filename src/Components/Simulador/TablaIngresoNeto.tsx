import { useEffect, useState } from "react";
import { Form, Button, Table, Tab, Tabs } from "react-bootstrap";
import Empresa, { Producto } from "../Classes/Empresa";
import GradoApalancamientoOperativo from "./GradoApalancamientoOperativo";
import GraficaPuntoEquilibrio from "./GraficaPuntoEquilibrio";
import FormProducto from "../Empresas/FormProducto";
import TablaProductos from "../Empresas/TablaProductos";
import FormCosto from "../Empresas/FormCosto";
import TablaCostos from "../Empresas/TablaCostos";

interface props {
  empresa: Empresa;
  producto: Producto;
}

interface puntoE {
  puntoEquilibrioUnidades: number;
  puntoEquilibrioPesos: number;
}

const TablaIngresoNeto: React.FC<props> = ({ empresa, producto }) => {
  const [inicio, setInicio] = useState<number>(0);
  const [final, setFinal] = useState<number>(0);
  const [intervalo, setIntervalo] = useState<number>(0);

  const [arrayUnidades, setArrayUnidades] = useState<number[]>([]);
  const [ingresoVentas, setIngresoVentas] = useState<number[]>([]);
  const [costoVariable, setCostoVariable] = useState<number[]>([]);
  const [utilidad, setUtilidad] = useState<number[]>([]);

  const [puntoEquilibrio, setPuntoEquilibrio] = useState<puntoE>({
    puntoEquilibrioPesos: 0,
    puntoEquilibrioUnidades: 0,
  });

  const calcularPuntoEquilibrio = () => {
    let { puntoEquilibrioPesos, puntoEquilibrioUnidades } = puntoEquilibrio;
    console.log(producto.costosTotales());
    puntoEquilibrioUnidades =
      empresa.costoFijoTotal() / (producto.precio - producto.costosTotales());
    puntoEquilibrioPesos =
      empresa.costoFijoTotal() /
      (1 - producto.costosTotales() / producto.precio);

    setPuntoEquilibrio({ puntoEquilibrioUnidades, puntoEquilibrioPesos });
  };

  const calcularUnidades = () => {
    let auxUnidades: number[] = [];
    for (let i = inicio; i <= final; i += intervalo) {
      auxUnidades.push(i);
      if (
        puntoEquilibrio.puntoEquilibrioUnidades > i &&
        puntoEquilibrio.puntoEquilibrioUnidades < i + intervalo
      )
        auxUnidades.push(puntoEquilibrio.puntoEquilibrioUnidades);
    }
    setArrayUnidades(auxUnidades);
    let auxIngresoVentas: number[] = [];
    let auxCostoVariable: number[] = [];
    let auxUtilidad: number[] = [];
    auxUnidades.forEach((unidad) => {
      auxIngresoVentas.push(producto.precio * unidad);
      auxCostoVariable.push(producto.costosTotales() * unidad);
      auxUtilidad.push(
        unidad * producto.precio -
          unidad * producto.costosTotales() -
          empresa.costoFijoTotal()
      );
    });
    setIngresoVentas(auxIngresoVentas);
    setCostoVariable(auxCostoVariable);
    setUtilidad(auxUtilidad);
  };

  const chart = () => {
    if (utilidad.length > 0)
      return (
        <GraficaPuntoEquilibrio
          puntoEquilibrioPesos={puntoEquilibrio.puntoEquilibrioPesos}
          puntoEquilibrioUnidades={puntoEquilibrio.puntoEquilibrioUnidades}
          intervalo={arrayUnidades}
          costosVariablesTotales={costoVariable}
          ingresoTotal={ingresoVentas}
          costosFijos={empresa.costoFijoTotal()}
        />
      );
  };

  const apalancamiento = () => {
    if (ingresoVentas.length > 0 && arrayUnidades.length > 0)
      return (
        <GradoApalancamientoOperativo
          utilidades={utilidad}
          unidades={arrayUnidades}
          puntoEquilibrioUnidades={puntoEquilibrio.puntoEquilibrioUnidades}
        />
      );
  };

  useEffect(() => {
    if (empresa && producto) calcularPuntoEquilibrio();
  }, [empresa, producto]);

  const formularioYPuntodeEquilibrio = () => {
    return (
        <div>
          <p>
            Punto de equilibrio en unidades:{" "}
            {puntoEquilibrio.puntoEquilibrioUnidades}
          </p>
          <p>
            Punto de equilibrio en pesos: $
            {puntoEquilibrio.puntoEquilibrioPesos}
          </p>
          <h5>Calculo del Ingreso Neto</h5>

          <Form className=" d-flex flex-row justify-content-around flex-wrap">
            <Form.Group className="mb-3">
              <Form.Label>Venta inicial</Form.Label>
              <Form.Control
                  type="number"
                  value={inicio}
                  onChange={(e) => {
                    setInicio(Number.parseInt(e.currentTarget.value));
                  }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Final</Form.Label>
              <Form.Control
                  type="number"
                  value={final}
                  onChange={(e) => {
                    setFinal(Number.parseInt(e.currentTarget.value));
                  }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Intervalo: {intervalo}</Form.Label>
              <Form.Control
                  type="number"
                  value={intervalo}
                  onChange={(e) => {
                    const interv = Number.parseInt(e.currentTarget.value);
                    if (interv > 0 && interv <= final) {
                      setIntervalo(interv);
                    }
                  }}
              />
            </Form.Group>
          </Form>

          <Button className="buttonPrimary m-3" onClick={calcularUnidades}>
            Calcular datos
          </Button>

          <Table striped bordered hover className="overflowForce">
            <thead>
            <tr>
              <th>Unidades</th>
              {arrayUnidades.map((numero) => {
                if (numero === puntoEquilibrio.puntoEquilibrioUnidades)
                  return <th className="peUnidades">{numero}</th>;
                return <th>{numero}</th>;
              })}
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="tdTitulo">Ingreso/Ventas</td>
              {ingresoVentas.map((ingreso) => {
                return <td>{ingreso}</td>;
              })}
            </tr>
            <tr>
              <td className="tdTitulo">Costo Variable</td>
              {arrayUnidades?.map((numero) => {
                return <td>{numero * producto.costosTotales()}</td>;
              })}
            </tr>
            <tr>
              <td className="tdTitulo">Margen de Contribucion</td>
              {arrayUnidades?.map((numero) => {
                return (
                    <td>
                      {numero * producto.precio - numero * producto.costosTotales()}
                    </td>
                );
              })}
            </tr>
            <tr>
              <td className="tdTitulo">Costos fijos</td>
              {arrayUnidades?.map((numero) => {
                return <td>{empresa.costoFijoTotal()}</td>;
              })}
            </tr>
            <tr>
              <td className="tdTitulo">Utilidad</td>
              {utilidad?.map((numero) => {
                return <td>{numero}</td>;
              })}
            </tr>
            </tbody>
          </Table>
        </div>
    );
  };

  return empresa && producto ? (
    <div id="ingresoNeto">
      <Tabs
          defaultActiveKey="pEquilibrio"
          className="mb-3 justify-content-center">
        <Tab eventKey="pEquilibrio" title="Punto de Equilibrio">
          {formularioYPuntodeEquilibrio()}
          {chart()}
        </Tab>
        <Tab eventKey="apalancamiento" title="Apalancamiento">
          {apalancamiento()}
        </Tab>
      </Tabs>
    </div>
  ) : null;
};

export default TablaIngresoNeto;
