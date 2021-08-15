import React from "react";
import {Link} from 'react-router-dom'


const Navig = () => {
  return(
    <nav className="nav">
        <Link className="link" to="/">Work</Link>

        <Link className="link" to="/about">About</Link>

        <Link className="link" to="/news">News</Link>

        <Link className="link" to="/contact">Contact</Link>
    </nav>
  )
}

export default Navig;