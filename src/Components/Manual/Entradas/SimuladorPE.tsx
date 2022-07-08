import img1 from "../../../img/ManualUsuario/SimuladorPE/1.png";
import img2 from "../../../img/ManualUsuario/SimuladorPE/2.png";
import img3 from "../../../img/ManualUsuario/SimuladorPE/3.png";
import img4 from "../../../img/ManualUsuario/SimuladorPE/4.png";
import img5 from "../../../img/ManualUsuario/SimuladorPE/5.png";
import img6 from "../../../img/ManualUsuario/SimuladorPE/6.png";

const SimuladorPE = () => {
  return (
    <section id="SimuladorPE" className="manual">
      <h3>3. Cálculo del punto de equilibrio</h3>
      <p className="maxWidth-800">
        En esta sección se trabaja con los productos ingresados en la
        aplicación, para poder utilizarla debe de haber por lo menos un producto
        válido que tenga todos los datos necesarios para generar la tabla y la
        gráfica. En caso de que no haya empresas válidas ni productos la
        aplicación desplegará un texto con dicho error.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img1}
        alt="3. Simulador punto de Equilibrio"
      />

      <h5>3.1 Seleccionar un producto</h5>
      <p className="maxWidth-800">
        En las dos listas mostradas aqui podemos elegir la empresa,
        posteriormente se mostrarán todos los produtos que tiene dicha empresa.
        Solo hay que elegir algún producto y su información se mostrará en la
        tabla de abajo.
      </p>
      <p className="maxWidth-800">
        Si hemos agregado una empresa y no se muestra en esta sección es por que
        no tiene ningún producto agregado o no tiene ningún costo fijo.
        <br />
        Si hemos agregado un producto y éste no se muestra es porque le hacen
        falta costos variables.
        <br />
        Debajo de la tabla, se muestran cálculos e información a modo de guía,
        para poder tener una mejor idea de que rangos usar.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img2}
        alt="3.1 Seleccionar un producto"
      />

      <h5>3.2 Rangos e intervalo</h5>
      <p className="maxWidth-800">
        En esta sección se ingresa dónde queremos que inicie y termine la tabla
        a generar, igualmente debemos de poner el intervalo en el que deseemos
        que se muestren los datos.
        <br />
        Hay dos formas de generarla, la primera es escogiendo un valor inicial (
        por defecto 0 ) y un valor final ( por defecto el entero superior
        inmediato al punto de equilibrio en unidades), o bien colocando una
        utilidad deseada, esto último calculará el valor final que nos brinde
        dicha utilidad, para posteriormente presionar "Calcular datos".
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img3}
        alt="3.2 Rangos e intervalo"
      />

      <h5>3.3 Tabla de resultados</h5>
      <p className="maxWidth-800">
        Aqui se muestran los resultados calculados con base en los rangos
        colocados anteriormente. El punto de equilibrio se resalta con verde,
        para dezplazarnos en la tabla hay que usar el scroll inferior o bien
        desplzarnos hacia la derecha con el dedo.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img4}
        alt="3.3 Tabla de resultados"
      />

      <h5>3.4 Gráfica de resultados</h5>
      <p className="maxWidth-800">
        Esta gráfica respresenta la tabla mostrada, es interactiva por lo que
        podemos acercarnos o alejarnos a los puntos que deseemos. Es posible
        acercarse/alejarse con el scroll y desplazarnos a la izquierda o derecha
        arrastrando el puntero.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img5}
        alt="3.4 Gráfica de resultados"
      />

      <h5>3.5 Apalancamiento operativo</h5>
      <p>
        En la pestaña de "Apalancamiento operativo", para usar esta funcion
        debemos de asegurarnos de haber generado previamente la tabla y la
        gráfica, de lo contrario mostrará que se deben de generar.
        <br />
        Aquí se visualizan dos listas, el intervalo inicial y el final, cada vez
        que cambiemos el inicial los valores de intervalo final se recorrerán de
        forma que siempre sea mayor. Después de escoger los intervalos deseados,
        simplemente presionamos "Calcular" y los resultados se mostrarán abajo.
      </p>
      <img
        className="max-width-1000 mt-4 mb-3"
        src={img6}
        alt="3.5 Apalancamiento operativo"
      />
    </section>
  );
};

export default SimuladorPE;
