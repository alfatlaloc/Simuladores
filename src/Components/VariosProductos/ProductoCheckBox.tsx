import { Form } from "react-bootstrap";
import Empresa, { Producto } from "../Classes/Empresa";

interface props {
  empresa: Empresa;
  productos: Producto[];
  setProductos: (prd: Producto[]) => void;
}
const ProductoCheckBox: React.FC<props> = ({
  empresa,
  productos,
  setProductos,
}) => {
  const agregarProducto = (
    nP: Producto,
    checked: HTMLInputElement["checked"]
  ) => {
    if (checked) setProductos([...productos, nP]);
    else
      setProductos(
        productos.filter((prd) => {
          if (prd.nombre !== nP.nombre) return prd;
        })
      );
  };

  return (
    <Form className="align-items-center">
      <Form.Group className="mb-3 justify-content-center">
        <Form.Label>Seleccionar productos</Form.Label>
        <div className="checkboxContainer">
          {empresa.productos.map((producto) => (
            <Form.Check
              key={`${empresa.nombre} ${producto.nombre}`}
              className="checkBox"
              onClick={(event) => {
                agregarProducto(producto, event.currentTarget.checked);
              }}
              id={`default-${producto.nombre}`}
              label={`default ${producto.nombre}`}
            />
          ))}
        </div>
      </Form.Group>
    </Form>
  );
};

export default ProductoCheckBox;
