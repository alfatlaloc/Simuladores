import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
/**
 * Costo Promedio por unidad
 * (De un producto)
 *  CostosVariables + (CostosFijos/Unidades)
 *  Supongo que las unidades es un campo que puede introducir el usuario
 *
 * Apalancamiento
 *
 * Se seleccionan dos intervalos de unidades producidas
 * A --> Intervalo Mayor
 * B --> Intervalo Menos
 * Se construyen dos parámetros
 * p1 = A.ingresoNeto - B.ingresoNeto / B.ingresoNeto
 * p2 = A.unidades - B.unidades / B.unidades
 */
interface props {
  utilidades: number[];
  unidades: number[];
  puntoEquilibrioUnidades: number;
}

const GradoApalancamientoOperativo: React.FC<props> = ({
  utilidades,
  unidades,
  puntoEquilibrioUnidades,
}) => {
  const [inicial, setInicial] = useState<number>(0); /** Posicion en I */
  const [final, setFinal] = useState<number>(0);
  const [incrementoUnidades, setIncrementoUnidades] = useState<number>(0);
  const [incrementoUtilidades, setIncrementoUtilidades] = useState<number>(0);

  useEffect(() => {
    if (inicial === unidades.length - 1) return;
    if (inicial === 0)
      for (let i = 0; i < unidades.length; i++)
        if (unidades[i] > puntoEquilibrioUnidades) {
          setInicial(i);
          setFinal(unidades.length - 1);
        }

    return;
  }, [inicial, puntoEquilibrioUnidades, unidades]);

  const calcularApalancamiento = () => {
    if (inicial < 1 || final < 1) return;

    setIncrementoUnidades(
      ((unidades[final] - unidades[inicial]) / unidades[inicial]) * 100
    );

    setIncrementoUtilidades(
      ((utilidades[final] - utilidades[inicial]) / utilidades[inicial]) * 100
    );
  };
  if (puntoEquilibrioUnidades)
    return (
      <div>
        <h2>Apalancamiento operativo</h2>

        <Form className="align-items-center">
          <Form.Group className="mb-3 justify-content-center">
            <Form.Label>Intervalo Menor</Form.Label>

            <Form.Select
              aria-label="Intervalo Menor"
              className="select"
              value={inicial}
              onChange={(e) => {
                setInicial(Number.parseInt(e.currentTarget.value));
              }}
            >
              {unidades.map((unidad, index) => {
                if (
                  unidad > puntoEquilibrioUnidades &&
                  index !== unidades.length - 1
                )
                  return <option value={index}>{unidad}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 justify-content-center">
            <Form.Label>Intervalo Mayor</Form.Label>

            <Form.Select
              aria-label="Intervalo Mayor"
              className="select"
              value={final}
              onChange={(e) => {
                if (Number.parseInt(e.currentTarget.value) > inicial)
                  setFinal(Number.parseInt(e.currentTarget.value));
              }}
            >
              {unidades.map((unidad, index) => {
                if (index > inicial)
                  return <option value={index}>{unidad}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Form>
        <Button onClick={calcularApalancamiento} className="buttonPrimary m-3">
          Calcular
        </Button>

        <p>
          <strong>Unidades 1:</strong> {unidades[inicial]}{" "}
          <strong>Utilidades 1:</strong> $ {utilidades[inicial]}
        </p>
        <br />
        <p>
          <strong>Unidades 2:</strong> {unidades[final]}{" "}
          <strong>Utilidades 2:</strong> ${utilidades[final]}
        </p>
        <br />

        <p>
          <strong>Incremento unidades:</strong> {incrementoUnidades.toFixed(4)}%
        </p>
        <p>
          <strong>Incremento utilidades:</strong>{" "}
          {incrementoUtilidades.toFixed(4)}%
        </p>
      </div>
    );
  return <p>Aun no se han calculado datos</p>;
};

export default GradoApalancamientoOperativo;
