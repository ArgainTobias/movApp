import React, {useState} from 'react';
import { useEffect } from 'react';
import pelis from "../data.json"
import Peliculas from './Peliculas';


const PeliculasContainer = () => {
  
    const [peliAcc, setPeliaccion] = useState([]);
    const [peliTerr, setPeliTerror] = useState([]);
    const [peliAven, setPeliAventura] = useState([]);

    useEffect(() => {

        const Accion = pelis.filter((peliAccion) => peliAccion.Genre.includes("Action"));
        const Terror = pelis.filter((peliTerror) => peliTerror.Genre.includes("Horror"));
        const Aventura = pelis.filter((peliAventura) => peliAventura.Genre.includes("Adventure"));
        setPeliaccion(Accion);
        setPeliTerror(Terror);
        setPeliAventura(Aventura);

    }, [])

    return (
        <Peliculas pelisAccion={peliAcc} pelisTerror={peliTerr} pelisAventura={peliAven}/>
    )
}

export default PeliculasContainer