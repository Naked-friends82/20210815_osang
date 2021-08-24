import React from 'react';
import { Link } from 'react-router-dom';
import tpIndex from '../asset/tp_index.jpg';
import "../style/web/work.css";
import "../style/mobile/work_mobile.css";


const Work = () => {
  return(
    <section className="section_work">
          <div className="section_work__projectReck">
            <Link className="project_index" to='/work/thankspressure'>
              <img className="index_img" src={tpIndex} alt="Thankspressure" />
              <h1 className="index_header">Thankspressure</h1>
            </Link>

            <Link className="project_index" to='/work/papa'>
              <img className="index_img" src={tpIndex} alt="PAPA" />
              <h1 className="index_header">PAPA</h1>
            </Link>

            <Link className="project_index" to='/work/butterfly'>
              <img className="index_img" src={tpIndex} alt="Butterfly" />
              <h1 className="index_header">Butterfly</h1>
            </Link>
          </div>
    </section>
  )
};

export default Work;