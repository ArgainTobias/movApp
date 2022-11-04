import React from "react";

const FormInfo = ({ titulo, año, tipo, id, imagen }) => {
  if (titulo) {
    return (
      <div className="informacion-pelicula">
        <h3>{titulo}</h3>
        <div className="div-imagen">
          <img src={imagen} alt={titulo} />
        </div>
        <p>Año: {año}</p>
        <p>{tipo}</p>
        <div className="botones">
          <button>
            <i class="fa-solid fa-play"></i> VER AHORA
          </button>
          <button id={id}>FAVORITOS</button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default FormInfo;
