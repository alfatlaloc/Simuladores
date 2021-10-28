import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import Empresa, { Producto } from "../Classes/Empresa";

interface props {
  empresa: Empresa;
}

const FormProducto: React.FC<props> = ({ empresa }) => {
  const [nombre, setNombre] = useState<string>("");
  const [precio, setPrecio] = useState<string>("");
  const dispatch = useDispatch();

  const agregarProducto = () => {
    if (precio === "" || Number.parseInt(precio) === 0) return;
    if (nombre === "") return;
    empresa.agregarProducto(new Producto(nombre, Number.parseInt(precio)));
    dispatch(actualizarEmpresa(empresa));
  };

  return (
    <Form>
      <Form.Group className="mb-3 justify-content-center">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => {
            if (
              /^[a-zA-Z0-9_.ÑñáéíóúÁÉÍÓÚüÜ\s]{0,60}$/.test(
                e.currentTarget.value
              )
            )
              setNombre(e.currentTarget.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3 justify-content-center">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="text"
          name="precio"
          placeholder="Precio"
          value={precio}
          onChange={(e) => {
            if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
              setPrecio(e.currentTarget.value);
          }}
        />
      </Form.Group>
      <Button className="m-1 buttonPrimary" onClick={agregarProducto}>
        Agregar producto
      </Button>
    </Form>
  );
};

export default FormProducto;
