import Image from 'next/image';


const About = ({about_data}) => {
  const {
    profile, 
    simple_note,
    exhibition,
    award,
    lecture
  } = about_data;

  return(
    <section className="section_about">
      <div className="section_about__box">
        <div className="profile">
            <Image 
              className="profile_img" 
              src={profile.src}
              alt={profile.alt} 
              width={200}
              height={200}
              priority
            />
            <div className="profile_content">
              <h2 className="profile_header">{profile.name}<span>(Born {profile.ageAndCountry})</span></h2>
              <p className="profile_detail">{profile.desc}</p>
            </div>
          </div>
          <div className="description">
          <p className="description_1">
            {simple_note.desc_1}
          </p>
          <p className="description_2">
            {simple_note.desc_2}
          </p>
          <p className="description_3">
            {simple_note.desc_3}
          </p>
        </div>
        <div className="cv_section">
          <h3>EXHIBITION</h3>
          <ul>
            {exhibition.map(({year,title,where,date,isDone}) => {
              return(
                <li>{year} {title} / {where} / {date} </li>
              )
            })}
          </ul>
        </div>
        
        {award.length > 0 ?
          <div className="cv_section">
            <h3>AWARD</h3>
            <ul>
              {award.map(({year,title,url}) => {
                return <li className="underline" onClick={() => window.open(url)}>{year} {title}</li>
              })}
            </ul>
          </div>:<></>
        }

        {lecture.length > 0 ?      
          <div className="cv_section">
            <h3>LECTURE</h3>
            <ul>
              {lecture.map(({year,title}) => {
                return <li>{year} {title}</li>
                })}
            </ul>
          </div>:<></>
        }
      </div>
    </section>
  )
}

export default About;

export async function getStaticProps() {
  const about_data = await fetch(
    `http://localhost:3000/api/about`
  ).then((response) => response.json());

  return {
    props: { about_data },
    revalidate: 60 * 60,
  };
}