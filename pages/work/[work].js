import Image from 'next/image';
import Carousel from '../../components/work/Carousel';
// import "../style/web/tspre.css";
// import "../style/mobile/tspre_mobile.css";


const WorkDetail = ({detailData}) => {
  const {isDone, data} = detailData;

  return(
    <div className="project">
      <div className="project_content">
        {isDone ? 
        <>
          <Image 
            className="project_mainImg" 
            src={data.mainImg} 
            alt="Thankspressure main"
            width={500}
            height={700}
            priority
            />
          <h1 className="project_header">{data.title} <span className="project_year">[{data.year}]</span></h1>
          
          <div className="project_description">
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