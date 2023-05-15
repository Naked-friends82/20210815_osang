import Link from 'next/link';
import Image from 'next/image'
import Navig from './Navig';
import styles from '../../styles/common/header.module.scss';
import useSWR from 'swr';
import { HEADER_KEY } from '../../hooks/initLayout';

const Header = () => {
  const {data} = useSWR(HEADER_KEY);
  if(!data){return null};

  return(
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <Link href='/' aria-label='Home link'>
          <Image 
            src={data !== undefined ? data.logoSrc: "/asset/logo.png"}
            alt="main logo" 
            sizes='200px'
            fill
            />
        </Link>
      </div>
      <Navig />
    </header>
  )
}

export default Header;





