import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ElegirPelicula from '../ElegirPelicula/ElegirPelicula';
import Peliculas from '../Peliculas/Peliculas';
import Favoritos from '../Favoritos/Favoritos';

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Peliculas/>}></Route>
            <Route path='/favoritos' element={<Favoritos/>}></Route>
            <Route path='/busqueda' element={<ElegirPelicula/>}></Route>
        </Routes>
    </main>
  )
}

export default Main