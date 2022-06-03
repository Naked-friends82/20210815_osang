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
//connected-router
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';;

const AppRouter = (props) => {
  const goToRightUrl = (e) => {
    const linkSpan = e.target.closest('.link')
    const url = linkSpan.dataset.url;
    props.history.push(url);
  }
  const goToThankPressure = () => {
    props.history.push("/work_thankspressure");
  }
  const goToPapa = () => {
    props.history.push("/work_papa");
  }
  const goToButterfly = () => {
    props.history.push("/work_butterfly");
  }


  return (
    <>
      <Navig goToRightUrl={goToRightUrl} />
        <Route exact path="/" 
          render={() => <Work goToRightUrl={goToRightUrl} />}
          />
        <Route exact path="/work_thankspressure" component={ThanksPressure} />
        <Route exact path="/work_papa" component={Papa} />
        <Route exact path="/work_butterfly" component={Butterfly} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
      <Footer goToRightUrl={goToRightUrl} />
    </>
    // <Router>
    //   <Navig />
    //   <Switch>
    //     <Route exact path="/" component={Work} />
    //     <Route exact path="/work_thankspressure" component={ThanksPressure} />
    //     <Route exact path="/work_papa" component={Papa} />
    //     <Route exact path="/work_butterfly" component={Butterfly} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/news" component={News} />
    //     <Route exact path="/contact" component={Contact} />
    //   </Switch>
    //   <Footer />
    // </Router>
  )
};

// export default AppRouter;
export default connect(null)(withRouter(AppRouter));