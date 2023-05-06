import Image from 'next/image';
import Carousel from '../../components/work/Carousel';
import styles from '../../styles/eachWork.module.scss';


const WorkDetail = ({detailData}) => {
  const {isDone, data} = detailData;

  return(
    <div className={styles.project}>
      <div className={styles.flexBox}>
        {isDone ?  
        <>
          <div className={styles.imgBox}>
            <Image 
              className="project_mainImg" 
              src={data.mainImg} 
              alt={`${data.title} main`}
              fill
              priority
              />
          </div>
          <h1>{data.title} <span>[{data.year}]</span></h1>
          <div className={styles.description}>
            {data.desc.map((each,index) => <p key={index}>{each}</p>)}
          </div>
          <Carousel data={data.detailImg}/>
        </>
        :<p>preparing...</p>}
      </div>
  </div>
  )
}
export default WorkDetail;

export const getStaticPaths = async () => {
  const pathData = (await import('../../public/data/workPath.json')).default;
  const paths = pathData.map((eachPath) => ({params: {work: eachPath}}));

  return { paths, fallback: true };
};

export const getStaticProps = async({ params }) => {
  const detailData = await fetch(
		`http://localhost:3000/api/workDetail?path=${params.work}`
	).then((res) => res.json());

  return {
    props:{detailData},
    revalidate: 60 * 60
  }
}