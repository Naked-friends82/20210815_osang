import styles from '../styles/error404.module.scss';



const Custom404 = () => {
  const redirectToMain = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}`
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.error}>404</h1>
      <div className={styles.message}>
        Sorry, this page isn&apos;t available. 
      </div>
      <div 
        className={styles.return}
        onClick={redirectToMain}>
      Return to Sangmin Oh
      </div>
  </section>
  );
}
export default Custom404;