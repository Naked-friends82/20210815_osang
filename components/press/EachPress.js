import Image from 'next/image';
import styles from '../../styles/press.module.scss';


const EachPress = ({data}) => {
  const goUrl = () => {
    if(data.url !== null){
      window.open(data.url);
    }
  }

  return(
    <div className={styles.element}>
      <h2 className={styles.title}><span>{data.year}</span>{data.where}</h2>
      <Image 
        className={data.url == null ? "": styles.clickable}
        onClick={goUrl}
        src={data.imgSrc} 
        sizes='(max-width: 599px) 16w, 600px'
        alt="press capture" 
        quality={60}
        priority
        />
    </div>
  )
}

export default EachPress;