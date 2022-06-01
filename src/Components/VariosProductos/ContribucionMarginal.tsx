import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Chart from "react-google-charts";
import { Producto } from "../Classes/Empresa";

interface props {
  productos: Producto[];
  proporciones: number[];
  costosFijos: number;
  contMarginalPon: number[];
  setContMarginalPon: (num: number[]) => void;
  contMarginal: number[];
  setContMarginal: (num: number[]) => void;
  CMPP: number;
  setCMPP: (num: number) => void;
}

const ContribucionMarginal: React.FC<props> = ({
  productos,
  proporciones,
  costosFijos,
  contMarginalPon,
  setContMarginalPon,
  contMarginal,
  setContMarginal,
  CMPP,
  setCMPP,
}) => {
  const [PE, setPE] = useState<number>(0);

  const pieChartM = () => {
    let finalArr = [];
    finalArr.push([
      "Producto",
      "Proporcion",
      { role: "tooltip", type: "string", p: { html: true } },
    ]);
    productos.forEach((prd, index) => {
      let ingreso = ((PE * proporciones[index]) / 100) * prd.precio;
      finalArr.push([
        prd.nombre,
        ingreso,
        `${prd.nombre}: $ ${ingreso.toFixed(2)}`,
      ]);
    });
    return finalArr;
  };

  useEffect(() => {
    let value: number = 0;
    productos.forEach((prd, index) => {
      let contribucionMarginal = prd.precio - prd.costosTotales();
      value += contribucionMarginal * (proporciones[index] / 100);
    });
    setCMPP(value);
    setPE(costosFijos / value);

    let auxCM = productos.map((prd) => prd.precio - prd.costosTotales());
    setContMarginal(auxCM);

    let auxCMP = productos.map((prd, index) => {
      let contribucionMarginal = prd.precio - prd.costosTotales();
      return contribucionMarginal * (proporciones[index] / 100);
    });
    setContMarginalPon(auxCMP);
  }, []);

  return (
    <div className="">
      <h5>Contribución marginal</h5>
      <Table responsive={true} className="tablaEmpresas" striped bordered hover>
        <thead>
          <tr>
            <th className="tdTitulo">Producto</th>
            {productos.map((prd) => {
              return <th key={prd.nombre}>{prd.nombre}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tdTitulo">Contribución marginal</td>
            {contMarginal.map((cont) => (
              <td key={cont}>$ {cont.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td className="tdTitulo">Contribución marginal ponderada</td>
            {contMarginalPon.map((cont) => (
              <td key={cont}>$ {cont.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td className="tdTitulo">
              Contribución marginal ponderada promedio
            </td>
            <td colSpan={productos.length}>$ {CMPP.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>

      <br />
      <h5>
        Punto de equilibrio unidades mezcladas: <strong>{PE.toFixed(2)}</strong>
      </h5>

      <Table responsive={true} className="tablaEmpresas" bordered striped hover size="sm">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Unidades totales</th>
            <th>Ingreso</th>
            <th>CVU</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prd, index) => {
            let unidadesTotales = (PE * proporciones[index]) / 100;
            return (
              <tr key={prd.nombre + "-2"}>
                <td>
                  <strong>{prd.nombre}</strong>
                </td>
                <td>{`${unidadesTotales.toFixed(2)}`}</td>
                <td>$ {(unidadesTotales * prd.precio).toFixed(2)}</td>
                <td>$ {(unidadesTotales * prd.costosTotales()).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <br />
      <h5>Proporción en los ingresos totales</h5>
      <Chart
        width={"auto"}
        height={"500px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={pieChartM()}
        options={{
          is3D: true,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default ContribucionMarginal;
