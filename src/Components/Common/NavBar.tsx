import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar id="navBar" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/home" className="navBarBrand">
            Simulador financiero
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="ms-2">
              <NavLink to="/simulador" className="navBarItem">
                Gestor empresas
              </NavLink>
            </Nav.Link>

            <NavDropdown
              className="ms-2"
              title="Mas opciones"
              id="navBarDropdown"
            >
              <NavDropdown.Item>
                <NavLink to="/unaempresa">Una empresa</NavLink>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink to="/variosproductos">Varios productos</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
