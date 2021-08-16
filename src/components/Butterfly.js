import React from 'react';

const Butterfly = ({showProject}) => {
  return(
    <div className="project">
      <div className="project_content">
        <p>
          preparing...
        </p>
        <button onClick={showProject} >previous</button>
      </div>
    </div>
  )
}

export default Butterfly;