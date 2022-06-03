import React, { useState } from "react";
import {Link} from 'react-router-dom'
import mainLogo from '../asset/mainLogo.png'
import "../style/web/navig.css";
import "../style/mobile/navig_mobile.css";

const INSTA_URL = 'https://www.instagram.com/osangmin_studio/';

const Navig = ({goToRightUrl}) => {
  const [navigVisi, setNavigVisi] = useState(false);

  const showNav = () => {
    setNavigVisi(!navigVisi);
    console.log(navigVisi);
  }
  const nothing = () => {
  }


  return(
    <header className="navBox">
      <div className="navBox_1">
        <span className="link logo" data-url="/" onClick={goToRightUrl}>
          <img className="mainLogo" src={mainLogo} alt="osangmain Main Logo" />
        </span>
      </div>
      <i className="fas fa-bars nav_btn" onClick={showNav}></i>


      <div className={navigVisi? "navBox_2__nav" : "navBox_2__nav nav_mobile"}>
        <div className="forCol">
          <span className="link" data-url="/" onClick={navigVisi? showNav: goToRightUrl} >Work</span>
          <span className="link" data-url="/about" onClick={navigVisi? showNav: goToRightUrl} >About</span>
          <span className="link" data-url="/news" onClick={navigVisi? showNav: goToRightUrl} >News</span>
          <span className="link" data-url="/contact" onClick={navigVisi? showNav: goToRightUrl} >Contact</span>

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





