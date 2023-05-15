import { NextSeo } from 'next-seo';
import styles from '../styles/contact.module.scss';
import initLayout from '../hooks/initLayout';

const Contact = ({layoutData}) => {
	if(!layoutData) return null;
	initLayout(layoutData);
  
  return(
    <>
    <NextSeo
        title='Contact'
        description='This is contact page about Sangmin Oh. Contact us and Tell me your stories.'
        canonical={`${process.env.NEXT_PUBLIC_API_URL}/contact`}
      />
    <section className={styles.section}>
      <div className={styles.description}>
        Tell me your stories and <br className={styles.reremove}/>
        please contact for all kinds of collaboration
      </div>
      <div className={styles.email}>
        Osangminstudio@gmail.com
      </div>
    </section>
    </>
  )
}

export default Contact;

export const getStaticProps = async() => {
  const layoutData = (await import(`../public/data/layout.json`)).default;

  return{
    props: {layoutData}
  }
}