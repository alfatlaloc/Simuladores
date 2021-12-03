import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoIPN from "../../img/ipn-logo-80x50.png";
import logoESCOM from "../../img/logoESCOM80x120.png";
const NavBar = () => {
  return (
    <Navbar id="navBar" sticky="top" expand="lg">
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
        <Navbar.Brand>
          <NavLink to="/home" className="navBarBrand">
            Simulador punto de equilibrio
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/manualUsuario" className="navBarItem ms-2">
              Manual de usuario
            </NavLink>

            <NavLink to="/simulador" className="navBarItem ms-2">
              Gestor empresas
            </NavLink>

            <NavDropdown
              className="d-flex ms-2"
              title="Mas opciones"
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
