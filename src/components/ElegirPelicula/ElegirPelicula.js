import React, { useState } from "react";
import Form from "../Form/Form";
import { MOVIE_KEY } from "../../keys";
import FormInfo from "../FormInfo/FormInfo";
import swal from "sweetalert";

const ElegirPelicula = () => {
  const [movies, setMovies] = useState([]);
  let copiaMovies = movies.slice();
  let idPelicula = 0;

  const getMovie = (e) => {
    e.preventDefault();

    const { pelicula } = e.target.elements;

    if (pelicula.value.length > 0) {
      const api_url = `https://www.omdbapi.com/?apikey=${MOVIE_KEY}&s=${pelicula.value}`;
      copiaMovies = [];

      fetch(api_url)
        .then((res) => res.json())
        .then((response) => {
          const {Search} = response
          if (Search) {
            const peliculasConImagen = Search.filter((pelicula) => pelicula.Poster !== 'N/A');
            peliculasConImagen.forEach((peli) => {
              const { Title, Year, Type, Poster } = peli;
              idPelicula += 1;

              copiaMovies.push({
                titulo: { Title },
                año: { Year },
                tipo: { Type },
                imagen: { Poster },
                id: idPelicula,
              });
            });
            setMovies(copiaMovies);
          }
          else{
            swal({
                title:"No se han encontrado resultados para su búsqueda",
                icon:"warning"
            })
          }
          pelicula.value="";
        });
    } else {
      swal({
        title: "Debe ingresar una película",
        icon: "error",
      });
    }
  };

  return (
    <section className="home-fondo">
      <h2>Elija una película</h2>
      <Form getMovie={getMovie} />
      <div className="div-peliculas">
        {movies.map((movie) => {
          return (
            <FormInfo
              titulo={movie.titulo.Title}
              año={movie.año.Year}
              tipo={movie.tipo.Type}
              imagen={movie.imagen.Poster}
              id={movie.id}
              key={movie.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ElegirPelicula;
