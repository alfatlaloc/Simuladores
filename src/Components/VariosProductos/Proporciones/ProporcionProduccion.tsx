import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Empresa, { Producto } from "../../Classes/Empresa";
import InformacionProporciones from "./InformacionProporciones";

interface props {
  productos: Producto[];
  empresa: Empresa;
  proporciones: number[];
  setProporciones: (prop: number[]) => void;
}

const ProporcionProduccion: React.FC<props> = ({
  productos,
  empresa,
  proporciones,
  setProporciones,
}) => {
  const agregarProporcion = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let newArr = [...proporciones];
    newArr[index] = Number.parseFloat(e.currentTarget.value);

    let sumaProporciones = newArr.reduce((prev, current) => {
      return prev + current;
    });

    if (sumaProporciones <= 100) {
      setProporciones(newArr);
    }
  };

  useEffect(() => {
    if (proporciones.length === productos.length) return;
    setProporciones([]);
    let auxArr: number[] = [];
    productos.forEach((prd) => {
      auxArr.push(0);
    });
    setProporciones(auxArr);
  }, [productos, setProporciones]);

  if (productos.length < 1) return <h4>Aun no se selecciona productos</h4>;
  return (
    <div className="stepCard">
      <h5>Elige los porcentajes de cada producto</h5>
      <p>{JSON.stringify(productos)}</p>
      <p>Eligir porcentajes</p>
      {JSON.stringify(proporciones)}

      {productos.map((prd, index) => {
        return (
          <Form>
            <Form.Group className="mb-3 inputPorcentajes mx-auto">
              <Form.Label key={prd.nombre} className="m-2">
                Proporción {prd.nombre}:{" "}
              </Form.Label>
              <Form.Control
                type="text"
                value={proporciones[index]}
                placeholder="0.0%"
                onChange={(e) => {
                  agregarProporcion(e as any, index);
                }}
              />
            </Form.Group>
          </Form>
        );
      })}
      <InformacionProporciones />
    </div>
  );
};

export default ProporcionProduccion;
