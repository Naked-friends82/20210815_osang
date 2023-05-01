import Image from 'next/image';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Carousel = ({data}) => {
  //다 하고 개선하자.
  //현재 제대로 작동 안함
  // If문을 hashmap으로
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

  return (
  <div className="image_reck">
    <Image 
      className="image_reck__imgs" 
      src={data[currentDetail]} 
      width={500}
      height={400}
      // priority
      alt="detail" />
    <div className="image_reck__btn">
      <button className="image_btn" onClick={shiftDetail} value="prev" ><BiChevronLeft /></button>
      <button className="image_btn" onClick={shiftDetail} value="next" ><BiChevronRight /></button>
    </div>
    <div className="image_reck__dot">
      {data.map(
        (each,index) => 
        <button 
          key={index} 
          className="dot" 
          value={index} 
          onClick={shiftDetail} />
        )}
    </div>
</div>);
}

export default Carousel;