import React from 'react';
import { Link } from 'react-router-dom';
import '../style/web/footer.css';

const Footer = () => {
  return(
    <footer>
      <Link className="footer_welcome" to="/contact">
          <span>
          All Welcome. Do not hesitate to get in touch.
            </span>
      </Link>
    <div>
      © 2021. Sangmin Oh. All Rights Reserved. <br />
      Designed by Naked Friends+82
    </div>
  </footer>
  )
}

export default Footer;