import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import Empresa, { Producto } from "../Classes/Empresa";
import { useDispatch } from "react-redux";

interface props {
  empresa: Empresa;
  show: boolean;
  handleClose: () => void;
}
const ModalUnProducto: React.FC<props> = ({ show, handleClose, empresa }) => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState<string>("");
  const [precio, setPrecio] = useState<string>("");

  const agregarProducto = () => {
    if (precio === "" || Number.parseFloat(precio) === 0) return;
    if (nombre === "") return;
    empresa.agregarProducto(new Producto(nombre, Number.parseFloat(precio)));
    dispatch(actualizarEmpresa(empresa));
    setPrecio("0");
    setNombre("");
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar un producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <h5>Datos del prodcuto</h5>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
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

          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Precio</Form.Label>
            <Form.Control
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

          <h5>Costos variables</h5>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button className="buttonPrimary" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUnProducto;
