import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar id="navBar" collapseOnSelect expand="lg" >
      <Container>
        <NavLink to='/home' className="navBarBrand">Simulador financiero</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <NavLink to='/simulador' className="navBarItem">
            Gestor empresas
          </NavLink>

            <NavDropdown title="Mas opciones" id="navBarDropdown" >
              <NavDropdown.Item href="/unaempresa">
                Una empresa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/variosproductos">
                Varios productos
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
