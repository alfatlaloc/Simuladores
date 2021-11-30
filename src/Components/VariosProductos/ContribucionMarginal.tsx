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
}

const ContribucionMarginal: React.FC<props> = ({
  productos,
  proporciones,
  costosFijos,
  contMarginalPon,
  setContMarginalPon,
  contMarginal,
  setContMarginal,
}) => {
  const [CMPP, setCMPP] = useState<number>(0);
  const [PE, setPE] = useState<number>(0);

  const pieChartM = () => {
    let finalArr = [];
    finalArr.push([
      "Producto",
      "Proporcion",
      { role: "tooltip", type: "string", p: { html: true } },
    ]);
    productos.map((prd, index) => {
      let ingreso = PE * proporciones[index] / 100 * prd.precio;
      finalArr.push([
        prd.nombre,
        ingreso,
        `${prd.nombre}: $ ${ingreso.toFixed(2)}`
      ]);
    });
    return finalArr;
  };

  useEffect(() => {
    if (CMPP !== 0) return;
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
      <h5>Contribucion Marginal</h5>
      <Table className="tablaEmpresas" striped bordered hover>
        <thead>
          <tr>
            <th className="tdTitulo">Producto</th>
            {productos.map((prd) => {
              return <th>{prd.nombre}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tdTitulo">Contribución Marginal</td>
            {contMarginal.map((cont) => (
              <td>$ {cont.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td className="tdTitulo">Contribución Marginal Ponderada</td>
            {contMarginalPon.map((cont) => (
              <td>{cont.toFixed(2)} %</td>
            ))}
          </tr>
          <tr>
            <td className="tdTitulo">
              Contribución Marginal Ponderada Promedio
            </td>
            <td colSpan={productos.length}>{CMPP}</td>
          </tr>
        </tbody>
      </Table>

      <br />
      <h5>
        Punto de equilibrio unidades mezcladas: <strong>{PE.toFixed(4)}</strong>
      </h5>

      <ul className="listaElementos">
        {productos.map((prd, index) => {
          let porcentaje = (PE * proporciones[index]) / 100;
          return (
            <li>
              <strong>{prd.nombre}</strong>
              <ul>
                <li>% participación: {`${porcentaje.toFixed(2)}`}</li>
                <li>Ingreso: {(porcentaje * prd.precio).toFixed(2)}</li>
                <li>CVU: {(porcentaje * prd.costosTotales()).toFixed(2)}</li>
              </ul>
            </li>
          );
        })}
      </ul>

      <br />
      <h5>Proporción en los Ingresos Totales</h5>
      <Chart
        width={"100vw"}
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
