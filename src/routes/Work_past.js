import React, {useState}from 'react';
import ThanksPressure from '../components/ThanksPressure';
import Papa from '../components/Papa';
import Butterfly from '../components/Butterfly';
import tpIndex from '../asset/tp_index.jpg';
import "../style/web/work.css";
import "../style/mobile/work_mobile.css";


const Work = () => {
  const [contentToggle, setContentToggle] = useState(undefined);
  
  const showProject =(e) => {
    const {target: {alt}} = e;
    setContentToggle(alt);
  }
  return(
    <section className="section_work">
        {
          contentToggle === "Thankspressure" ? <ThanksPressure showProject={showProject}/> :
          contentToggle === "PAPA" ? <Papa showProject={showProject}/> :
          contentToggle === "Butterfly" ? <Butterfly showProject={showProject}/> :

          <div className="section_work__projectReck">
            <div className="project_index">
              <img className="index_img" src={tpIndex} alt="Thankspressure" onClick={showProject} />
              <h1 className="index_header">Thankspressure</h1>
            </div>

            <div className="project_index">
              <img className="index_img" src={tpIndex} alt="PAPA" onClick={showProject} />
              <h1 className="index_header">PAPA</h1>
            </div>

            <div className="project_index">
              <img className="index_img" src={tpIndex} alt="Butterfly" onClick={showProject} />
              <h1 className="index_header">Butterfly</h1>
            </div>
          </div>
        }
    </section>
  )
};

export default Work;