import React from "react";
import {Link} from 'react-router-dom'
import mainLogo from '../asset/mainLogo.png'
import "../style/web/navig.css";


const Navig = () => {
  return(
    <header className="navBox">
      <div className="navBox_1">
        <img className="mainLogo" src={mainLogo} alt="osangmain Main Logo" />
      </div>
      <nav className="navBox_2__nav">
          <Link className="link" to="/">Work</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/news">News</Link>
          <Link className="link" to="/contact">Contact</Link>
          <a className="link favicon" href="https://www.instagram.com/osangmin_studio/">
            <i className="fab fa-instagram" />
          </a>
      </nav>
    </header>
  )
}

export default Navig;