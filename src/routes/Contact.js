import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "../style/web/contact.css"
import "../style/mobile/contact_mobile.css"

const Contact = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/contact');
  },[]);
  return(
    <section className="section_contact">
      <div className="contect_description">
        Tell me your stories and <br className="reremove"/>
        please contact for all kinds of collaboration
      </div>
      <div className="contact_email">
        Osangminstudio@gmail.com
      </div>
    </section>
  )
}

export default Contact;