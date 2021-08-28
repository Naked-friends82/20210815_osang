import React from 'react';
import profileImg from '../asset/profile.jpg';
import '../style/web/about.css';
import '../style/mobile/about_mobile.css';

const About = () => {

  return(
    <section className="section_about">
      <div className="section_about__box">
        <div className="profile">
          <img className="profile_img" src={profileImg} alt="profile Osangmin" />
          <div className="profile_content">
            <h2 className="profile_header">SANGMIN OH <span>(Born 1994, Kr)</span></h2>
            <p className="profile_detail">2017~ Design Academy Eindhoven (NL) <span className="remove"> - </span>Public and Private</p>
          </div>
        </div>
        <div className="description">
          <p className="description_1">
            Osangmin Studio is an art and design studio established in 2021 by Sangmin Oh based in Netherlands and Korea. He is influenced by sculptural crafts, color of explored materials and architectural elements.
          </p>
          <p className="description_2">
            The studio focuses on observing trivial and small empty spaces, aside from spaces that are displayed amongst people's daily hectic movements. “I want to fill up those brief, empty spaces. They can be filled up with emotional or visual stories or even with new realizations.”
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;