import Link from 'next/link';
import { useState } from "react";
import { AiOutlineInstagram } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '../../styles/common/header.module.scss';

const INSTA_URL = 'https://www.instagram.com/osangmin_studio/';

function Navig(){
  /*  모바일 시 변경되는 navig 관련 */
  const [navigVisi, setNavigVisi] = useState(false);
  const showNav = () => {
    setNavigVisi(!navigVisi);
  }

  return(
    <>
      <GiHamburgerMenu className={styles.navToggle} />
      <div className={navigVisi? styles.navSection : `${styles.navSection} ${styles.navMobile}`}>
        <div className={styles.linkBox}>
          <Link href='/'>Work</Link>
          <Link href='/about'>About</Link>
          <Link href='/press'>Press</Link>
          <Link href='/contact'>Contact</Link>
          <Link href={INSTA_URL}>
            <AiOutlineInstagram className={styles.instaIcon}/>
          </Link>
          <div className={styles.backBtn} onClick={showNav} />
        </div>
      </div>
    </>
  );
}

export default Navig;