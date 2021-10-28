import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { eliminarEmpresa, agregarEmpresa } from "../../Redux/Reducers/actions";
import Empresa, { Producto } from "../Classes/Empresa";

interface props {
  empresa: Empresa;
  producto: Producto;
}

const ModificarNombreProducto: React.FC<props> = ({ empresa, producto }) => {
  const dispatch = useDispatch();
  const [nuevoNombre, setNuevoNombre] = useState<string>("Nuevo nombre");
  const history = useHistory();

  const cambiarNombre = () => {
    if (nuevoNombre === "" || nuevoNombre === "Nuevo nombre") return;
    let auxEmpresa = empresa;
    let auxProducto = producto;
    auxProducto.nombre = nuevoNombre;

    auxEmpresa.productos.map((producto) => {
      if (producto.nombre !== auxProducto.nombre) return producto;
      return auxProducto;
    });
    dispatch(eliminarEmpresa(empresa));
    dispatch(agregarEmpresa(empresa));
    history.push(`/empresa/${auxEmpresa.nombre}/producto/${nuevoNombre}`);
  };

  return (
    <Form>
      <Form.Group className="empresaInput" controlId="formBasicEmail">
        <Form.Label>Nuevo nombre del producto</Form.Label>
        <Form.Control
          type="text"
          value={nuevoNombre}
          placeholder="Nueva nombre"
          onChange={(e) => {
            if (/^[a-zA-Z0-9_.ÑñáéíóúÁÉÍÓÚüÜ\s]{0,60}$/.test(e.currentTarget.value))
              setNuevoNombre(e.currentTarget.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        className="m-3"
        onClick={cambiarNombre}
      >
        Aceptar
      </Button>
    </Form>
  );
};

export default ModificarNombreProducto;
