const Practica = () => {
  return (
    <section className="textosEncuadre">
      <h1>Práctica</h1>
      <p>
        Después de revisar el contenido temático y utilizando este simulador del
        punto de equilibrio, realiza la siguiente práctica:
      </p>
      <a href={require("../../docs/practica.pdf")} target="_blank" > Descargar</a>
    </section>
  );
};

export default Practica;
