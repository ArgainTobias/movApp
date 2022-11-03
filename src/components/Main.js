import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import ElegirPelicula from './ElegirPelicula';
import Peliculas from './Peliculas';

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Peliculas/>}></Route>
            <Route path='/busqueda' element={<ElegirPelicula/>}></Route>
        </Routes>
    </main>
  )
}

export default Main