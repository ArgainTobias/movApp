import peliculas from '../data.json';

export const getPeliculasByCategory = (category) => {

    return new Promise ((resolve) => {
        resolve(category ? peliculas.filter((pelicula) => pelicula.Genre === category) : peliculas);
    })    

}