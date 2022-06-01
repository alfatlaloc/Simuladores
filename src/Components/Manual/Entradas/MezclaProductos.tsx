import img1 from "../../../img/ManualUsuario/Mezcla/1.png";
import img2 from "../../../img/ManualUsuario/Mezcla/2.png";
import img3 from "../../../img/ManualUsuario/Mezcla/3.png";
import img4 from "../../../img/ManualUsuario/Mezcla/4.png";

const MezclaProductos = () => {
  return (
    <section id="MezclaProductos" className="manual">
      <h3>4. Mezcla de productos</h3>

      <p className="maxWidth-800">
        En esta sección podemos generar la mezcla de varios productos. Debemos
        de seleccionar alguna empresa, para que un producto dentro de dicha
        empresa aparezca debe de tener todos los datos necesarios. Para avanzar
        deben de haber por lo menos dos productos seleccionados.
      </p>
      <p className="maxWidth-800">
        Para movernos a través de los diferentes pasos usaremos las flechas que
        aparecen en la parte superior.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img1}
        alt="4. Mezcla de productos"
      />

      <h5>4.1 Eligir porcentajes de cada producto</h5>
      <p className="maxWidth-800">
        En este paso hay que asignar el porcentaje deseado a cada producto, cada
        uno debe de ser mayor a 0 y la suma de todos debe de ser el 100% para
        pasar al siguiente paso.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img2}
        alt="4. Mezcla de productos"
      />

      <h5>4.2 Contribución marginal</h5>
      <p className="maxWidth-800">
        Este paso solo muestra información sobre la contribución marginal y una
        gráfica que representa la contribución de cada producto.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img3}
        alt="4. Mezcla de productos"
      />

      <h5>4.3 Utilidad deseada</h5>
      <p className="maxWidth-800">
        Si se desea calcular utilidad a lo ya mostrado, se debe de color la
        ganancia que se desea obtener, lo que generara la tabla de abajo de
        acuerdo al valor ingresado.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img4}
        alt="4. Mezcla de productos"
      />
    </section>
  );
};

export default MezclaProductos;
