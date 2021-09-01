import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Route exact path="/" component={Work} />
      <Route exact path="/work_thankspressure" component={ThanksPressure} />
      <Route exact path="/work_papa" component={Papa} />
      <Route exact path="/work_butterfly" component={Butterfly} />
      <Route exact path="/about" component={About} />
      <Route exact path="/news" component={News} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </Router>
  )
}
export default AppRouter;