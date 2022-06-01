import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoIPN from "../../img/ipn-logo-80x50.png";
import logoESCOM from "../../img/logoESCOM80x120.png";
const NavBar = () => {
  return (
    <Navbar id="navBar" variant="dark" sticky="top" expand="xxl">
      <Container>
        <img
          alt=""
          src={logoIPN}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <img
          alt=""
          src={logoESCOM}
          width="45"
          height="25"
          className="d-inline-block align-top"
        />
        <TituloMostrar />
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

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const TituloMostrar = () => {
  return (window.innerWidth > 770 ?
      <Navbar.Brand>
        <NavLink to="/home" className="navBarBrand">
          Herramienta digital para el cálculo del punto de equilibrio
        </NavLink>
      </Navbar.Brand> : <Navbar.Brand>
        <NavLink to="/home" className="navBarBrand2">
          Simulador punto de equilibrio
        </NavLink>
      </Navbar.Brand>)
};

export default NavBar;
