import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import Empresa, { Costo, Producto } from "../Classes/Empresa";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

interface props {
  empresa: Empresa;
  show: boolean;
  handleClose: () => void;
}
const ModalUnProducto: React.FC<props> = ({ show, handleClose, empresa }) => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState<string>("");
  const [precio, setPrecio] = useState<string>("");
  const [mprima, setMprima] = useState<string>("");
  const [insumos, setInsumos] = useState<string>("");
  const [mObra, setMObra] = useState<string>("");
  const [comision, setComision] = useState<string>("");
  const [otros, setOtros] = useState<string>("");

  const [renta, setRenta] = useState("");
  const [sueldos, setSueldos] = useState("");
  const [servicios, setServicios] = useState("");
  const [depreciacion, setDepreciacion] = useState("");
  const [otros2, setOtros2] = useState("");

  const history = useHistory();

  const agregarProducto = () => {
    if (precio === "" || Number.parseFloat(precio) === 0) return;
    if (nombre === "") return;
    let costosVariables: Costo[] = [];
    if (mprima)
      costosVariables.push(
        new Costo("Materia prima", Number.parseFloat(mprima))
      );
    if (insumos)
      costosVariables.push(new Costo("Insumos", Number.parseFloat(insumos)));
    if (mObra)
      costosVariables.push(
        new Costo("Mano de obra a destajo", Number.parseFloat(mObra))
      );
    if (comision)
      costosVariables.push(new Costo("Comisión", Number.parseFloat(comision)));
    if (otros)
      costosVariables.push(new Costo("Otros", Number.parseFloat(otros)));

    empresa.agregarProducto(
      new Producto(nombre, Number.parseFloat(precio), costosVariables)
    );

    let costosFijos: Costo[] = [];

    if (renta) costosFijos.push(new Costo("Renta", Number.parseFloat(renta)));

    if (sueldos)
      costosFijos.push(
        new Costo("Sueldos y salarios", Number.parseFloat(sueldos))
      );

    if (servicios)
      costosFijos.push(new Costo("Servicios", Number.parseFloat(servicios)));

    if (depreciacion)
      costosFijos.push(
        new Costo("Depreciación", Number.parseFloat(depreciacion))
      );

    if (otros2) costosFijos.push(new Costo("Otros", Number.parseFloat(otros2)));
    empresa.setCostosFijos(costosFijos);

    dispatch(actualizarEmpresa(empresa));

    history.push("unaempresa");

    setPrecio("0");
    setNombre("");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle">Agregar un producto</Modal.Title>
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
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Materia prima</Form.Label>
            <Form.Control
              type="text"
              name="materiaprima"
              placeholder="Materia prima"
              value={mprima}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setMprima(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Insumos</Form.Label>
            <Form.Control
              type="text"
              name="insumos"
              placeholder="Insumos"
              value={insumos}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setInsumos(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Mano de obra a destajo</Form.Label>
            <Form.Control
              type="text"
              name="manodeobra"
              placeholder="Mano de obra a destajo"
              value={mObra}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setMObra(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Comisión por unidad vendida</Form.Label>
            <Form.Control
              type="text"
              name="comision"
              placeholder="Comisión por unidad vendida"
              value={comision}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setComision(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Otros</Form.Label>
            <Form.Control
              type="text"
              name="otros"
              placeholder="Otros"
              value={otros}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setOtros(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <h5>Costos fijos</h5>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Renta</Form.Label>
            <Form.Control
              type="text"
              name="renta"
              placeholder="Renta"
              value={renta}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setRenta(e.currentTarget.value);
              }}
            />
          </Form.Group>

          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Sueldos y salarios</Form.Label>
            <Form.Control
              type="text"
              name="sueldos"
              placeholder="$ 0.0"
              value={sueldos}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setSueldos(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Servicios</Form.Label>
            <Form.Control
              type="text"
              name="servicios"
              placeholder="$ 0.0"
              value={servicios}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setServicios(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Depreciación</Form.Label>
            <Form.Control
              type="text"
              name="depreciacion"
              placeholder="$ 0.0"
              value={depreciacion}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setDepreciacion(e.currentTarget.value);
              }}
            />
          </Form.Group>
          <Form.Group className="m-2 justify-content-center">
            <Form.Label>Otros</Form.Label>
            <Form.Control
              type="text"
              name="otros2"
              placeholder="$ 0.0"
              value={otros2}
              onChange={(e) => {
                if (/^[0-9]*\.?[0-9]*$/.test(e.currentTarget.value))
                  setOtros2(e.currentTarget.value);
              }}
            />
          </Form.Group>
          Depreciación Otros
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button
          className="buttonPrimary"
          onClick={() => {
            agregarProducto();
            handleClose();
          }}
        >
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUnProducto;
