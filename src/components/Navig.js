import React from "react";
import {Link} from 'react-router-dom'


const Navig = () => {
  return(
    <header className="navBox">
    <div className="navBox_1">
      Osangmin Studio
    </div>
      <nav className="navBox_2">
          <Link className="link" to="/">Work</Link>

          <Link className="link" to="/about">About</Link>

          <Link className="link" to="/news">News</Link>

          <Link className="link" to="/contact">Contact</Link>
          
          <a className="link" href="https://www.instagram.com/osangmin_studio/">
            <i class="fab fa-instagram" />
          </a>
            
      </nav>
    </header>
  )
}

export default Navig;