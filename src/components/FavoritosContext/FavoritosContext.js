import React, { createContext, useState } from "react";

export const context = createContext();
const {Provider} = context;

export const FavoritosContext = ({ children }) => {

    const [favoritos, setFavoritos] = useState([]);
    const [titulosFavoritos, setTitulosFavoritos] = useState([]);

    let copiaFavoritos = favoritos.slice();
    let copiaTitulosFavoritos = titulosFavoritos.slice();

    return <Provider value={{favoritos, setFavoritos, copiaFavoritos, titulosFavoritos, setTitulosFavoritos, copiaTitulosFavoritos}}>{children}</Provider>

};