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
          <NavLink to='/simulador' className="navBarItem">Gestor empresas</NavLink>
            <NavDropdown title="Mas opciones" id="navBarDropdown" >
            <NavLink to='/unaempresa'><p>Una empresa</p></NavLink>
            <NavLink to='/variosproductos'><p>Varios productos</p></NavLink>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated lin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
