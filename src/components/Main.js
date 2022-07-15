import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FavoritosContext from './FavoritosContext';
import Home from './Home';
import Peliculas from './Peliculas';

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/peliculas' element={<Peliculas/>}></Route>
            <Route path='/favoritos' element={<FavoritosContext/>}></Route>
        </Routes>
    </main>
  )
}

export default Main