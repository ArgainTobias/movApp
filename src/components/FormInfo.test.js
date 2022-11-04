import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FormInfo from "./FormInfo";

test('renders content', () => {
    // titulo, año, tipo, id, imagen 
    const pelicula = {
        titulo:"Hola",
        año:2010,
        tipo:"movie",
        id:1,
        imagen:"foto"
    }
    const component = render(<FormInfo titulo={pelicula.titulo} año={pelicula.año} tipo={pelicula.tipo} id={pelicula.id} imagen={pelicula.imagen}/>);

    component.getAllByText('Hola')
})