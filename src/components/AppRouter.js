import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Navig from './Navig';
import Work from '../routes/Work';
import About from '../routes/About';
import News from '../routes/News';
import Contact from '../routes/Contact';
import Footer from './footer';
import ThanksPressure from '../components/ThanksPressure';
import Papa from './Papa';
import Butterfly from './Butterfly';


const AppRouter = () => {
  
return (
  <Router>
    <Navig />
    <Switch>
      <Route exact path="/">
        <Work />
      </Route>
      <Route exact path="/work_thankspressure">
        <ThanksPressure />
      </Route>
      <Route exact path="/work_papa">
        <Papa />
      </Route>
      <Route exact path="/work_butterfly">
        <Butterfly />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/news">
        <News />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
    <Footer />
  </Router>
  )
}
export default AppRouter;