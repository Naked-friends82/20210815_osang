import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import styles from '../../styles/common/header.module.scss';

const SnsMenu = ({snsUrl}) => {
  return(
    <>
      {snsUrl.instagram ? 
        <Link href={snsUrl.instagram} aria-label='Instagram link'>
          <AiOutlineInstagram className={styles.snsIcon}/>
        </Link>
        : <></>}
      {snsUrl.facebook ? 
        <Link href={snsUrl.facebook} aria-label='Facebook link'>
          <AiOutlineFacebook className={styles.snsIcon}/>
        </Link>
        : <></>}
      {snsUrl.twitter ? 
        <Link href={snsUrl.twitter} aria-label='Twitter link'>
          <AiOutlineTwitter className={styles.snsIcon}/>
        </Link>
        : <></>}
    </>
  )
}

export default SnsMenu;