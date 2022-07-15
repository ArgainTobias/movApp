import React from "react";

const FormInfo = ({ titulo, premios, duracion, genero, pais, imagen }) => {
  if (titulo) {
    return (
      <div className="div-peliculas">
        <div className="informacion-pelicula">
          <h3>Titulo: {titulo}</h3>
          <div className="div-imagen">
            <img src={imagen} alt="" />
          </div>
          <p>Premios: {premios}</p>
          <p>Duracion: {duracion}</p>
          <p>Genero: {genero}</p>
          <p>Pais: {pais}</p>
          <div className="botones">
            <button>Favoritos</button>
            <button>Ver más tarde</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default FormInfo;
