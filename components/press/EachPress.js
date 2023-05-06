import Image from 'next/image';
import styles from '../../styles/press.module.scss';


const EachPress = ({data, priority}) => {
  const goUrl = () => {
    window.open(data.url);
  }

  return(
    <div className={styles.element}>
      <h2 className={styles.title}><span>{data.year}</span>{data.where}</h2>
      <div className={styles.imgBox}>
      <Image 
        className={data.url == null ? "": styles.clickable}
        onClick={data.url == null ? "": goUrl}
        src={data.imgSrc} 
        alt="press capture" 
        fill
        priority= {priority}
        />
      </div>
    </div>
  )
}

export default EachPress;