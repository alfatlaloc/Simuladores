const Footer = () => {
  return (
    <footer className="text-center text-lg-start" id="footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
        <div className="m-1 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Developers</h6>
              <p>
                <strong>Marco Antonio Castro Gutiérrez</strong> <br />
                <a href="#!" className="text-reset">
                  https://github.com/alfatlaloc
                </a>
              </p>
              <p>
                <strong>Arturo Jimenez Morgado</strong> <br />
                <a href="#!" className="text-reset">
                  https://github.com/LordMorgado
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
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
