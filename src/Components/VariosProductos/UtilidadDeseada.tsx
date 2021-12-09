import { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import Empresa, { Producto } from "../Classes/Empresa";
import { numerosFlotantesConCero } from "../Common/Validaciones";

interface props {
  empresa: Empresa;
  productos: Producto[];
  proporciones: number[];
  CMPP: number;
}

const UtilidadDeseada: React.FC<props> = ({
  empresa,
  CMPP,
  productos,
  proporciones,
}) => {
  const [utilidadD, setUtilidadD] = useState<string>("0");
  const [PEU, setPEU] = useState<number>(0);
  const [unidades, setUnidades] = useState<number[]>([]);

  useEffect(() => {
    if (utilidadD === "") return;
    let value = 0;
    value = Number.parseFloat(utilidadD);
    let auxPEU = (empresa.costoFijoTotal() + value) / CMPP;

    let auxUnidades: number[] = [];
    proporciones.forEach((pro) => {
      auxUnidades.push((auxPEU * pro) / 100);
    });
    setUnidades(auxUnidades);
    setPEU(auxPEU);
  }, [utilidadD, empresa, proporciones, CMPP]);

  if (unidades.length > 0)
    return (
      <div className="pagina">
        <h4>Utilidad deseada</h4>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3 inputPorcentajes mx-auto">
            <Form.Label className="m-2">Utilidad</Form.Label>
            <Form.Control
              type="text"
              value={utilidadD}
              placeholder="0.0%"
              onChange={(e) => {
                let newValue = e.currentTarget.value;
                if (!numerosFlotantesConCero(newValue)) return;
                setUtilidadD(newValue);
              }}
            />
          </Form.Group>
        </Form>

        <h5> Punto de equilibrio en unidades: {PEU}</h5>
        <Table className="tablaEmpresas" bordered striped hover size="sm">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Unidades</th>
              <th>Ingreso</th>
              <th>Costo variable</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prd, index) => {
              return (
                <tr key={prd.nombre}>
                  <td>{prd.nombre}</td>
                  <td>{unidades[index].toFixed(2)}</td>
                  <td>$ {(unidades[index] * prd.precio).toFixed(2)}</td>
                  <td>
                    $ {(unidades[index] * prd.costosTotales()).toFixed(2)}
                  </td>
                </tr>
              );
            })}

            <tr>
              <td className="tdTitulo">Total</td>
              <td>{unidades.reduce((prev, current) => prev + current)}</td>

              <td>
                ${" "}
                {unidades
                  .reduce(
                    (partial_sum, element, index) =>
                      partial_sum + element * productos[index].precio,
                    0
                  )
                  .toFixed(2)}
              </td>

              <td>
                ${" "}
                {unidades
                  .reduce(
                    (partial_sum, element, index) =>
                      partial_sum + element * productos[index].costosTotales(),
                    0
                  )
                  .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );

  return null;
};

export default UtilidadDeseada;
