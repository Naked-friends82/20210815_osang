import Image from 'next/image';


const EachPress = ({data}) => {
  const goUrl = () => {
    window.open(data.url);
  }

  return(
    <div className="press_element">
      <h3 className="press_title"><span className="press_year">{data.when}</span>{data.where}</h3>
      {data.url == null ? 
        <Image 
          className="pressImg" 
          src={data.imgSrc} 
          alt="press capture" 
          width={400}
          height={200}
          />
      : <Image 
          className="pressImg clickable" 
          onClick={goUrl} 
          src={data.imgSrc} 
          alt="press capture" 
          width={400}
          height={200}
          />
      }
    </div>
  )
}

export default EachPress;