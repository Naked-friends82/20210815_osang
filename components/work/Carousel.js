import Image from 'next/image';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from '../../styles/carousel.module.scss';

const Carousel = ({data}) => {
  const [currentDetail, setCurrentDetail] = useState(0);
  const tmpArray = Array.from({length:data.length},(v,k) => k);

  const shiftDetail = (e) => {
    const {target:{dataset:{value}}} = e;
    if(tmpArray.indexOf(parseInt(value)) >= 0){
      setCurrentDetail(parseInt(value));
      return
    }
    btnsLogic(value);
  };

  const btnsLogic = (value) => {
    if(value === "prev" && currentDetail !== 0){
      setCurrentDetail(currentDetail -1);
    } else if(value === "next" && currentDetail !== tmpArray.length -1){
      setCurrentDetail(currentDetail +1);
    } 
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.imgBox}>
        <Image 
          src={data[currentDetail]} 
          alt="detail"
          fill
          />
      </div>
      <div className={styles.dots}>
        <BiChevronLeft className={styles.btn} onClick={shiftDetail} data-value="prev" />
          {tmpArray.map((each,index) => 
            <button 
              className={currentDetail == each ? styles.now: ""}
              key={each} 
              data-value={each} 
              onClick={shiftDetail} 
              aria-label={(index + 1) + "st detail image button"} />
            )}
        <BiChevronRight className={styles.btn} onClick={shiftDetail} data-value="next" />
      </div>
    </div>
  );
}

export default Carousel;