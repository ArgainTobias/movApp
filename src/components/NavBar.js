import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const NavBar = (inHeader) => {
  return (
    <div>
        <Link to={"/"}><h1>MovApp</h1></Link>
        <nav>
            <ul>
                <li><NavLink to={"/categoria/movies"}>{inHeader? "Movies" : ""}</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar