import React from 'react';
import Peliculas from './Peliculas';

const PeliculasListContainer = ({pelisAccion, pelisTerror, PelisAventura}) => {
  return (
    pelisAccion.map((peliaccion)=>{
        return(
            <Peliculas titleAccion={peliaccion.Title} imageAccion={peliaccion.Poster}/>
        )
    })
  )
}

export default PeliculasListContainer