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
        canonical={`${process.env.NEXT_PUBLIC_API_URL}/press`}
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
    `${process.env.NEXT_PUBLIC_API_URL}/api/press`
  ).then((res) => res.json());
  // const pressData = (await import('../public/data/press.json')).default;

  return{
    props: {pressData},
    revalidate: 60*60,
  }
}