import React from 'react';
import { Link } from 'react-router-dom';
import '../style/web/footer.css';

const Footer = ({goToRightUrl}) => {
  return(
    <footer>
      <span className="footer_welcome link" data-url="/contact" onClick={goToRightUrl}>
          <span>
          All Welcome. Do not hesitate to get in touch.
          </span>
      </span>
    <div>
      © 2021. Sangmin Oh. All Rights Reserved. <br />
      Designed by Naked Friends+82
    </div>
  </footer>
  )
}

export default Footer;