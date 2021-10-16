import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import Empresa, { Costo } from "../Classes/Empresa";
import { useForm } from "../customHooks/useForm";

interface props {
  empresa: Empresa;
}

const FormCosto: React.FC<props> = ({ empresa }) => {
  const { form, handleChange } = useForm(new Costo("default", 0));
  const dispatch = useDispatch();

  const agregarCosto = () => {
    empresa.agregarCostoFijo(form);
    dispatch(actualizarEmpresa(empresa));
  };

  return (
    <Form>
      <Form.Group
        className="mb-3 justify-content-center"
        controlId="formBasicEmail"
      >
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={form.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group
        className="mb-3 justify-content-center"
        controlId="formBasicEmail"
      >
        <Form.Label>Valor</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="text"
          name="valor"
          placeholder="Valor"
          value={form.valor}
          onChange={handleChange}
        />
      </Form.Group>
      <Button className="m-1 buttonPrimary" onClick={agregarCosto}>
        Agregar Costo
      </Button>
    </Form>
  );
};

export default FormCosto;
