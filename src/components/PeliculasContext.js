import React, { createContext, useState } from "react";
import { MOVIE_KEY } from "../keys";


export const contextoPeliculas = createContext();
const ProviderPeliculas = contextoPeliculas.Provider;

const PeliculasContext = () => {

    const [movies, setMovies] = useState([]);

    const copiaMovies = movies.slice();

    const estaMovies = (movieTitulo) => movies.some((mov) => mov.titulo === movieTitulo);

    const agregarMovie = (movTitulo) => {

        const estaTitulo = estaMovies(movTitulo);

        

        if(!estaTitulo){
            alert("La pelicula ya se encuentra seleccionada");

            let pelicula = 

            copiaMovies.push();
        }



    }

  return <></>;
};

export default PeliculasContext;
