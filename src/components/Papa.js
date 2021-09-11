import React, { useState } from 'react';
import pa_main_1 from '../asset/papa/pa_main_1.jpg';
import pa_main_2 from '../asset/papa/pa_main_2.jpg';
import pa_main_3 from '../asset/papa/pa_main_3.jpg';
import pa_mood_1 from '../asset/papa/pa_mood_1.jpg';
import pa_mood_2 from '../asset/papa/pa_mood_2.jpg';
import pa_mood_3 from '../asset/papa/pa_mood_3.jpg';
import pa_mood_4 from '../asset/papa/pa_mood_4.jpg';
import "../style/web/papa.css";
import "../style/mobile/papa_mobile.css";

const pa_main_RECK = [
  pa_main_1,
  pa_main_2,
  pa_main_3,
];
const pa_mood_RECK = [
  pa_mood_1,
  pa_mood_2,
  pa_mood_3,
  pa_mood_4,
];


const Papa = () => {
  const [currentDetail, setCurrentDetail] = useState(0);


  const shiftDetail = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && currentDetail !== 0){
      setCurrentDetail(currentDetail -1);
    } else if(value === "next" && currentDetail !== 3){
      setCurrentDetail(currentDetail +1);
    } else if(value === "0"){setCurrentDetail(0);
    } else if(value === "1"){setCurrentDetail(1);
    } else if(value === "2"){setCurrentDetail(2);
    } else if(value === "3"){setCurrentDetail(3);
    }
  };
  const shiftDetailMain = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && currentDetail !== 0){
      setCurrentDetail(currentDetail -1);
    } else if(value === "next" && currentDetail !== 2){
      setCurrentDetail(currentDetail +1);
    } else if(value === "0"){setCurrentDetail(0);
    } else if(value === "1"){setCurrentDetail(1);
    } else if(value === "2"){setCurrentDetail(2);
    }
  };

  return(
    <div className="project">
      <div className="project_content">
      <div className="main_reck">
          <img className="main_reck__imgs" src={pa_main_RECK[currentDetail]} alt="PAPA mood" />
            <div className="main_reck__btn">
              <button className="main_btn" onClick={shiftDetailMain} value="prev" >&#10094;</button>
              <button className="main_btn" onClick={shiftDetailMain} value="next" >&#10095;</button>
            </div>
          {/* <div className="image_reck__dot">
            <button className="dot" value="0" onClick={shiftDetailMain}></button>
            <button className="dot" value="1" onClick={shiftDetailMain}></button>
            <button className="dot" value="2" onClick={shiftDetailMain}></button>
          </div> */}
        </div>
        <h1 className="project_header">PAPA <span className="project_year">[2021]</span></h1>
        <p className="project_description">
          One of Sangmin’s storytelling objects “PAPA” evokes a special memory between him and his father. Alongside his father’s one of the essential rituals at home that is watering the plants, Sangmin designs a watering can which reminds his father that they are together. The design stems from mutual body stretching whenever they went hiking.
          “My dad came home once a week because of work. I was rarely able to see him due to school when he comes. So, I wanted to give him a special object which makes him recalling our memories. With this watering can, I hope he finds a small pleasure while watering the plants.” says Sangmin.
        </p>
        <div className="image_reck">
          <img className="image_reck__imgs" src={pa_mood_RECK[currentDetail]} alt="PAPA mood" />
          <div className="image_reck__btn">
            <button className="image_btn" onClick={shiftDetail} value="prev" >&#10094;</button>
            <button className="image_btn" onClick={shiftDetail} value="next" >&#10095;</button>
          </div>
          <div className="image_reck__dot">
            <button className="dot" value="0" onClick={shiftDetail}></button>
            <button className="dot" value="1" onClick={shiftDetail}></button>
            <button className="dot" value="2" onClick={shiftDetail}></button>
            <button className="dot" value="3" onClick={shiftDetail}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Papa;