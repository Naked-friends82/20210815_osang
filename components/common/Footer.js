import Link from 'next/link';
import useSWR from 'swr';
import { FOOTER_KEY } from '../../hooks/useFooter';
import styles from '../../styles/common/footer.module.scss';

const Footer = () => {
  const {data} = useSWR(FOOTER_KEY);
  
  return(
    <footer className={styles.footer}>
      <Link href="/contact">
          <div>
          {data !== undefined ? data.msg: ""}
          </div>
      </Link>
      <div>
        {data !== undefined ? data.copyright: ""} 
        <br /> Designed by Naked Friends+82
      </div>
  </footer>
  )
}

export default Footer;