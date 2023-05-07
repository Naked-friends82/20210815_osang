import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import styles from '../../styles/common/header.module.scss';

const SnsMenu = ({snsUrl}) => {
  return(
    <>
      {snsUrl.instagram ? 
        <Link href={snsUrl.instagram}>
          <AiOutlineInstagram className={styles.snsIcon}/>
        </Link>
        : <></>}
      {snsUrl.facebook ? 
        <Link href={snsUrl.facebook}>
          <AiOutlineFacebook className={styles.snsIcon}/>
        </Link>
        : <></>}
      {snsUrl.twitter ? 
        <Link href={snsUrl.twitter}>
          <AiOutlineTwitter className={styles.snsIcon}/>
        </Link>
        : <></>}
    </>
  )
}

export default SnsMenu;