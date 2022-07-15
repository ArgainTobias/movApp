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
          <NavLink to={"/peliculas"}>
            <li>Elegir películas</li>
          </NavLink>
          <NavLink to={"/favoritos"}>
            <li>Favoritos</li>
          </NavLink>
          <NavLink to={"/ver-mas-tarde"}>
            <li>Ver más tarde</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
