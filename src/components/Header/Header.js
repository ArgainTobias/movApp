import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to={"/"} className="titulo-header">
        <h2>Movapp</h2>
      </NavLink>
      <nav>
        <ul>
            <li>
          <NavLink to={"/"}>
              Películas
          </NavLink>
            </li>
          <li>
            <NavLink to={"/favoritos"}>Favoritos</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to={"/busqueda"} className="busqueda">
        <p>
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i> Búsqueda
        </p>
      </NavLink>
    </header>
  );
};

export default Header;
