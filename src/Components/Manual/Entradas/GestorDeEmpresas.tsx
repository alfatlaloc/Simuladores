import img1 from "../../../img/ManualUsuario/GestorEmpresas/1.png";
import img2 from "../../../img/ManualUsuario/GestorEmpresas/2.png";
import img3 from "../../../img/ManualUsuario/GestorEmpresas/3.png";
import img4 from "../../../img/ManualUsuario/GestorEmpresas/4.png";
import img5 from "../../../img/ManualUsuario/GestorEmpresas/5.png";
import img6 from "../../../img/ManualUsuario/GestorEmpresas/6.png";
import img7 from "../../../img/ManualUsuario/GestorEmpresas/7.png";
import img8 from "../../../img/ManualUsuario/GestorEmpresas/8.png";

const GestorDeEmpresas = () => {
  return (
    <section id="GestorDeEmpresas" className="manual">
      <h3>1. Gestor de empresas</h3>
      <p className="maxWidth-800">
        En esta sección se crean, modifican y eliminan las empresas con las que
        trabaja la aplicación.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img1}
        alt="Pantalla principal gestor usuarios"
      />

      <h5>1.1 Crear empresa</h5>
      <p className="maxWidth-800">
        Para crear una empresa solo hay que escribir dentro del recuadro un
        nombre válido, este nombre no debe contener caracteres especiales y no
        podrá tener una longitud mayor a 60. Una vez escrito el nombre hay que
        dar click en el botón "Crear empresa".
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img2}
        alt="1.1 Crear empresa"
      />

      <h5>1.2 Agregar primer producto y costos fijos</h5>
      <p className="maxWidth-800">
        Al crear una empresa aparecerá un modal para agregar un primer producto,
        esto es opcional. En caso de querer agregar un producto, se proporcionan
        campos genéricos comunmente utilizados. Para agregar alguno, solo hay que
        poner el valor deseado, los campos vacíos se ignorarán.
      </p>
      <br />
      <p className="maxWidth-800">
        En la parte inferior del modal se mostrarán campos con costos fijos
        comunes, de igual modo los campos vacíos se ignorarán y si no agregamos
        ninguno, posteriormente deberemos de agregarlos en la opción de "Costos
        fijos" dentro de la empresa.
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img3}
        alt="1.2 Agregar primer producto y costos fijos"
      />

      <h5>1.3 Modificar una empresa </h5>
      <p className="maxWidth-800">
        Para agregar, eliminar o modificar productos y costos variables dentro
        de una empresa hay que presionar el icono del lápiz de la empresa
        deseada dentro de la tabla.
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img4}
        alt="1.3 Modificar una empresa"
      />

      <h5>1.4 Eliminar una empresa </h5>
      <p className="maxWidth-800">
        Para eliminar una empresa solo hay que presionar el botón rojo en la
        fila de la empresa que queramos eliminar.
      </p>

      <img
        className="max-width-600 mt-4 mb-3"
        src={img5}
        alt="1.4 Eliminar una empresa"
      />

      <h5>1.5 Agregar producto </h5>
      <p className="maxWidth-800">
        Una vez en el menú de modificar empresa, para agregar un nuevo producto
        hay que escribir su nombre y su precio. Esto lo agregará
        a la tabla de abajo donde posteriormente se podrá modificar o eliminar
        (ver explicación detallada en el punto 2).
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img6}
        alt="1.5 Agregar producto"
      />

      <h5>1.6 Agregar costo fijo </h5>
      <p className="maxWidth-800">
        Una vez en el menú de modificar empresa, hay que cambiarnos a la pestaña
        de "Costos fijos", en donde tenemos los campos para agregar un costo,
        debajo se mostrarán los costos existentes en forma de tabla, cada uno
        tiene un botón para eliminarlo. Para crear un nuevo costo hay que
        presionar "Agregar costo", el nuevo costo deberá tener un nombre que no
        exista, de lo contrario no se agregará.
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img7}
        alt="1.6 Agregar costo fijo"
      />

      <h5>1.7 Cambiar nombre</h5>
      <p className="maxWidth-800">
        Una vez en el menú de modificar empresa, hay que cambiarnos a la pestaña
        de "Cambiar nombre", aqui simplemente hay que ingresar un nuevo nombre que
        no sea igual al anterior o al de otra de las ya existentes.
      </p>
      <img
        className="max-width-600 mt-4 mb-3"
        src={img8}
        alt="1.7 Cambiar nombre"
      />
    </section>
  );
};

export default GestorDeEmpresas;
