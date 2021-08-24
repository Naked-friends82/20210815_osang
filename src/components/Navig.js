import React, { useState } from "react";
import {Link} from 'react-router-dom'
import mainLogo from '../asset/mainLogo.png'
import "../style/web/navig.css";
import "../style/mobile/navig_mobile.css";


const Navig = () => {
  const [navToggle, setNavToggle] = useState(false);

  const nav_toggle = () => {
    setNavToggle(!navToggle);
  }

  return(
    <header className="navBox">
      <div className="navBox_1">
        <Link className="logo" to='/'>
          <img className="mainLogo" src={mainLogo} alt="osangmain Main Logo" />
        </Link>
      </div>
        <i className="fas fa-bars nav_btn" onClick={nav_toggle}></i>
      <nav className={navToggle? "navBox_2__nav": "navBox_2__nav invi"}>
          <Link className="link" to="/" onClick={nav_toggle}>Work</Link>
          <Link className="link" to="/about" onClick={nav_toggle}>About</Link>
          <Link className="link" to="/news" onClick={nav_toggle}>News</Link>
          <Link className="link" to="/contact" onClick={nav_toggle}>Contact</Link>
          <a className="link favicon" href="https://www.instagram.com/osangmin_studio/">
            <i className="fab fa-instagram" />
          </a>
      </nav>

    </header>
  )
}

export default Navig;