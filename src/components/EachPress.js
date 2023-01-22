import React from 'react';


const EachPress = ({data}) => {
  const goUrl = () => {
    window.open(data.url);
  }

  return(
    <div className="press_element">
      <h3 className="press_title"><span className="press_year">{data.when}</span>{data.where}</h3>
      {data.url == null ? 
        <img className="pressImg" src={data.imgSrc} alt="press capture" />
      : <img className="pressImg clickable" onClick={goUrl} src={data.imgSrc} alt="press capture" />
      }
    </div>
  )
}

export default EachPress;