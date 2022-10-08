import React, { useState } from "react";
import { Link } from 'react-router-dom'
import mainLogo from '../asset/mainLogo.png'
import "../style/web/navig.css";
import "../style/mobile/navig_mobile.css";


const INSTA_URL = 'https://www.instagram.com/osangmin_studio/';

const Navig = () => {
  const [navigVisi, setNavigVisi] = useState(false);

  const showNav = () => {
    setNavigVisi(!navigVisi);
  }


  return(
    <header className="navBox">
      <div className="navBox_1">
        <Link className="link logo" to='/'>
          <img className="mainLogo" src={mainLogo} alt="osangmain Main Logo" />
        </Link>
      </div>
      <i className="fas fa-bars nav_btn" onClick={showNav} />
      <div className={navigVisi? "navBox_2__nav" : "navBox_2__nav nav_mobile"}>
        <div className="forCol">
          <Link className="link" to='/'>Work</Link>
          <Link className="link" to='/about'>About</Link>
          <Link className="link" to='/news'>News</Link>
          <Link className="link" to='/contact'>Contact</Link>
          <a className="link favicon" href={INSTA_URL}>
            <i className="fab fa-instagram insta_mobile" />
          </a>
          <div className="nav_back"></div>
        </div>
      </div>
    </header>
  )
}

export default Navig;





