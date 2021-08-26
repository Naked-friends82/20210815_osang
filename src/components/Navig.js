import React, { useState } from "react";
import {Link} from 'react-router-dom'
import mainLogo from '../asset/mainLogo.png'
import "../style/web/navig.css";
import "../style/mobile/navig_mobile.css";


const Navig = () => {
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
        <Link className="logo" to='/'>
          <img className="mainLogo" src={mainLogo} alt="osangmain Main Logo" />
        </Link>
      </div>
      <i className="fas fa-bars nav_btn" onClick={showNav}></i>


      <div className={navigVisi? "navBox_2__nav" : "navBox_2__nav nav_mobile"}>
        <div className="forCol">
          <Link className="link" to="/" onClick={navigVisi? showNav: nothing} >Work</Link>
          <Link className="link" to="/about" onClick={navigVisi? showNav: nothing} >About</Link>
          <Link className="link" to="/news" onClick={navigVisi? showNav: nothing} >News</Link>
          <Link className="link" to="/contact" onClick={navigVisi? showNav: nothing} >Contact</Link>
          <a className="link favicon" href="https://www.instagram.com/osangmin_studio/">
            {/* <span className="mobile insta_mobile">Instagram</span> */}
            <i className="fab fa-instagram insta_mobile" />
          </a>
          <div className="nav_back"></div>
        </div>
      </div>
    </header>
  )
}

export default Navig;





