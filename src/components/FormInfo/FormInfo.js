import React, { useContext, useEffect } from "react";
import { context } from "../FavoritosContext/FavoritosContext";
import swal from "sweetalert";

const FormInfo = ({ titulo, año, tipo, id, imagen }) => {

  const { setFavoritos, copiaFavoritos, setTitulosFavoritos, copiaTitulosFavoritos } = useContext(context);

  useEffect(()=>{

    const titulosFavoritosToUse = JSON.parse(localStorage.getItem('TITULOS_FAVORITOS')) || copiaTitulosFavoritos;

    setTitulosFavoritos(titulosFavoritosToUse);

  }, [titulo, setTitulosFavoritos])

  const AddFavorites = () => {
    copiaTitulosFavoritos.push(titulo);
    setTitulosFavoritos(copiaTitulosFavoritos);
    localStorage.setItem('TITULOS_FAVORITOS', JSON.stringify(copiaTitulosFavoritos));

    copiaFavoritos.push({ titulo, año, tipo, id, imagen });
    setFavoritos(copiaFavoritos);
    localStorage.setItem('FAVORITOS', JSON.stringify(copiaFavoritos));

    swal({
      title: "La pelicula ha sido agregada a favoritos correctamente",
      icon: "success",
    });
  };

  const deleteFavorites = () => {
    let indice = copiaTitulosFavoritos.indexOf(titulo);
    copiaTitulosFavoritos.splice(indice, 1);
    setTitulosFavoritos(copiaTitulosFavoritos);
    localStorage.setItem('TITULOS_FAVORITOS', JSON.stringify(copiaTitulosFavoritos));

    copiaFavoritos.splice(indice, 1);
    setFavoritos(copiaFavoritos);
    localStorage.setItem('FAVORITOS', JSON.stringify(copiaFavoritos));

    swal({
      title: "La pelicula ha sido removida de favoritos correctamente",
      icon: "success",
    });
  }

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
          {copiaTitulosFavoritos.some( tituloFavorito => tituloFavorito === titulo) ? (
            <button id={`favoritos#${id}`} onClick={deleteFavorites}>
              QUITAR DE FAVORITOS
            </button>
          ) : (
            <button id={`favoritos#${id}`} onClick={AddFavorites}>
              FAVORITOS
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default FormInfo;
