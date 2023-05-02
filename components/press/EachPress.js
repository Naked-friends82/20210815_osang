import Image from 'next/image';
import styles from '../../styles/press.module.scss';


const EachPress = ({data, priority}) => {
  const goUrl = () => {
    window.open(data.url);
  }

  return(
    <div className={styles.element}>
      <h2 className={styles.title}><span>{data.year}</span>{data.where}</h2>
      {data.url == null ? 
        <Image 
          src={data.imgSrc} 
          alt="press capture" 
          width={600}
          height={424}
          priority= {priority}
          />
      : <Image 
          className={styles.clickable}
          onClick={goUrl} 
          src={data.imgSrc} 
          alt="press capture" 
          width={600}
          height={424}
          priority= {priority}
          />
      }
    </div>
  )
}

export default EachPress;