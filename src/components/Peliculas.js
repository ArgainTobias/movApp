import React from 'react';


const Peliculas = ({titleAccion, imageAccion, titleTerror,imageTerror, titleAventura, imageAventura}) => {
  return (
    <section className='peliculas-fondo'>
      <div className='contenedor-div-peliculas-menu'>
        <h2>Películas de Acción</h2>
        <div className='div-peliculas-menu'>
          {pelisAccion.map((peli) => {
            return(
              <div className='div-info-pelicula-menu'>
                  <div className='img'>
                    <img src={peli.Poster} alt={peli.Title} />
                  </div>
                  <div className='txt'>
                    <h4>{peli.Title}</h4>
                    <button><i class="fa-solid fa-play"></i> VER AHORA</button>
                  </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='contenedor-div-peliculas-menu'>
        <h2>Películas de Terror</h2>
        <div className='div-peliculas-menu'>
          {pelisTerror.map((peli) => {
            return(
              <div className='div-info-pelicula-menu'>
                  <div className='img'>
                    <img src={peli.Poster} alt={peli.Title} />
                  </div>
                  <div className='txt'>
                    <h4>{peli.Title}</h4>
                    <button><i class="fa-solid fa-play"></i> VER AHORA</button>
                  </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='contenedor-div-peliculas-menu'>
        <h2>Películas de Aventura</h2>
        <div className='div-peliculas-menu'>
          {pelisAventura.map((peli) => {
            return(
              <div className='div-info-pelicula-menu'>
                  <div className='img'>
                    <img src={peli.Poster} alt={peli.Title} />
                  </div>
                  <div className='txt'>
                    <h4>{peli.Title}</h4>
                    <button><i class="fa-solid fa-play"></i> VER AHORA</button>
                  </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default Peliculas