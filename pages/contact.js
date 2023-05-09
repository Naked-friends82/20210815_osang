import { NextSeo } from 'next-seo';
import styles from '../styles/contact.module.scss';

const Contact = () => {

  return(
    <>
    <NextSeo
        title='Contact'
        description='This is contact page about Sangmin Oh. Contact us and Tell me your stories.'
        // canonical='https://prac-nextjs-map.vercel.app'
        // openGraph={{
        //   url: 'https://prac-nextjs-map.vercel.app'
        // }}
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