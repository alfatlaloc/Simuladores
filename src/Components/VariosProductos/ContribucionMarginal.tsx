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
    finalArr.push(["Producto", "Proporcion"]);
    productos.map((prd, index) => {
      finalArr.push([prd.nombre, ((PE * contMarginalPon[index]))]);
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
    <div>
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
              <td>$ {cont}</td>
            ))}
          </tr>
          <tr>
            <td className="tdTitulo">Contribución Marginal Ponderada</td>
            {contMarginalPon.map((cont) => (
              <td>{cont} %</td>
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
      <h5>Punto de equilibrio unidades mezcladas</h5>
      <p>{PE}</p>

      {productos.map((prd, index) => {
        return <p>{`${prd.nombre}: ${(PE * proporciones[index]) / 100}`}</p>;
      })}

      <Chart
        width={"100vh"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={pieChartM()}
        options={{
          title: "Proporcion unidades",
          is3D:true,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default ContribucionMarginal;
