import { NextSeo } from 'next-seo';
import EachPress from '../components/press/EachPress';
import initLayout from '../hooks/initLayout';
import styles from '../styles/press.module.scss';


const Press = ({pressData, layoutData}) => {
  if (!pressData || !layoutData) return null;
  initLayout (layoutData);
  const {data} = pressData;

  return(
    <>
    <NextSeo
        title='Press'
        description='This is press page about Sangmin Oh.'
        canonical={`${process.env.NEXT_PUBLIC_API_URL}/press`}
      />
    <section className={styles.section}>
      <div className={styles.content}>
        {data.map((each) => 
          <EachPress 
            key={each.where} 
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
  const layoutData = (await import(`../public/data/layout.json`)).default;

  return{
    props: {pressData, layoutData},
    revalidate: 60*60,
  }
}