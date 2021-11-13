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
    else setProductos(productos.filter((prd) => prd.nombre !== nP.nombre));
  };

  return (
    <Form className="align-items-center">
      <Form.Group className="mb-3 justify-content-center">
        <Form.Label>Seleccionar productos</Form.Label>
        <div className="checkboxContainer">
          {empresa.productos.map((producto) => {
            let existe: boolean = productos.some(
              (prd) => prd.nombre === producto.nombre
            );

            return (
              <Form.Check
                key={`${empresa.nombre} ${producto.nombre}`}
                className="checkBox"
                checked={existe}
                onClick={(event) => {
                  agregarProducto(producto, event.currentTarget.checked);
                }}
                id={`default-${producto.nombre}`}
                label={`default ${producto.nombre}`}
              />
            );
          })}
        </div>
      </Form.Group>
    </Form>
  );
};

export default ProductoCheckBox;
