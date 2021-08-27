import React, { useEffect, useState } from 'react';
import tpMainImg from '../asset/tpMainImg.jpg';
import tp_detail_1 from '../asset/tp_detail_1.jpg';
import tp_detail_2 from '../asset/tp_detail_2.jpg';
import tp_detail_3 from '../asset/tp_detail_3.jpg';
import tp_detail_4 from '../asset/tp_detail_4.jpg';
import tp_detail_5 from '../asset/tp_detail_5.jpg';
import tp_detail_6 from '../asset/tp_detail_6.jpg';
import tp_demontr_1 from '../asset/tp_demonstr_1.jpg';
import tp_demontr_2 from '../asset/tp_demonstr_2.jpg';
import "../style/web/tspre.css";
import "../style/mobile/tspre_mobile.css";
import { useHistory } from 'react-router-dom';


const detail_RECK = [
  tp_detail_1,
  tp_detail_2,
  tp_detail_3,
  tp_detail_4,
  tp_detail_5,
  tp_detail_6,
  tp_demontr_1,
  tp_demontr_2,
];

const ThanksPressure = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/work_thankspressure');
  },[]);
  
  const [currentDetail, setCurrentDetail] = useState(0);

  const shiftDetail = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && currentDetail !== 0){
      setCurrentDetail(currentDetail -1);
    } else if(value === "next" && currentDetail !== 7){
      setCurrentDetail(currentDetail +1);
    } else if(value === "0"){setCurrentDetail(0);
    } else if(value === "1"){setCurrentDetail(1);
    } else if(value === "2"){setCurrentDetail(2);
    } else if(value === "3"){setCurrentDetail(3);
    } else if(value === "4"){setCurrentDetail(4);
    } else if(value === "5"){setCurrentDetail(5);
    } else if(value === "6"){setCurrentDetail(6);
    } else if(value === "7"){setCurrentDetail(7);
    }
  };
  return(
    <div className="project">
      <div className="project_content">
        <img className="project_mainImg" src={tpMainImg} alt="Thankspressure main"/>
        <h1 className="project_header">Thankspressure <span className="project_year">[2020]</span></h1>
        
        <p className="project_description">
          "If you have a headache, step Samba.”<br /><br />

          With this carpet, six common ailments are treated with pressure and dancing steps. Two realms of acupressure & sports dances, serious & exciting and eastern & western are playfully joined. This new universal language is intertwined and born again by meeting textile technologies. <br /><br />

          The project is about the combination of two worlds that how people have used their feet. Osangmin studio searched and shared how human feet have experienced the spaces depending on the different cultures. With the eastern medical acupressure and western sports dance research, He has found one stage to unite two pieces of knowledge. Moreover, This concept has been developed and visualized with the experiments of textile materials, colors, and techniques. And it was produced and collaborated with TextielLab in Tilburg. Additionally, A book accompanied by the carpet shows how to use this carpet technically. At the same time, It tells the story of how two worlds harmonize in a piece of work.
        </p>
        <div className="image_reck">
          <img className="image_reck__imgs" src={detail_RECK[currentDetail]} alt="thankspressure detail" />
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
            <button className="dot" value="5" onClick={shiftDetail}></button>
            <button className="dot" value="6" onClick={shiftDetail}></button>
            <button className="dot" value="7" onClick={shiftDetail}></button>
          </div>
          
          
        </div>
      </div>
  </div>
  )
}

export default ThanksPressure;