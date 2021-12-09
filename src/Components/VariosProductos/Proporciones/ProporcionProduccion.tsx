import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Empresa, { Producto } from "../../Classes/Empresa";
import { numerosFlotantesConCero } from "../../Common/Validaciones";
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
  const [auxProporciones, setAuxProporciones] = useState<string[]>([]);

  const agregarProporcion = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let newValue = e.currentTarget.value;
    if (!numerosFlotantesConCero(newValue)) return;
    let newArrS = [...auxProporciones];
    newArrS[index] = newValue;

    let newArr = [...proporciones];
    newArr[index] = Number.parseFloat(newValue);

    if (newValue === "") newArr[index] = 0;

    let sumaProporciones = newArr.reduce((prev, current) => {
      return prev + current;
    });

    if (sumaProporciones <= 100) {
      setProporciones(newArr);
      setAuxProporciones(newArrS);
    }
  };

  useEffect(() => {
    if (proporciones.length === productos.length) return;
    setProporciones([]);
    let auxArr: number[] = [];
    let auxArrS: string[] = [];
    productos.forEach((prd) => {
      auxArr.push(0);
      auxArrS.push("0");
    });
    setAuxProporciones(auxArrS);
    setProporciones(auxArr);
  }, [productos, setProporciones, proporciones.length]);

  if (productos.length < 1) return <h4>Aun no se selecciona productos</h4>;
  if (auxProporciones.length > 0)
    return (
      <div className="stepCard">
        <h5>Elige los porcentajes de cada producto</h5>

        {JSON.stringify(proporciones)}
        {productos.map((prd, index) => {
          return (
            <Form onSubmit={(e) => e.preventDefault()} key={prd.nombre}>
              <Form.Group className="mb-3 inputPorcentajes mx-auto">
                <Form.Label className="m-2">{prd.nombre}:</Form.Label>
                <Form.Control
                  type="text"
                  value={auxProporciones[index]}
                  placeholder="0.0%"
                  onChange={(e) => {
                    agregarProporcion(e as any, index);
                  }}
                />
              </Form.Group>
            </Form>
          );
        })}
        <InformacionProporciones
          costosFijos={empresa.costoFijoTotal()}
          proporciones={proporciones}
          productos={productos}
        />
      </div>
    );

  return null;
};

export default ProporcionProduccion;
