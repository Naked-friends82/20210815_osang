import Image from 'next/image';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from '../../styles/eachWork.module.scss';

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
    <div className={styles.carousel}>
      <div className={styles.imgBox}>
        <Image 
          src={data[currentDetail]} 
          alt="detail"
          style={{"objectFit": "cover"}}
          fill
          />
      </div>
      <div className={styles.dots}>
        <button className={styles.btn} onClick={shiftDetail} value="prev" ><BiChevronLeft /></button>
          {data.map(
            (each,index) => 
            <button 
              key={index} 
              value={index} 
              onClick={shiftDetail} />
            )}
        <button className={styles.btn} onClick={shiftDetail} value="next" ><BiChevronRight /></button>
      </div>
    </div>
  );
}

export default Carousel;