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
          <button><img/></button>
      </nav>
    </header>
  )
}

export default Navig;