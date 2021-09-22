import Empresa from "./Classes/Empresa";

interface props {
  empresa: Empresa;
}

const TablaUnidades: React.FC<props> = ({ empresa }) => {
  return (
    <table>
      <tr>
        <th>Ingreso Neto</th>
        <td>1000</td>
        <td>{1000*empresa.costosFijos}</td>
        <td>data</td>
      </tr>
      <tr>
        <th>Costo Variable</th>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
      <tr>
        <th>Margen de contribución</th>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
    </table>
  );
};

export default TablaUnidades;
