import { useEffect, useState, useCallback } from "react";
import { Form, Button, Table, Tab, Tabs } from "react-bootstrap";
import Empresa, { Producto } from "../Classes/Empresa";
import { numerosEnteros, numerosEnterosConCero } from "../Common/Validaciones";
import GradoApalancamientoOperativo from "./GradoApalancamientoOperativo";
import GraficaPuntoEquilibrio from "./GraficaPuntoEquilibrio";
import InstruccionesUaEmpresa from "./InstruccionesUnaEmpresa";

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
  const [final, setFinal] = useState<string>("");
  const [ganancia, setGanancia] = useState<string>("");
  const [intervalo, setIntervalo] = useState<string>("100");

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
    unidades =
      empresa.costoFijoTotal() / (producto.precio - producto.costosTotales());
    pesos =
      empresa.costoFijoTotal() /
      (1 - producto.costosTotales() / producto.precio);

    setPuntoEquilibrio({ unidades, pesos });
  }, [producto, puntoEquilibrio, empresa]);

  const calcularUnidades = () => {
    if (inicio === "" || final === "" || intervalo === "") return;
    if (Number.parseInt(final) <= puntoEquilibrio.unidades) return;

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
    if (producto) {
      calcularPuntoEquilibrio();
      let f = Math.ceil(puntoEquilibrio.unidades).toFixed();
      setFinal(f);
    }
  }, [producto]);

  const formularioYPuntodeEquilibrio = () => {
    return (
      <div>
        <p>
          <strong>Punto de equilibrio en unidades:</strong>
          {puntoEquilibrio.unidades.toFixed(2).toString()}
        </p>
        <p>
          <strong>Punto de equilibrio en pesos:</strong> $
          {puntoEquilibrio.pesos.toFixed(2)}
        </p>
        <h5>Calculo del Ingreso Neto</h5>
        <InstruccionesUaEmpresa />

        <Form className=" d-flex flex-row justify-content-around flex-wrap">
          <Form.Group className="mb-3">
            <Form.Label>Venta inicial</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. 1-500-2000"
              value={inicio}
              onChange={(e) => {
                const valorInicio = e.currentTarget.value;
                if (valorInicio === "") {
                  setInicio("");
                  return;
                }
                if (numerosEnterosConCero(valorInicio)) {
                  if (
                    Number.parseInt(valorInicio) < puntoEquilibrio.unidades &&
                    Number.parseInt(valorInicio) < Number.parseInt(final)
                  )
                    setInicio(valorInicio);
                }
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Venta final</Form.Label>
            <Form.Control
              type="text"
              value={final}
              disabled={ganancia !== ""}
              placeholder="Ej. 1-500-2000"
              onChange={(e) => {
                const entrada = e.currentTarget.value;
                if (numerosEnteros(entrada)) setFinal(entrada);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ganancia deseada</Form.Label>
            <Form.Control
                type="text"
                value={ganancia}
                placeholder="Ej. 10000"
                onChange={(e) => {
                  const entrada = e.currentTarget.value;
                  if (numerosEnteros(entrada)) {
                    setGanancia(entrada);
                    let utlAux = Number.parseInt(entrada) + empresa.costoFijoTotal();
                    let auxUnidades = utlAux /(producto.precio - producto.costosTotales());
                    if (Math.ceil(auxUnidades))
                      setFinal(Math.ceil(auxUnidades).toString());
                  }
                }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>
              Maximo intervalo:
              {Number.parseInt(final) - Number.parseInt(inicio)}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. 1-500-2000"
              value={intervalo}
              onChange={(e) => {
                const interv = e.currentTarget.value;
                if (numerosEnteros(interv)) {
                  if (interv === "") setIntervalo("");
                  if (inicio === "" || final === "") {
                    setIntervalo("");
                    return;
                  } else if (
                    Number.parseInt(interv) > 0 &&
                    Number.parseInt(interv) <=
                      Number.parseInt(final) - Number.parseInt(inicio)
                  )
                    setIntervalo(interv);
                }
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
          <Table striped responsive bordered hover className="">
            <thead>
              <tr>
                <th className="celdaSticky">Unidades</th>
                {arrayUnidades.map((numero) => {
                  if (numero === puntoEquilibrio.unidades)
                    return (
                      <th key={numero} className="peUnidades">
                        {numero.toFixed(2)}
                      </th>
                    );
                  return <th key={numero}>{numero}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdTitulo celdaSticky">Ingreso/Ventas</td>
                {ingresoVentas.map((ingreso) => {
                  return <td key={ingreso}>{ingreso.toFixed(2)}</td>;
                })}
              </tr>
              <tr>
                <td className="tdTitulo celdaSticky">Costo Variable</td>
                {arrayUnidades?.map((numero) => {
                  let costoVariable = numero * producto.costosTotales();
                  return <td key={numero}>{costoVariable.toFixed(2)}</td>;
                })}
              </tr>
              <tr>
                <td className="tdTitulo celdaSticky">Margen de Contribucion</td>
                {arrayUnidades?.map((numero) => {
                  let contribucion =
                    numero * producto.precio -
                    numero * producto.costosTotales();
                  return <td key={numero}>{contribucion.toFixed(2)}</td>;
                })}
              </tr>
              <tr>
                <td className="tdTitulo celdaSticky">Costos fijos</td>
                {arrayUnidades?.map((numero) => {
                  return (
                    <td key={`ct-${numero}`}>
                      {empresa.costoFijoTotal().toFixed(2)}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="tdTitulo celdaSticky">Utilidad</td>
                {utilidad?.map((utilidad) => {
                  return <td key={utilidad}>{utilidad.toFixed(2)}</td>;
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
            <td className="tdTitulo">Producto</td>
            <td>{producto.nombre}</td>
          </tr>
          <tr>
            <td className="tdTitulo">Precio</td>
            <td>$ {producto.precio}</td>
          </tr>
          <tr>
            <td className="centerText">
              <strong>Costos Variables</strong>
            </td>
            <td>
              <Table borderless hover responsive size="sm">
                <tbody>
                  <tr className="tdTitulo">
                    <td className="tablaCostosVar">Nombre del costo</td>
                    <td className="tablaCostosVar">Valor</td>
                  </tr>
                  {producto.costosVariablesUnitario?.map((costo) => {
                    return (
                      <tr key={costo.nombre}>
                        <td>{costo.nombre}</td>
                        <td>$ {costo.valor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </td>
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
