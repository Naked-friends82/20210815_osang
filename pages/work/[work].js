import Image from 'next/image';
import { NextSeo } from 'next-seo';
import initLayout from '../../hooks/initLayout';
import Carousel from '../../components/work/Carousel';
import styles from '../../styles/eachWork.module.scss';


const WorkDetail = ({detailData, path, layoutData}) => {
  if (!detailData || !layoutData) return null;
  initLayout(layoutData);
  const {isDone, data} = detailData;

  return(
    <>
    <NextSeo
        title={data.title + " | Sangmin Oh"}
        description={`There are ${data.title} project's photos and statement.`}
        canonical={`${process.env.NEXT_PUBLIC_API_URL}/work/${path}`}
      />
    <section className={styles.project}>
      <div className={styles.flexBox}>
        {isDone ?  
        <>
          <div className={styles.imgBox}>
            <Image 
              src={data.mainImg} 
              alt={`${data.title} main`}
              sizes='(max-width: 599px) 16w, 600px'
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
  const detailData = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/workDetail?path=${params.work}`
	).then((res) => res.json());
  const path = params.work;

  const layoutData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/layout`
    ).then((res) => res.json());

  // const paths = (await import('../../public/data/workPath.json')).default;
  // const exactPath = paths.find((project) => project === params.work);
  // const detailData = (await import(`../../public/data/work/${exactPath}.json`)).default;
  // const layoutData = (await import(`../../public/data/layout.json`)).default;

  return {
    props:{ detailData, path, layoutData}
  }
}