import React, { useState } from "react";
import Form from "./Form";
import { MOVIE_KEY } from "../keys";
import FormInfo from "./FormInfo";
import swal from 'sweetalert';

const ElegirPelicula = () => {

  const [movie, setMovie] = useState({
    titulo: "",
    premios: "",
    duracion: "",
    genero: "",
    pais: "",
    imagen: "",
  });

  const getMovie = (e) => {
    e.preventDefault();

    const { pelicula } = e.target.elements;

    if(pelicula.value.length > 0){

      const api_url = `https://www.omdbapi.com/?apikey=${MOVIE_KEY}&t=${pelicula.value}`;
  
      fetch(api_url)
        .then((res) => res.json())
        .then((response) => {
          const { Title, Awards, Runtime, Genre, Country, Poster } = response;
  
          setMovie({
            titulo: { Title },
            premios: { Awards },
            duracion: { Runtime },
            genero: { Genre },
            pais: { Country },
            imagen: { Poster },
          });
        });
    }
    else{
      swal({
        title:"Debe ingresar una película",
        icon:"error"
      })
    }

  };

  return (
    <section className="home-fondo">
      <h1>Elija una película</h1>
      <Form getMovie={getMovie} />
      <FormInfo
        titulo={movie.titulo.Title}
        premios={movie.premios.Awards}
        duracion={movie.duracion.Runtime}
        genero={movie.genero.Genre}
        pais={movie.pais.Country}
        imagen={movie.imagen.Poster}
      />
    </section>
  );
};

export default ElegirPelicula;
