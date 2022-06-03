import React from 'react';
import { Link } from 'react-router-dom';
import tpIndex from '../asset/thankspressure/tp_index.jpg';
import paIndex from '../asset/papa/pa_index.jpg';
import buttIndex from '../asset/butterfly/butt_index.jpg';
import "../style/web/work.css";
import "../style/mobile/work_mobile.css";


const Work = ({goToRightUrl}) => {

  return(
    <section className="section_work">
          <div className="section_work__projectReck">
            <span className="project_index link" data-url='/work_thankspressure' onClick={goToRightUrl}>
              <img className="index_img" src={tpIndex} alt="Thankspressure" />
              <h1 className="index_header">Thankspressure</h1>
            </span>

            <span className="project_index link" data-url='/work_papa' onClick={goToRightUrl}>
              <img className="index_img" src={paIndex} alt="PAPA" />
              <h1 className="index_header">PAPA</h1>
            </span>

            <span className="project_index link" data-url='/work_butterfly' onClick={goToRightUrl}>
              <img className="index_img" src={buttIndex} alt="Butterfly" />
              <h1 className="index_header">Butterfly</h1>
            </span>
          </div>
    </section>
  )
};

export default Work;