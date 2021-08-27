import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Butterfly = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/work_butterfly');
  },[]);
  
  return(
    <div className="project">
      <div className="project_content">
        <p>
          preparing...
        </p>
      </div>
    </div>
  )
}

export default Butterfly;