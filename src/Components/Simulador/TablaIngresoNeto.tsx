import { useEffect, useState, useCallback } from "react";
import { Form, Button, Table, Tab, Tabs } from "react-bootstrap";
import Empresa, { Producto } from "../Classes/Empresa";
import GradoApalancamientoOperativo from "./GradoApalancamientoOperativo";
import GraficaPuntoEquilibrio from "./GraficaPuntoEquilibrio";

interface props {
  empresa: Empresa;
  producto: Producto;
}

interface puntoE {
  unidades: number;
  pesos: number;
}

const TablaIngresoNeto: React.FC<props> = ({ empresa, producto }) => {
  const [inicio, setInicio] = useState<string>("0");
  const [final, setFinal] = useState<string>("0");
  const [intervalo, setIntervalo] = useState<string>("1");

  const [arrayUnidades, setArrayUnidades] = useState<number[]>([]);
  const [ingresoVentas, setIngresoVentas] = useState<number[]>([]);
  const [costoVariable, setCostoVariable] = useState<number[]>([]);
  const [toogle, setToogle] = useState<boolean>(false);

  const [utilidad, setUtilidad] = useState<number[]>([]);

  const [puntoEquilibrio, setPuntoEquilibrio] = useState<puntoE>({
    pesos: 0,
    unidades: 0,
  });

  const calcularPuntoEquilibrio = useCallback(() => {
    let { pesos, unidades } = puntoEquilibrio;
    console.log(producto.costosTotales());
    unidades =
      empresa.costoFijoTotal() / (producto.precio - producto.costosTotales());
    pesos =
      empresa.costoFijoTotal() /
      (1 - producto.costosTotales() / producto.precio);

    setPuntoEquilibrio({ unidades, pesos });
  }, [producto, puntoEquilibrio, empresa]);

  const calcularUnidades = () => {
    if (Number.parseInt(final) <= Number.parseInt(inicio)) return;
    setToogle(false);
    let auxUnidades: number[] = [];
    for (
      let i = Number.parseInt(inicio);
      i <= Number.parseInt(final);
      i += Number.parseInt(intervalo)
    ) {
      auxUnidades.push(i);
      if (
        puntoEquilibrio.unidades > i &&
        puntoEquilibrio.unidades < i + Number.parseInt(intervalo)
      )
        auxUnidades.push(puntoEquilibrio.unidades);
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
    setToogle(true);
  };

  const chart = () => {
    if (utilidad.length > 0)
      return (
        <GraficaPuntoEquilibrio
          puntoEquilibrioPesos={puntoEquilibrio.pesos}
          puntoEquilibrioUnidades={puntoEquilibrio.unidades}
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
          puntoEquilibrioUnidades={puntoEquilibrio.unidades}
        />
      );
    return <h4>Aun no se generan datos en la tabla</h4>;
  };

  useEffect(() => {
    if (producto) calcularPuntoEquilibrio();
  }, [producto]);

  const formularioYPuntodeEquilibrio = () => {
    return (
      <div>
        <p>
          Punto de equilibrio en unidades: {puntoEquilibrio.unidades.toFixed(2)}
        </p>
        <p>Punto de equilibrio en pesos: $ {puntoEquilibrio.pesos.toFixed}</p>
        <h5>Calculo del Ingreso Neto</h5>

        <Form className=" d-flex flex-row justify-content-around flex-wrap">
          <Form.Group className="mb-3">
            <Form.Label>Venta inicial</Form.Label>
            <Form.Control
              type="text"
              value={inicio}
              onChange={(e) => {
                const valorInicio = e.currentTarget.value;
                if (Number.parseInt(valorInicio) < puntoEquilibrio.unidades)
                  if (/^\d+$/.test(valorInicio)) setInicio(valorInicio);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Final</Form.Label>
            <Form.Control
              type="text"
              value={final}
              onChange={(e) => {
                const entrada = e.currentTarget.value;
                if (
                  /^\d+$/.test(entrada) &&
                  Number.parseInt(entrada) > Number.parseInt(inicio)
                ) {
                  setFinal(entrada);
                }
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Intervalo: {intervalo}</Form.Label>
            <Form.Control
              type="text"
              value={intervalo}
              onChange={(e) => {
                const interv = Number.parseInt(e.currentTarget.value);
                if (
                  /^\d+$/.test(interv.toString()) &&
                  interv > 0 &&
                  interv < Number.parseInt(final)
                )
                  setIntervalo(interv.toString());
              }}
            />
          </Form.Group>
        </Form>

        <Button className="buttonPrimary m-3" onClick={calcularUnidades}>
          Calcular datos
        </Button>
        {Tabla()}
      </div>
    );
  };

  const Tabla = () => {
    if (toogle)
      return (
        <>
          <Table striped bordered hover className="overflowForce">
            <thead>
              <tr>
                <th>Unidades</th>
                {arrayUnidades.map((numero) => {
                  if (numero === puntoEquilibrio.unidades)
                    return <th className="peUnidades">{numero.toFixed(2)}</th>;
                  return <th key={numero}>{numero}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdTitulo">Ingreso/Ventas</td>
                {ingresoVentas.map((ingreso) => {
                  return <td>{ingreso.toFixed(2)}</td>;
                })}
              </tr>
              <tr>
                <td className="tdTitulo">Costo Variable</td>
                {arrayUnidades?.map((numero) => {
                  let costoVariable = numero * producto.costosTotales();
                  return <td>{costoVariable.toFixed(2)}</td>;
                })}
              </tr>
              <tr>
                <td className="tdTitulo">Margen de Contribucion</td>
                {arrayUnidades?.map((numero) => {
                  let contribucion =
                    numero * producto.precio -
                    numero * producto.costosTotales();
                  return <td>{contribucion.toFixed(2)}</td>;
                })}
              </tr>
              <tr>
                <td className="tdTitulo">Costos fijos</td>
                {arrayUnidades?.map((numero) => {
                  return <td>{empresa.costoFijoTotal().toFixed(2)}</td>;
                })}
              </tr>
              <tr>
                <td className="tdTitulo">Utilidad</td>
                {utilidad?.map((utilidad) => {
                  return <td>{utilidad.toFixed(2)}</td>;
                })}
              </tr>
            </tbody>
          </Table>
          {chart()}
        </>
      );
  };

  return empresa && producto ? (
    <div id="ingresoNeto">
      <Table striped bordered hover className="infoProducto">
        <tbody>
          <tr>
            <td className="tdTitulo">Precio</td>
            <td>{producto.precio}</td>
          </tr>
          <tr className="tablaCostosVar">
            <td>Costos Variables</td>
            <tr>
              <td>Costo</td> <td>Valor</td>
            </tr>
            {producto.costosVariablesUnitario?.map((costo) => {
              return (
                <tr>
                  <td>{costo.nombre}</td> <td>{costo.valor}</td>
                </tr>
              );
            })}
          </tr>
        </tbody>
      </Table>
      <Tabs
        defaultActiveKey="pEquilibrio"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="pEquilibrio" title="Punto de Equilibrio">
          {formularioYPuntodeEquilibrio()}
        </Tab>
        <Tab eventKey="apalancamiento" title="Apalancamiento">
          {apalancamiento()}
        </Tab>
      </Tabs>
    </div>
  ) : null;
};

export default TablaIngresoNeto;
