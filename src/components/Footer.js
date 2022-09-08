import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='texto'>
            <ul>
                <li>Politicas de privacidad</li>
                <li>Blog</li>
                <li>FAQ</li>
            </ul>
            <p>© 2022 MOVAPP. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, MovApp Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
        </div>
        <div className='redes'>
            <h5>Siguenos</h5>
            <ul>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-github"></i></li>
            </ul>
        </div>
        <div className='app'>
            <h5>MovApp App</h5>
            <ul>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer