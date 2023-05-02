import Link from 'next/link';
import Image from 'next/image'
import Navig from './Navig';
import styles from '../../styles/common/header.module.scss';

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <Link href='/' className={styles.mainLogo}>
          <Image 
            src="/asset/logo.png"
            alt="osangmain Main Logo" 
            style={{ objectFit: 'cover' }}
            fill
            />
        </Link>
      </div>
      <Navig />
    </header>
  )
}

export default Header;





