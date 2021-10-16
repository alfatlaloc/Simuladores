import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actualizarEmpresa } from "../../Redux/Reducers/actions";
import Empresa, { Producto } from "../Classes/Empresa";
import { useForm } from "../customHooks/useForm";

interface props {
  empresa: Empresa;
}

const FormProducto: React.FC<props> = ({ empresa }) => {
  const { form, handleChange } = useForm(new Producto());
  const dispatch = useDispatch();

  const agregarProducto = () => {
    empresa.agregarProducto(new Producto(form.nombre, form.precio));
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
          value={form.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 justify-content-center">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          className="empresaInputForm"
          type="text"
          name="precio"
          placeholder="Precio"
          value={form.precio}
          onChange={handleChange}
        />
      </Form.Group>
      <Button className="m-1 buttonPrimary" onClick={agregarProducto}>
        Agregar Producto
      </Button>
    </Form>
  );
};

export default FormProducto;
