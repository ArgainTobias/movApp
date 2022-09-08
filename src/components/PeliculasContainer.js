import React from 'react';
import Peliculas from './Peliculas';
import pelis from "../data.json"
import { useState } from 'react';


const PeliculasContainer = () => {
  
    const [peliAcc, setPeliaccion] = useState([]);
    const [peliTerr, setPeliTerror] = useState([]);
    const [peliAven, setPeliAventura] = useState([]);


    const pelisAccion = pelis.filter((peliAccion) => peliAccion.Genre.includes("Action"));
    const pelisTerror = pelis.filter((peliAccion) => peliAccion.Genre.includes("Horror"));
    const pelisAventura = pelis.filter((peliAccion) => peliAccion.Genre.includes("Adventure"));

    return (
        <Peliculas pelisAccion={pelisAccion} pelisTerror={pelisTerror} pelisAventura={pelisAventura}/>
    )
}

export default PeliculasContainer