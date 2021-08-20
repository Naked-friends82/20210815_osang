import React, { useState } from 'react';
import "../style/web/tspre.css";
import tpMainImg from '../asset/tpMainImg.jpg';
import tp_detail_1 from '../asset/tp_detail_1.jpg';
import tp_detail_2 from '../asset/tp_detail_2.jpg';
import tp_detail_3 from '../asset/tp_detail_3.jpg';
import tp_detail_4 from '../asset/tp_detail_4.jpg';
import tp_detail_5 from '../asset/tp_detail_5.jpg';




const detail_RECK = [
  tp_detail_1,
  tp_detail_2,
  tp_detail_3,
  tp_detail_4,
  tp_detail_5
];

const ThanksPressure = ({showProject}) => {
  const [currentDetail, setCurrentDetail] = useState(0);

  const shiftDetail = (e) => {
    const {target: {value}} = e;
    console.log(value);
    if(value === "prev" && currentDetail !== 0){
      setCurrentDetail(currentDetail -1);
    } else if(value === "next" && currentDetail !== 4){
      setCurrentDetail(currentDetail +1);
    } else if(value === "0"){setCurrentDetail(0);
    } else if(value === "1"){setCurrentDetail(1);
    } else if(value === "2"){setCurrentDetail(2);
    } else if(value === "3"){setCurrentDetail(3);
    } else if(value === "4"){setCurrentDetail(4);
    } else if(value === "5"){setCurrentDetail(5);
    }
  };
  return(
    <div className="project">
      <div className="project_content">
        <img className="project_mainImg" src={tpMainImg} alt="Thankspressure main"/>
        <h1 className="project_header">Thankspressure <span className="project_year">[2020]</span></h1>
        <p className="project_description">
          "If you have a headache, step Samba.”<br /><br />
          With this carpet, six common ailments are treated with pressure and dancing steps. Two realms of acupressure & sports dances, serious & exciting and eastern & western are playfully joined. This new universal language is intertwined and born again by meeting textile technologies.<br /><br />

          The project is about the combination of two worlds that how people have used their feet. Osangmin studio searched and shared how human feet have experienced the spaces depending on the different cultures. With the eastern medical acupressure and western sports dance research, He has found one stage to unite two pieces of knowledge. Moreover, This concept has been developed and visualized with the experiments of textile materials, colors, and techniques. And it was produced and collaborated with TextielLab in Tilburg. Additionally, A book accompanied by the carpet shows how to use this carpet technically. At the same time, It tells the story of how two worlds harmonize in a piece of work.
        </p>
        <div className="image_reck">
          <img class="image_reck__imgs" src={detail_RECK[currentDetail]} alt="thankspressure detail" />
          <div className="image_reck__btn">
            <button className="image_btn" onClick={shiftDetail} value="prev" >&#10094;</button>
            <button className="image_btn" onClick={shiftDetail} value="next" >&#10095;</button>
          </div>
          <div className="image_reck__dot">
            <button className="dot" value="0" onClick={shiftDetail}></button>
            <button className="dot" value="1" onClick={shiftDetail}></button>
            <button className="dot" value="2" onClick={shiftDetail}></button>
            <button className="dot" value="3" onClick={shiftDetail}></button>
            <button className="dot" value="4" onClick={shiftDetail}></button>
          </div>
        </div>
        <div className="ex">
          <button className="project_exit" onClick={showProject} >previous</button>
        </div>
      </div>
  </div>
  )
}

export default ThanksPressure;