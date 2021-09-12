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
  const [currentMain, setCurrentMain] = useState(0);
  const [currentMood, setCurrentMood] = useState(0);

  const shiftCurrentMain = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && currentMain !== 0){
      setCurrentMain(currentMain -1);
    } else if(value === "next" && currentMain !== 2){
      setCurrentMain(currentMain +1);
    } else if(value === "0"){setCurrentMain(0);
    } else if(value === "1"){setCurrentMain(1);
    } else if(value === "2"){setCurrentMain(2);
    }
  };

  const shiftCurrentMood = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && currentMood !== 0){
      setCurrentMood(currentMood -1);
    } else if(value === "next" && currentMood !== 3){
      setCurrentMood(currentMood +1);
    } else if(value === "0"){setCurrentMood(0);
    } else if(value === "1"){setCurrentMood(1);
    } else if(value === "2"){setCurrentMood(2);
    } else if(value === "3"){setCurrentMood(3);
    }
  };


  return(
    <div className="project">
      <div className="project_content">
      <div className="main_reck">
          <img className="main_reck__imgs" src={pa_main_RECK[currentMain]} alt="PAPA mood" />
            <div className="main_reck__btn">
              <button className="main_btn" onClick={shiftCurrentMain} value="prev" >&#10094;</button>
              <button className="main_btn" onClick={shiftCurrentMain} value="next" >&#10095;</button>
            </div>
          {/* <div className="image_reck__dot">
            <button className="dot" value="0" onClick={shiftDetailMain}></button>
            <button className="dot" value="1" onClick={shiftDetailMain}></button>
            <button className="dot" value="2" onClick={shiftDetailMain}></button>
          </div> */}
        </div>
        <h1 className="project_header">PAPA <span className="project_year">[2021]</span></h1>
        <p className="project_description">
          One of Sangmin’s storytelling objects “PAPA” evokes a special memory between him and his father. Alongside his father’s one of the essential rituals at home that is watering the plants, Sangmin designs a watering can which reminds his father that they are together. The design stems from mutual body stretching whenever they went hiking.<br /><br />
          
          “My dad came home once a week because of work. I was rarely able to see him due to school when he comes. So, I wanted to give him a special object which makes him recalling our memories. With this watering can, I hope he finds a small happiness while watering the plants.” says Sangmin.
        </p>
        <div className="image_reck">
          <img className="image_reck__imgs" src={pa_mood_RECK[currentMood]} alt="PAPA mood" />
          <div className="image_reck__btn">
            <button className="image_btn" onClick={shiftCurrentMood} value="prev" >&#10094;</button>
            <button className="image_btn" onClick={shiftCurrentMood} value="next" >&#10095;</button>
          </div>
          <div className="image_reck__dot">
            <button className="dot" value="0" onClick={shiftCurrentMood}></button>
            <button className="dot" value="1" onClick={shiftCurrentMood}></button>
            <button className="dot" value="2" onClick={shiftCurrentMood}></button>
            <button className="dot" value="3" onClick={shiftCurrentMood}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Papa;