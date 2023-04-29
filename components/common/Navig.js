import Link from 'next/link';
import { useState } from "react";
import { AiOutlineInstagram } from 'react-icons/ai';

const INSTA_URL = 'https://www.instagram.com/osangmin_studio/';

function Navig(){
  /*  모바일 시 변경되는 navig 관련 */
  const [navigVisi, setNavigVisi] = useState(false);
  const showNav = () => {
    setNavigVisi(!navigVisi);
  }

  return(
    <div className={navigVisi? "navBox_2__nav" : "navBox_2__nav nav_mobile"}>
      <div className="forCol">
        <Link href='/'>Work</Link>
        <Link href='/about'>About</Link>
        <Link href='/press'>Press</Link>
        <Link href='/contact'>Contact</Link>
        <Link href={INSTA_URL}>
          <AiOutlineInstagram />
        </Link>
        <div className="nav_back" onClick={showNav} />
      </div>
    </div>
  );
}

export default Navig;