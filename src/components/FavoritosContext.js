import React, { createContext, useState } from 'react'


export const contexto = createContext();
const Provider = contexto.Provider;

const FavoritosContext = ({children}) => {

  const [peliculasFavoritas, setPeliculasFavoritas] = useState([]);

  const agregarFavoritos = () => {


  }

  return (
    <section className='peliculas-fondo'></section>
  )
}

export default FavoritosContext