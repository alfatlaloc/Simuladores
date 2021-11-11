const Footer = () => {
  return (
    <footer className="text-center text-lg-start" id="footer">

      <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Requerimientos
              </h6>
              <p>
                QUe se necesita para usarlo
              </p>
            </div>

            

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contactos</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
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
