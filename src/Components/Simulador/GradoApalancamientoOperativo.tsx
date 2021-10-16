import Button from "@restart/ui/esm/Button";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
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
  const [inicial, setInicial] = useState<number>(0);
  const [final, setFinal] = useState<number>(0);
  const [incrementoUnidades, setIncrementoUnidades] = useState<number>(0);
  const [incrementoUtilidades, setIncrementoUtilidades] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < unidades.length; i++) {
      if (unidades[i] > puntoEquilibrioUnidades) {
        setInicial(unidades[i]);
        if (unidades[i+1])
          setFinal(unidades[i+1]);
        break;
      }
    }
  }, [inicial]);
  const calcularApalancamiento = () => {
    if (inicial < 1 || final < 1) return;

    setIncrementoUnidades(
      ((unidades[final] - unidades[inicial]) / unidades[inicial]) * 100
    );

    setIncrementoUtilidades(
      ((utilidades[final] - utilidades[inicial]) / utilidades[inicial]) * 100
    );
  };

  return (
    <div>
      <h2>Apalancamiento operativo</h2>

      <Form className="align-items-center">
        <Form.Group className="mb-3 justify-content-center">
          <Form.Label>Empresa</Form.Label>

          <Form.Select
            aria-label="Intervalo Menor"
            className="select"
            onChange={(e) => setInicial(Number.parseInt(e.currentTarget.value))}
          >
            {unidades.map((unidad, index) => {
              if (unidad > puntoEquilibrioUnidades)
                return <option value={index}>{unidad}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 justify-content-center">
          <Form.Label>Empresa</Form.Label>

          <Form.Select
            aria-label="Intervalo Mayor"
            className="select"
            onChange={(e) => {
              if (Number.parseInt(e.currentTarget.value) > inicial)
                setFinal(Number.parseInt(e.currentTarget.value));
            }}
          >
            {unidades.map((unidad, index) => {
              if (unidad > inicial)
                return <option value={index}>{unidad}</option>;
            })}
          </Form.Select>
        </Form.Group>
      </Form>

      <p>
        Unidades 1: {unidades[inicial]} Utilidades 1: ${utilidades[inicial]}
      </p>
      <br />
      <p>
        Unidades 2: {unidades[final]} Utilidades 2: ${utilidades[final]}
      </p>
      <br />
      <Button onClick={calcularApalancamiento}> Calcula Apalancamiento</Button>

      <p>Incremento unidades: {incrementoUnidades}%</p>
      <p>Incremento utilidades: {incrementoUtilidades}%</p>
    </div>
  );
};

export default GradoApalancamientoOperativo;
