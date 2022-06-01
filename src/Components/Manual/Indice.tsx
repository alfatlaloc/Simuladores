import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import GestorDeEmpresas from "./Entradas/GestorDeEmpresas";
import GestorDeProductos from "./Entradas/GestorDeProductos";
import MezclaProductos from "./Entradas/MezclaProductos";
import SimuladorPE from "./Entradas/SimuladorPE";

const Indice = () => {
  const history = useHistory();
  useEffect(() => {
    if (!window.location.href.includes("#")) return;
    let tokens = window.location.href.split("#");
    let id = tokens[tokens.length - 1];
    let element = document.getElementById(id);

    if (element)
      window.scroll({
        top: element.getBoundingClientRect().y - 60,
        left: 0,
        behavior: "smooth",
      });
  });

  return (
    <>
      <section id="indice" className="manual">
        <section id="cardI">
          <div>
            <h5>
              <span
                onClick={() => {
                  history.push("/manual#GestorDeEmpresas");
                }}
              >
                1. Gestor de empresas
              </span>
            </h5>
            <ul className="listaManual">
              <li>1.1 Crear empresa</li>
              <li>1.2 Agregar primer producto y costos fijos</li>
              <li>1.3 Modificar una empresa</li>
              <li>1.4 Eliminar empresa</li>
              <li>1.5 Agregar producto</li>
              <li>1.6 Agregar costo fijo</li>
              <li>1.7 Cambiar nombre</li>
            </ul>
          </div>

          <div>
            <h5>
              <span
                onClick={() => {
                  history.push("/manual#GestorDeProductos");
                }}
              >
                2. Gestor de productos
              </span>
            </h5>
            <ul className="listaManual">
              <li>2.1 Agregar costos variables</li>
              <li>2.2 Cambiar nombre</li>
              <li>2.3 Cambiar precio</li>
            </ul>
          </div>

          <div>
            <h5>
              <span
                onClick={() => {
                  history.push("/manual#SimuladorPE");
                }}
              >
                3. Cálculo del punto de equilibrio
              </span>
            </h5>
            <ul className="listaManual">
              <li>3.1 Seleccionar un producto</li>
              <li>3.2 Rangos e intervalo</li>
              <li>3.3 Tabla de resultados</li>
              <li>3.4 Gráfica de resultados</li>
              <li>3.5 Apalancamiento operativo</li>
            </ul>
          </div>

          <div>
            <h5>
              <span
                onClick={() => {
                  history.push("/manual#MezclaProductos");
                }}
              >
                4. Mezcla de productos
              </span>
            </h5>
            <ul className="listaManual">
              <li>4.1 Eligir porcentajes de cada producto</li>
              <li>4.2 Contribución marginal</li>
              <li>4.3 Utilidad deseada</li>
            </ul>
          </div>
        </section>
        <hr className="mb-4" />
      </section>

      <section id="contenido">
        <GestorDeEmpresas />
        <hr />
        <GestorDeProductos />
        <hr />
        <SimuladorPE />
        <hr />
        <MezclaProductos />
      </section>
    </>
  );
};

export default Indice;
