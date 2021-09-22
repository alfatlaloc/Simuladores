import React from "react";
import "../../Styles/Navbar.sass";
import {NavLink} from 'react-router-dom';

/* Define las rutas para el Navbar en el lado derecho */
const items = ["home", "tabla", "about"];

interface Props {
  elements: Array<string>;
}

const Items: React.FC<Props> = ({ elements }) => {
  return (
    <React.Fragment>
      {elements.map((element) => (
        <NavLink className="itemNav" key={element} to={`/${element}`}>{element}</NavLink>
      ))}
    </React.Fragment>
  );
};

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="brandName">aeternam</div>
      <div className="items"></div>
      <Items elements={items} />
    </div>
  );
};

export default NavBar;
