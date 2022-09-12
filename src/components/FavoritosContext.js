import React, { createContext, useState } from 'react'
import swal from 'sweetalert';


export const contexto = createContext();
const Provider = contexto.Provider;

const FavoritosContext = ({children}) => {

  const [peliculasFavoritas, setPeliculasFavoritas] = useState([]);

  let copiaFavoritas = peliculasFavoritas.slice();

  const estaEnFavoritos = (title) => peliculasFavoritas.some((peli)=> peli.title === title);

  const agregarFavoritos = (title) => {

    let estaTitulo = estaEnFavoritos(title);

    if(!estaTitulo){

      swal({
        title:"Agregada a favoritos",
        icon:"success",
      });


    }

  }

  return (
    <section className='peliculas-fondo'></section>
  )
}

export default FavoritosContext