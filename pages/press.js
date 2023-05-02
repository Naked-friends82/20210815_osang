import EachPress from '../components/press/EachPress';
import styles from '../styles/press.module.scss';


const Press = ({pressData}) => {
  const {data} = pressData;

  return(
    <section className={styles.section}>
      <div className={styles.content}>
        {data.map((each, index) => 
          <EachPress 
            key={each.where} 
            priority={index == 0} 
            data={each} />
          )}
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