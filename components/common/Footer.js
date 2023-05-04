import Link from 'next/link';
import styles from '../../styles/common/footer.module.scss';

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <Link href="/contact">
          <div>
          All Welcome. Do not hesitate to get in touch.
          </div>
      </Link>
      <div>
        © 2021. Sangmin Oh. All Rights Reserved. <br />
        Designed by Naked Friends+82
      </div>
  </footer>
  )
}

export default Footer;