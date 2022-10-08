import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navig from './Navig';
import Work from '../routes/Work';
import About from '../routes/About';
import News from '../routes/News';
import Contact from '../routes/Contact';
import Footer from './footer';
import ThanksPressure from '../components/ThanksPressure';
import KnittedLight from '../components/KnittedLight';
import Papa from './Papa';
import Butterfly from './Butterfly';
import "../style/web/univ.css";
import "../style/mobile/univ_mobile.css";


function App() {
  return (
    <main className="App">
      <Router>
        <Navig />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/work_knitted_light" element={<KnittedLight />} />
          <Route path="/work_thankspressure" element={<ThanksPressure />} />
          <Route path="/work_papa" element={<Papa />} />
          <Route path="/work_butterfly" element={<Butterfly />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;