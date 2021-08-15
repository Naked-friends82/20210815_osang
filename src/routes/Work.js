import React from 'react';
import ThanksPressure from '../components/ThanksPressure';
import Papa from '../components/Papa';
import Butterfly from '../components/Butterfly';


const Work = () => {
  return(
    <section className="section_work">
      <div className="section_work__projectReck">
        <ThanksPressure />
        <Papa />
        <Butterfly />
      </div>
    </section>
  )
};

export default Work;