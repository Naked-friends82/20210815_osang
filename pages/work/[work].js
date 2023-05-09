import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Carousel from '../../components/work/Carousel';
import styles from '../../styles/eachWork.module.scss';


const WorkDetail = ({detailData}) => {
  if (!detailData) return null;
  const {isDone, data} = detailData;

  return(
    <>
    <NextSeo
        title={data.title}
        description={`There are ${data.title} project's photos and statement.`}
        // canonical='https://prac-nextjs-map.vercel.app'
        // openGraph={{
        //   url: 'https://prac-nextjs-map.vercel.app'
        // }}
      />
    <section className={styles.project}>
      <div className={styles.flexBox}>
        {isDone ?  
        <>
          <div className={styles.imgBox}>
            <Image 
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
  </section>
    </>
  )
}
export default WorkDetail;

export const getStaticPaths = async () => {
  const pathData = (await import('../../public/data/workPath.json')).default;
  const paths = pathData.map((eachPath) => ({params: {work: eachPath}}));

  return { paths, fallback: true };
};

export const getStaticProps = async({ params }) => {
  // const detailData = await fetch(
	// 	`http://localhost:3000/api/workDetail?path=${params.work}`
	// ).then((res) => res.json());
  // const detailData = (await import(`../public/data/work/${params.work}.json`)).default;

  const paths = (await import('../../public/data/workPath.json')).default;
  const exactPath = paths.find((project) => project === params.work);
  const detailData = (await import(`../../public/data/work/${exactPath}.json`)).default;

  return {
    props:{ detailData },
    revalidate: 60 * 60
  }
}