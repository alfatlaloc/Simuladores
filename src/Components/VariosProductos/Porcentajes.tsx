import { useEffect, useState } from "react";
import Empresa, { Producto } from "../Classes/Empresa";

interface props {
  productos: Producto[];
  empresa: Empresa;
}
const Porcentajes: React.FC<props> = ({ productos, empresa }) => {
  const [porcentajes, setPorcentajes] = useState<number[]>([]);

  useEffect(() => {
    setPorcentajes([]);
    let auxArr: number[] = [];
    productos.forEach((prd) => {
      auxArr.push(0);
    });

    setPorcentajes(auxArr);
  }, [productos]);

  if (productos.length < 1) return <h4>Aun no se selecciona productos</h4>;
  return (
    <div className="pagina">
      <h5>Elige los porcentajes de cada producto</h5>
      <p>{JSON.stringify(productos)}</p>
      <p>Eligir porcentajes</p>
      {JSON.stringify(porcentajes)}
    </div>
  );
};

export default Porcentajes;
