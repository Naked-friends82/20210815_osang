import Link from 'next/link';
import Image from 'next/image'
import Navig from './Navig';
// import "../style/web/navig.css";
// import "../style/mobile/navig_mobile.css";

const Header = () => {
  return(
    <header className="navBox">
      <div className="navBox_1">
        <Link href='/'>
          <Image 
            src="/asset/logo.png"
            width={110} 
            height={20} 
            alt="osangmain Main Logo" />
        </Link>
      </div>
      <Navig />
    </header>
  )
}

export default Header;





