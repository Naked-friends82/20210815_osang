import React from 'react';
import EachPress from '../components/EachPress';
import press_01 from '../asset/press/press_01.jpg';
import press_02 from '../asset/press/press_02.jpg';
import press_03 from '../asset/press/press_03.jpg';
import press_04 from '../asset/press/press_04.jpg';
import press_05 from '../asset/press/press_05.jpg';
import press_06 from '../asset/press/press_06.jpg';
import press_07 from '../asset/press/press_07.jpg';
import press_08 from '../asset/press/press_08.jpg';
import press_09 from '../asset/press/press_09.jpg';
import "../style/web/press.css";

const Press = () => {

  const press_data = [
    {
      when: 2023,
      where: "Colour Hive_ MIX magazine",
      url: null,
      imgSrc: press_09,
    },
    {
      when: 2023,
      where: "BNO_Dutch Designers Yearbook",
      url: null,
      imgSrc: press_08,
    },
    {
      when: 2022,
      where: "FD",
      url: "https://fd.nl/samenleving/1453620/het-beste-design-van-eindhovense-studenten-sma3caWdyIra",
      imgSrc: press_07,
    },
    {
      when: 2022,
      where: "Cover magazine",
      url: null,
      imgSrc: press_06,
    },
    {
      when: 2021,
      where: "Yellow Trace",
      url: "https://www.yellowtrace.com.au/osangmin-studio-thankspressure-rug-design-for-wellbeing/#gallery-5",
      imgSrc: press_05,
    },
    {
      when: 2021,
      where: "Design Milk",
      url: "https://design-milk.com/the-thankspressure-rug-combines-acupressure-with-dance-to-treat-common-ailments/",
      imgSrc: press_04,
    },
    {
      when: 2021,
      where: "Design mate",
      url: "https://design-mate.ru/read/news/studio-osangmin-proizveli-kover-kotoryy-lechit-golovnuyu-bol",
      imgSrc: press_03,
    },
    {
      when: 2021,
      where: "AD Magazine",
      url: "https://www.admagazine.ru/design/lechebnyj-kover-ot-studio-osangmin",
      imgSrc: press_02,
    },
    {
      when: 2021,
      where: "Designboom",
      url: "https://www.designboom.com/design/studio-osangmin-thankspressure-carpet-08-07-2021/",
      imgSrc: press_01,
    },
  ];


  return(
    <section className="section_press">
      <div className="press_content">
        {press_data.map((each) => <EachPress data={each} />)}
      </div>
    </section>
  )
}

export default Press;