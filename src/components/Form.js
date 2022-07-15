import React from "react";

const Form = ({ getMovie }) => {
  return (
    <div className="div-form">
      <form onSubmit={getMovie}>
        <input
          type="text"
          placeholder="Nombre de la pelicula"
          name="pelicula"
        />
        <button>Obtener película</button>
      </form>
    </div>
  );
};

export default Form;
