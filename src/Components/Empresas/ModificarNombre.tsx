import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Empresa from "../Classes/Empresa";
import { agregarEmpresa, eliminarEmpresa } from "../../Redux/Reducers/actions";
import { useHistory } from "react-router";

interface props {
  empresa: Empresa;
}

const ModificarNombre: React.FC<props> = ({ empresa }) => {
  const dispatch = useDispatch();
  const [nuevoNombre, setNuevoNombre] = useState<string>("");
  const history = useHistory();

  const cambiarNombre = () => {
    if (nuevoNombre === "") return;
    let auxEmpresa = empresa;
    auxEmpresa.nombre = nuevoNombre;
    dispatch(eliminarEmpresa(empresa));
    dispatch(agregarEmpresa(empresa));
    history.push(`/empresa/${auxEmpresa.nombre}`);
  };

  return (
    <Form>
      <Form.Group className="empresaInput" controlId="formBasicEmail">
        <Form.Label>Nuevo nombre</Form.Label>
        <Form.Control
          type="text"
          value={nuevoNombre}
          placeholder="Nuevo nombre de la empresa"
          onChange={(e) => {
            if (/^[a-zA-Z0-9_.ÑñáéíóúÁÉÍÓÚüÜ\s]{0,60}$/.test(e.currentTarget.value))
              setNuevoNombre(e.currentTarget.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="m-3"
        onClick={cambiarNombre}
      >
        Aceptar
      </Button>
    </Form>
  );
};

export default ModificarNombre;
