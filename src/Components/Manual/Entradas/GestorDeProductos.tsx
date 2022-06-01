import img1 from "../../../img/ManualUsuario/GestorProductos/1.png";
import img2 from "../../../img/ManualUsuario/GestorProductos/2.png";
import img3 from "../../../img/ManualUsuario/GestorProductos/3.png";
import img4 from "../../../img/ManualUsuario/GestorProductos/4.png";

const GestorDeProductos = () => {
  return (
    <section id="GestorDeProductos" className="manual">
      <h3>2. Gestor de Productos</h3>
      <p className="maxWidth-800">
        En esta sección se crean, modifican y eliminan los productos dentro de
        una empresa. Para acceder a esta sección hay que presionar el botón de
        editar en cualquier producto de alguna empresa.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img1}
        alt="2. Gestor de Productos"
      />

      <h5>2.1 Agregar costo variable</h5>
      <p className="maxWidth-800">
        Una vez en la sección gestor de productos hay que cambiar a la pestaña
        costos variables. Aqui se debe colocar un nombre y precio al nuevo
        costo. El nombre no pude ser igual al de otro costo variable en el mismo
        producto. Los costos variables existentes se van agregando a la tabla de
        abajo.
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img2}
        alt="2.1 Agregar costo variable"
      />

      <h5>2.2 Cambiar nombre</h5>
      <p className="maxWidth-800">
        Una vez en la sección gestor de productos hay que cambiar a la pestaña
        Cambiar nombre. Ingresar un nuevo nombre que no exista en la misma
        empresa y presionar "Aceptar".
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img3}
        alt="2.2 Cambiar nombre"
      />

      <h5>2.3 Cambiar precio</h5>
      <p className="maxWidth-800">
        Una vez en la sección gestor de productos hay que cambiar a la pestaña:
        Cambiar precio. aquí se ingresa el nuevo precio, después presiona el
        botón "Aceptar".
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img4}
        alt="2.3 Cambiar precio"
      />
    </section>
  );
};

export default GestorDeProductos;
