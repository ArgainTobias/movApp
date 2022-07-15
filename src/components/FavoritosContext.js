import React, { createContext, useState } from 'react'


export const contexto = createContext();
const Provider = contexto.Provider;

const FavoritosContext = ({children}) => {

  const [peliculasFavoritas, setPeliculasFavoritas] = useState([]);

  const agregarFavoritos = () => {

    

  }

  return (
    <section className='home-fondo'></section>
  )
}

export default FavoritosContext