import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { agregarEmpresa, eliminarEmpresa } from "../../Redux/Reducers/actions";
import Empresa, { Producto } from "../Classes/Empresa";

interface props {
  empresa: Empresa;
  producto: Producto;
}

const ModificarPrecioProducto: React.FC<props> = ({ empresa, producto }) => {
  const dispatch = useDispatch();
  const [nuevoPrecio, setNuevoPrecio] = useState<string>("");
  const history = useHistory();

  const cambiarPrecio = () => {
    if (nuevoPrecio === "") return;
    let auxEmpresa = empresa;
    let auxProducto = producto;
    auxProducto.precio = Number.parseFloat(nuevoPrecio);

    if (isNaN(auxProducto.precio)) return;

    auxEmpresa.productos.map((producto) => {
      if (producto.nombre !== auxProducto.nombre) return producto;
      return auxProducto;
    });

    dispatch(eliminarEmpresa(empresa));
    dispatch(agregarEmpresa(empresa));
    history.push(`/empresa/${auxEmpresa.nombre}`);
  };

  return (
    <Form>
      <Form.Group className="empresaInput" controlId="formBasicEmail">
        <Form.Label>Nuevo precio del producto</Form.Label>
        <Form.Control
          type="text"
          value={nuevoPrecio}
          placeholder="Nuevo precio"
          onChange={(e) => {
            if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
              setNuevoPrecio(e.currentTarget.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        className="m-3"
        onClick={cambiarPrecio}
      >
        Aceptar
      </Button>
    </Form>
  );
};

export default ModificarPrecioProducto;
