import { Form } from "react-bootstrap";
import Empresa, { Producto } from "../Classes/Empresa";

interface props {
  handleChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  empresa: Empresa;
  producto: Producto;
  empresas: Empresa[];
  setProducto : (p : Producto) => void;
}
const FormEyP: React.FC<props> = ({
  handleChange,
  empresa,
  producto,
  empresas,
  setProducto
}) => {
  return (
    <Form className="align-items-center">
      <Form.Group className="mb-3 justify-content-center">
        <Form.Label>Empresa</Form.Label>
        <Form.Select
          aria-label="Empresa"
          className="select"
          value={empresa.nombre}
          onChange={(e) => handleChange(e)}
        >
          {empresas.map((emp) => {
            return (
              <option key={emp.nombre} value={emp.nombre}>
                {emp.nombre}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 justify-content-center">
        <Form.Label>Producto</Form.Label>
        <Form.Select
          aria-label="Producto"
          className="select"
          value={producto.nombre}
          onChange={(e) => {
            let res = empresa.productos.find(
              (pr) => pr.nombre === e.currentTarget.value
            );
            if (res) setProducto(res);
          }}
        >
          {empresa.productos.map((prd) => {
            return (
              <option key={prd.nombre} value={prd.nombre}>
                {prd.nombre}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default FormEyP;
