import Link from 'next/link';
import useSWR from 'swr';
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { HEADER_KEY } from '../../hooks/useHeader';
import styles from '../../styles/common/header.module.scss';
import SnsMenu from './SnsMenu';


function Navig(){
  const {data} = useSWR(HEADER_KEY);

  /*  모바일 시 변경되는 navig 관련 */
  const [navigVisi, setNavigVisi] = useState(false);
  const showNav = () => {
    setNavigVisi(!navigVisi);
  }

  return(
    <>
      <GiHamburgerMenu className={styles.navToggle} onClick={showNav} />
      <div className={navigVisi? styles.navSection : `${styles.navSection} ${styles.navMobile}`}>
        {data !== undefined ?
          <div className={styles.linkBox}>
            {data.nav_list.map((eachMenu, index) => 
              <Link key={eachMenu} href={`/${index !== 0 ? eachMenu.toLowerCase() : ""}`}>{eachMenu}</Link>
            )}
            <SnsMenu snsUrl={data.sns}/>
            <div className={styles.backBtn} onClick={showNav} />
          </div>
        :<></>}
      </div>
    </>
  );
}

export default Navig;