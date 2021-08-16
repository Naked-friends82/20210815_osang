import React from 'react';
import profileImg from '../asset/profile.jpg';

const About = () => {
  return(
    <section className="section_about">
      <div className="section_about__profile">
        <img class="image_draft" src={profileImg} alt="profile Osangmin" />
        <h2>SANGMIN OH (Born 1994, Kr)</h2>
        <p>2017~ Design Academy Eindhoven (NL) - Public and Private</p>
      </div>
      <div className="section_about__description">
        <p>
        Osangmin Studio is an art and design studio established in 2021 by Sangmain Oh based in Nedtherlands and Lorea. He is influenced by sculptural crafts, color of explored materials and architectural elements. 
        </p>
        <p>
          The studio focuses on observing trivial and small empty spaces, aside from spaces that are displayed amongst people's daily hectic movements. "I want to fill up those brief, empty spaces. They can be filled up with emotional or visual storis or even with new realizations."
        </p>
      </div>
    </section>
  )
}

export default About;