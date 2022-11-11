import React, { useContext, useEffect } from "react";
import { context } from "../FavoritosContext/FavoritosContext";
import FormInfo from "../FormInfo/FormInfo";
import { Link } from "react-router-dom";

const Favoritos = () => {
  const { favoritos, copiaFavoritos, setFavoritos } = useContext(context);

  useEffect(() => {
    const favoritosToUse = JSON.parse(localStorage.getItem('FAVORITOS')) || copiaFavoritos;
    setFavoritos(favoritosToUse)
  }, [setFavoritos]);

  return (
    <section className="home-fondo">
      {favoritos.length > 0 ? (
        <>
          <h2>Mis peliculas favoritas</h2>
          <div className="div-peliculas">
            {favoritos.map((pelicula) => {
              return <FormInfo {...pelicula} />;
            })}
          </div>
        </>
      ) : (
        <>
            <h3>Aún no ha marcado películas como favoritas</h3>
            <Link to={'/busqueda'} className='comienza'>Comienza ahora</Link>
        </>
      )}
    </section>
  );
};

export default Favoritos;