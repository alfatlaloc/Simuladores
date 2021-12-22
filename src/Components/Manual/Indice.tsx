import GestorDeEmpresas from "./Entradas/GestorDeEmpresas";

const Indice = () => {
  return (
    <>
      <section id="indice">
        <h4>Indice</h4>
        <ul className="listaElementos">
          <li>
            <h5>Gestor de empresas</h5>
            <ul className="listaElementos">
              <li>Crear empresa</li>
              <li>Agregar productos</li>
              <li>Agregar costos fijos</li>
              <li>Cambiar nombre</li>
            </ul>
          </li>
          <li>
            <h5>Gestor de productos</h5>
            <ul className="listaElementos">
              <li>Crear producto</li>
              <li>Agregar costos variables</li>
              <li>Cambiar nombre</li>
              <li>Cambiar precio</li>
            </ul>
          </li>
          <li>
            <h5>Un producto</h5>
            <ul className="listaElementos">
              <li>Elegir producto</li>
              <li>Información producto</li>
              <li>Calculo del ingreso neto</li>
              <li>Tabla de resultados</li>
              <li>Grafíca punto de Equilibrio</li>
              <li>Apalancamiento operativo</li>
            </ul>
          </li>
          <li>
            <h5>Varios productos</h5>
            <ul className="listaElementos">
              <li>Elegir productos</li>
              <li>Proporción de producción</li>
              <li>Contribución marginal</li>
              <li>Punto de equilibrio unidades mezcladas</li>
              <li>Proporción en los Ingresos Totales</li>
              <li>Utilidad deseada</li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="contenido">
        <GestorDeEmpresas />
      </section>
    </>
  );
};

export default Indice;
