const Footer = () => {
  return (
    <footer className="text-center text-lg-start" id="footer">
      <section className="d-block justify-content-center justify-content-lg-between p-4 ">
        <h5>
          Herramienta digital para el cálculo del punto de equilibrio operativo
        </h5>

        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-lg-3 col-xl-6 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contactos</h6>
              <p>
                <strong>Josefina Hernández Jaime</strong>{"   "}|
                <strong> Correo: </strong> johernandezja@ipn.mx
              </p>
              <p>
                <strong>Eduardo Rodríguez Flores</strong>{"   "}|
                <strong> Correo: </strong> erodrigrezf@ipn.mx
              </p>

              <p>
                <strong>Yasmin Ivette Jiménez Galán</strong>{"   "}|
                <strong> Correo: </strong> yjimenezg@ipn.mx
              </p>
            </div>
            <div className="col-lg-3 col-xl-6 mx-auto mb-4">
              <strong>
                <div
                  className="license"
                  dangerouslySetInnerHTML={{
                    __html: `
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Herramienta digital para el cálculo del punto de equilibrio operativo</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://simuladorpuntodeequilibrio.herokuapp.com/" property="cc:attributionName" rel="cc:attributionURL">Josefina Hernández Jaime, Eduardo Rodríguez Flores & Yasmín Ivette Jiménez Galán</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License</a>.<br />Creado a partir de la obra en <a xmlns:dct="http://purl.org/dc/terms/" href="https://simuladorpuntodeequilibrio.herokuapp.com/" rel="dct:source">https://simuladorpuntodeequilibrio.herokuapp.com/</a>.
    `,
                  }}
                />
              </strong>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
