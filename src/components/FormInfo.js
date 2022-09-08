import React from "react";

const FormInfo = ({ titulo, premios, duracion, genero, pais, imagen }) => {
  if (titulo) {
    return (
      <div className="div-peliculas">
        <div className="informacion-pelicula">
          <h3>Titulo: {titulo}</h3>
          <div className="div-imagen">
            <img src={imagen} alt={titulo} />
          </div>
          <p>Premios: {premios}</p>
          <p>Duracion: {duracion}</p>
          <p>Genero: {genero}</p>
          <p>Pais: {pais}</p>
          <div className="botones">
            <button>Ver Ahora</button>
            <button>Favoritos</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default FormInfo;
