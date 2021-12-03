import Chart from "react-google-charts";

interface props {
  intervalo: number[];
  ingresoTotal: number[];
  costosVariablesTotales: number[];
  costosFijos: number;
  puntoEquilibrioUnidades: number;
  puntoEquilibrioPesos: number;
}

const GraficaPuntoEquilibrio: React.FC<props> = ({
  intervalo,
  ingresoTotal,
  costosVariablesTotales,
  costosFijos,
  puntoEquilibrioUnidades,
}) => {
  const acomodarDatos = () => {
    const cabeceras = [
      "Intervalo",
      "Costos Totales",
      "Ingresos Totales",
      { role: "tooltip", type: "string", p: { html: true } },
      "Costos fijos",
    ];
    // two dimensioonal array [[values...], [values...]]
    let array = [];
    array.push(cabeceras);
    let i: number = 0;
    for (i = 0; i < intervalo.length; i++) {
      let row = [];
      row.push(intervalo[i]);
      row.push(costosVariablesTotales[i] + costosFijos);

      row.push(ingresoTotal[i]);
      if (intervalo[i] === puntoEquilibrioUnidades)
        row.push(
          `Unidades: ${intervalo[i].toFixed(2)}
        Costos Totales: $ ${(costosVariablesTotales[i] + costosFijos).toFixed(
          2
        )}
        Ingresos Totales: $ ${ingresoTotal[i].toFixed(2)}`
        );
      else row.push("");
      row.push(costosFijos);
      array.push(row);
    }
    return array;
  };
  return (
    <Chart
      width={"100%"}
      className="minH100vh"
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={acomodarDatos()}
      options={{
        hAxis: {
          title: "Unidades",
        },
        
        vAxis: {
          title: "Dinero",
        },
        series: {
          1: { curveType: "function" },
        },
        explorer: {
          axis: "horizontal",
          keepInBounds: true,
          maxZoomIn: 8.0,
        },
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
};

export default GraficaPuntoEquilibrio;
