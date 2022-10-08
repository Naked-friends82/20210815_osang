import React from 'react';
import { Link } from 'react-router-dom';
import tpIndex from '../asset/thankspressure/tp_index.jpg';
import paIndex from '../asset/papa/pa_index.jpg';
import buttIndex from '../asset/butterfly/butt_index.jpg';
import knitted_light from '../asset/knitted_light/knitted_light_thumbnail.jpg';
import "../style/web/work.css";
import "../style/mobile/work_mobile.css";


const Work = () => {

  return(
    <section className="section_work">
          <div className="section_work__projectReck">
            <Link className="project_index link" to='/work_knitted_light'>
              <img className="index_img" src={knitted_light} alt="Knitted Light" />
              <h1 className="index_header">Knitted Light</h1>
            </Link>

            <Link className="project_index link" to='/work_thankspressure'>
              <img className="index_img" src={tpIndex} alt="Thankspressure" />
              <h1 className="index_header">Thankspressure</h1>
            </Link>

            <Link className="project_index link" to='/work_papa'>
              <img className="index_img" src={paIndex} alt="PAPA" />
              <h1 className="index_header">PAPA</h1>
            </Link>

            <Link className="project_index link" to='/work_butterfly'>
              <img className="index_img" src={buttIndex} alt="Butterfly" />
              <h1 className="index_header">Butterfly</h1>
            </Link>
          </div>
    </section>
  )
};

export default Work;