import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Empresa, { Producto } from "../Classes/Empresa";
import { useForm } from "../customHooks/useForm";
import { modalInterface } from "../Interfaces/Components";

interface formProductoProps {
  empresa: Empresa;
}

const FormProducto: React.FC<formProductoProps> = ({ empresa }) => {
  const producto = new Producto("a", 0);
  const dispatch = useDispatch();
  const { form, handleChange } = useForm(producto);

  const agregarProducto = () => {
    let nE = empresa;


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
      <Button
        variant="light"
        className="m-2"
        onClick={agregarProducto}
      >
        Agregar Producto
      </Button>
    </Form>
  );
};

const empresaForm: React.FC<modalInterface> = ({ Obj, toggle }) => {
  return (
    <div>
      <p>Nombre: {Obj.nombre}</p>

      <p>Productos</p>
      <FormProducto empresa={Obj} />

      <p>Costos Fijos</p>

      <Button variant="light" className="m-2">
        Agregar costo fijo
      </Button>

      <br />

      <button>Aceptar</button>
    </div>
  );
};

export default empresaForm;
