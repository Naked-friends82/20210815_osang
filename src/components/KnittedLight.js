import React, { useState } from 'react';
import kn_main from '../asset/knitted_light/knitted_light_main.jpg';
import kn_detail_1 from '../asset/knitted_light/knitted_light_1.jpg';
import kn_detail_2 from '../asset/knitted_light/knitted_light_2.jpg';
import kn_detail_3 from '../asset/knitted_light/knitted_light_3.jpg';
import kn_detail_4 from '../asset/knitted_light/knitted_light_4.jpg';
import kn_detail_5 from '../asset/knitted_light/knitted_light_5.jpg';
import kn_detail_6 from '../asset/knitted_light/knitted_light_6.jpg';
import "../style/web/tspre.css";
import "../style/mobile/tspre_mobile.css";


const detail_RECK = [
  kn_detail_1,
  kn_detail_2,
  kn_detail_3,
  kn_detail_4,
  kn_detail_5,
  kn_detail_6,
];

const ThanksPressure = () => {
  const [currentDetail, setCurrentDetail] = useState(0);
  
  const shiftDetail = (e) => {
    const {target: {value}} = e;
    if(value === "prev" && currentDetail !== 0){
      setCurrentDetail(currentDetail -1);
    } else if(value === "next" && currentDetail !== 5){
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
        <img className="project_mainImg" src={kn_main} alt="Thankspressure main"/>
        <h1 className="project_header">Knitted Light <span className="project_year">[2022]</span></h1>
        
        <p className="project_description">
          Together, through blending yarns, light and textiles can bring about magical stories. This
          coral reef knitting project is based on combining yarns that respond to light in different
          ways. The great beauty of textiles is in the many atmospheres, shapes, colors, harmonies,
          and effects that can be created through these unexpected yarn combinations together
          interacting with light.<br /><br />
          Through collaboration with the Textile Museum, ‘Knitted Light’ looked to find out the
          sophisticated beauty of mixing textile materials through the technique of knitting. The
          thread called monofilament was selected, this has a reflective property, it produces a new
          texture when combined with light and mixed with various yarns. When the monofilaments
          meet flexible elastic yarns, the material shows a new type of formative fun of contraction
          and expansion, giving rise to various 3D-type knitting experiments.<br /><br />
          The play of light and 3D shapes from the textile experiments are aesthetically inspired by
          the incredibly beautiful mystical atmosphere produced by the glow of the coral reefs
          beneath the sea.<br /><br />
          The different sources of light that the textile can be exposed to realize many layers to its
          material. In daylight, it remains as a sculpture, we observe the natural colors, patterns,
          and textures. When exposed to an artificial light the textile changes to produce a new
          beauty and dimension. On removing the light, in darkness, the textile glows, it produces
          its own light resembling the glowing coral reefs, we observe the patterns and shapes
          again with nuance.<br /><br />
          Furthermore, recently coral reefs are losing their own colors and being hard to glow due
          to the rising temperature of seawater. Sangmin hopes ‘Knitted Light’ not only presents the
          phenomenal beauty of light through objects composed of textile materials, But also
          enlightens a new reflection of the beauty of our nature.
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
          </div>
        </div>
      </div>
  </div>
  )
}

export default ThanksPressure;