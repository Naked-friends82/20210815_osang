import React from 'react';
import profileImg from '../asset/profile.jpg';
import '../style/web/about.css';
import '../style/mobile/about_mobile.css';

const About = () => {
  const awardUrl = "https://userfiles.mailswitch.nl/files/4300-b8a4fbc62595d2971b85afb3875f03a7.jpg";
  const goUrl = () => {
    window.open(awardUrl);
  }

  return(
    <section className="section_about">
      <div className="section_about__box">
        <div className="profile">
          <img className="profile_img" src={profileImg} alt="profile Osangmin" />
          <div className="profile_content">
            <h2 className="profile_header">SANGMIN OH <span>(Born 1994, Kr)</span></h2>
            <p className="profile_detail">2017 ~ 2022 BA - Design Academy Eindhoven (NL)</p>
          </div>
        </div>
        <div className="description">
          <p className="description_1">
            Sangmin Oh established his own studio in 2021 based in Netherlands and Korea. He is influenced by sculptural crafts, textile techniques, color of explored materials and architectural elements.
          </p>
          <p className="description_2">
            The studio focuses on observing trivial and small empty spaces, aside from spaces that are displayed amongst people's daily hectic movements. “I want to fill up those brief, empty spaces. They can be filled up with emotional or visual stories and even with new realizations.”
          </p>
        </div>
        <div className="cv_section">
          <h3>EXHIBITION</h3>
          <ul>
            <li>2023 New year exhibition / Priveekollektie contemporary art design , Heusden , NL / 29 . Jan ~ 12 . Mar</li>
            <li>2022 ‘If you have a headache, Take a samba’ / ETZ, Tilburg, NL / 04 . Nov ~ 24 . Feb</li>
            <li>2022 ‘Table of curiosities’ Commissioned by Minyoung foodlab / YKSI, Eindhoven, NL / 22 ~ 30 . Oct</li>
            <li>2022 Graduation Show, Dutch Design Week / Microtuin, Eindhoven, NL / 22 ~ 30 . Oct</li>
            <li>2022 OBJECT Rotterdam / HAKA building, Rotterdam, NL / 20 ~ 22 . May</li>
            <li>2021 Isola Design, Dutch Design Week / Schellens Fabriek, Eindhoven, NL / 16 ~ 24 . Oct</li>
            <li>2020 Reframing Textile Minor exhibition / Textiel Museum, Tilburg, NL / 07 . Feb ~ 10 . Mar</li>
          </ul>
        </div>
        <div className="cv_section">
          <h3>AWARD</h3>
          <ul>
            <li className="underline" onClick={goUrl}>2022 Winner of SVTM Jong Talent Award 2022 at the Textiel Museum in Tilburg</li>
          </ul>
        </div>
        <div className="cv_section">
          <h3>LECTURE</h3>
          <ul>
            <li>2022 Textiel plus festival 2022</li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}

export default About;