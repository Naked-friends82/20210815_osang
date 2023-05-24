import Link from 'next/link';
import useSWR from 'swr';
import { FOOTER_KEY } from '../../hooks/initLayout';
import styles from '../../styles/common/footer.module.scss';

const Footer = () => {
  const {data} = useSWR(FOOTER_KEY);
  if(!data){return null};
  
  return(
    <footer className={styles.footer}>
      <Link href="/contact" aria-label='Contact link'>
        <div>{data.msg}</div>
      </Link>
      <div>
        {data.copyright} 
        <br /> Made by Kim Youngdong.
      </div>
  </footer>
  )
}

export default Footer;