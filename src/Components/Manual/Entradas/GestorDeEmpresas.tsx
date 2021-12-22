import img1 from "../../../img/ManualUsuario/GestorEmpresas/1.png";
const GestorDeEmpresas = () => {
  return (
    <section id="GestorDeEmpresas">
      <h3>Gestor de empresas</h3>
      <p>
        En este componente se pueden agregar, modificar y crear empresas. Para
        crear una empresa solo hay que escribir un nombre valido. La entrada de
        texto no aceptara ciertos caracteres y no podra tener una longitud mayor
        a 60.
      </p>
      <img
        className="imgMU"
        src={img1}
        alt="Pantalla principal gestor usuarios"
      ></img>
    </section>
  );
};

export default GestorDeEmpresas;
