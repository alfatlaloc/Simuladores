import BotonHome from "../Common/BotonHome";
import uno from "../../img/contactos/Eduardo.jpeg";
import dos from "../../img/contactos/Josefina.jpeg";
import tres from "../../img/contactos/Yasmin.jpeg";

const Contactos = () => {
  return (
    <div className="pagina">
      <BotonHome />
      <h2 className="mb-4">Contactos</h2>
      <p>
        <img alt="josefina" src={dos} className="contactosI" />
        <br />
        <strong className="fnt20">Josefina Hernández Jaime</strong>
        <br />
        <p className="semblanza">
          Maestra en Ciencias de la Administración por la UPIICSA, del IPN.
          Áreas de interés: Finanzas, proyectos de inversión, Educación Basada
          en Competencias, diseño y construcción de materiales y recursos
          didácticos digitales.
        </p>
        <strong> Correo: </strong> johernandezja@ipn.mx
      </p>
      <br />
      <p>
        <img alt="eduardo" src={uno} className="contactosI" />
        <br />
        <strong className="fnt20">Eduardo Rodríguez Flores</strong>
        <br />
        <p className="semblanza">
          Maestro en Administración por la UNAM. Áreas de interés: Finanzas,
          proyectos de inversión, motivación, diseño y construcción de
          materiales y recursos didácticos digitales.
        </p>
        <strong> Correo: </strong> erodrigrezf@ipn.mx
      </p>
      <br />
      <p>
        <img alt="josefina" src={tres} className="contactosI" />
        <br />
        <strong className="fnt20">Yasmin Ivette Jiménez Galán</strong>
        <br />
        <p className="semblanza">
          Doctora en educación por el Centro de Estudios Superiores en Educación
          CESE; M. en C. con especialidad en Administración de negocios por la
          ESCA Sto. Tomás. Áreas de interés: Educación Basada en Competencias,
          Perspectiva de género en educación.
        </p>
        
        <strong> Correo: </strong> yjimenezg@ipn.mx
      </p>
    </div>
  );
};

export default Contactos;
