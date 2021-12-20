const Footer = () => {
  return (
    <footer className="text-center text-lg-start" id="footer">
      <section className="d-block justify-content-center justify-content-lg-between p-4 ">
        <h5>
          Herramienta digital para el cálculo del punto de equilibrio operativo
        </h5>

        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-3 col-xl-6 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contactos</h6>
              <p>
                <strong>Marco Antonio Castro Gutiérrez</strong>
              </p>
              <p>
                <strong>Github: </strong>
                <a
                  className="githubLink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/alfatlaloc"
                >
                  https://github.com/alfatlaloc
                </a>
              </p>
              <p>
                <strong>Correo: </strong> macg.ae1313@gmail.com
              </p>
              <p>
                <strong>Arturo Morgado Jimenéz</strong>
              </p>
              <p>
                <strong>Github: </strong>
                <a
                  className="githubLink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/LordMorgado"
                >
                  https://github.com/LordMorgado
                </a>
              </p>
              <p>
                <strong>Correo: </strong> macg.ae1313@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © {new Date().getFullYear()} Copyright: Simulador financiero
      </div>
    </footer>
  );
};

export default Footer;
