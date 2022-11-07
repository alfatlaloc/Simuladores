import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoIPN from "../../img/ipn-logo-80x50.png";
import logoESCOM from "../../img/logoESCOMAzul80x120.png";
import inicio from "../../img/inicio.png";

const NavBar = () => {
  return (
    <Navbar id="navBar" variant="dark" sticky="top" expand="xxl">
      <Container id="navBar2">
        <img alt="" src={logoIPN} width="30" height="30" className="logoHide" />
        <div id="barra" className="centerText">
          <p className="barraTexto">
            Herramienta digital para el cálculo del punto de equilibrio
            operativo
          </p>
        </div>
        <img
          alt=""
          src={logoESCOM}
          width="45"
          height="25"
          className="logoHide"
        />
      </Container>
      <br></br>
      <Container>
        <NavLink to="/" className="navBarItem ms-2">
          <img src={inicio} alt="inicio" />
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/manual" className="navBarItem ms-2">
              Manual
            </NavLink>

            <NavLink to="/teoriaPuntoEq" className="navBarItem ms-2">
              Contenido
            </NavLink>

            <NavLink to="/simulador" className="navBarItem ms-2">
              Gestor de empresas
            </NavLink>

            <NavDropdown
              className="d-flex ms-2"
              title="Simulador"
              id="navBarDropdown"
            >
              <NavLink className="dropdownItem" to="/unaempresa">
                Un producto
              </NavLink>

              <NavDropdown.Divider />

              <NavLink className="dropdownItem" to="/variosproductos">
                Varios productos
              </NavLink>
            </NavDropdown>

            <NavLink to="/referencias" className="navBarItem ms-2">
              Referencias
            </NavLink>

            <NavLink to="/Requerimientos" className="navBarItem ms-2">
              Requerimientos
            </NavLink>

            <NavLink to="/contactos" className="navBarItem ms-2">
              Contactos
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
