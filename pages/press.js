import EachPress from '../components/press/EachPress';
// import "../style/web/press.css";
// import "../style/mobile/press_mobile.css";


const Press = ({pressData}) => {
  const {data} = pressData;

  return(
    <section className="section_press">
      <div className="press_content">
        {data.map((each,index) => <EachPress key={each.where} data={each} />)}
      </div>
    </section>
  )
}

export default Press;

export const getStaticProps = async() => {
  const pressData = await fetch(
    `http://localhost:3000/api/press`
  ).then((res) => res.json());

  return{
    props: {pressData},
    revalidate: 60*60,
  }
}