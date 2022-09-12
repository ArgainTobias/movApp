import React from "react";

const FormInfo = ({ titulo, premios, duracion, genero, pais, imagen }) => {
  if (titulo) {
    return (
      <div className="div-peliculas">
        <div className="informacion-pelicula">
          <h3>{titulo}</h3>
          <div className="div-imagen">
            <img src={imagen} alt={titulo} />
          </div>
          <p>Premios: {premios}</p>
          <p>Duracion: {duracion}</p>
          <p>Genero: {genero}</p>
          <p>Pais: {pais}</p>
          <div className="botones">
            <button><i class="fa-solid fa-play"></i> VER AHORA</button>
            <button>FAVORITOS</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <></>
    );
  }
};

export default FormInfo;
