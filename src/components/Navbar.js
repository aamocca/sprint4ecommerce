import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ show }) => {
  return (
    <article>
      <div className={show ? "sidenav active" : "sidenav"}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="*">Tiendas</Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Navbar;
