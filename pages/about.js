import Image from 'next/image';
import { NextSeo } from 'next-seo';
import initLayout from '../hooks/initLayout';
import styles from '../styles/about.module.scss';


const About = ({about_data, layoutData}) => {
  if (!about_data || !layoutData) return null;
	initLayout(layoutData);
  
  const {
    profile, 
    simple_note,
    exhibition,
    award,
    lecture
  } = about_data;

  return(
    <>
		<NextSeo
        title='About'
        description='This is information page about Sangmin Oh'
        canonical={`${process.env.NEXT_PUBLIC_API_URL}/about`}
      />
    <section className={styles.section}>
      <div className={styles.flexBox}>
        <div className={styles.profile}>
          <div className={styles.imgBox}>
            <Image 
              src={profile.src}
              alt={profile.alt} 
              fill
              priority
            />
          </div>
          <div className={styles.content}>
            <h1>{profile.name}<span>(Born {profile.ageAndCountry})</span></h1>
            <p>{profile.desc}</p>
          </div>
        </div>

        <div className={styles.desription}>
          <p>{simple_note.desc_1}</p>
          <p>{simple_note.desc_2}</p>
          <p>{simple_note.desc_3}</p>
        </div>

        <div className={styles.cv}>
          <h2>EXHIBITION</h2>
          <ul>
            {exhibition.map(({year,title,where,date,isDone}) => {
              return(
                <li key={title}>{year} {title} / {where} / {date} </li>
              )
            })}
          </ul>
        </div>
        
        {award.length > 0 ?
          <div className={styles.cv}>
            <h2>AWARD</h2>
            <ul>
              {award.map(({year,title,url}) => {
                return <li key={title} className={styles.underline} onClick={() => window.open(url)}>{year} {title}</li>
              })}
            </ul>
          </div>:<></>
        }

        {lecture.length > 0 ?      
          <div className={styles.cv}>
            <h2>LECTURE</h2>
            <ul>
              {lecture.map(({year,title}) => {
                return <li key={title}>{year} {title}</li>
                })}
            </ul>
          </div>:<></>
        }
      </div>
    </section>
    </>
  )
}

export default About;

export async function getStaticProps() {
  const about_data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/about`
  ).then((res) => res.json());
  // const about_data = (await import('../public/data/about.json')).default;
  const layoutData = (await import(`../public/data/layout.json`)).default;
  return {
    props: { about_data, layoutData },
    revalidate: 60 * 60,
  };
}