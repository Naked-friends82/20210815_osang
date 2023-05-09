import { NextSeo } from 'next-seo';
import EachPress from '../components/press/EachPress';
import styles from '../styles/press.module.scss';


const Press = ({pressData}) => {
  const {data} = pressData;

  return(
    <>
    <NextSeo
        title='Press'
        description='This is press page about Sangmin Oh.'
        // canonical='https://prac-nextjs-map.vercel.app'
        // openGraph={{
        //   url: 'https://prac-nextjs-map.vercel.app'
        // }}
      />
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
    </>
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