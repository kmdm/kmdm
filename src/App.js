import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import DevSkills from './DevSkills';
import OpSkills from './OpSkills';
import Projects from './Projects';
import Actions from './Actions';
import Map from './Map';
import Footer from './Footer';

import './App.scss';

export default function App()
{
    return (
      <Router>
          <div id="main">
              <Switch>
                  <Route exact path="/">
                      <Home />
                      <About />
                      <DevSkills />
                      <OpSkills />
                      <Projects />
                      <Actions />
                      <Map />
                  </Route>
              </Switch>
              <Footer />
          </div>
      </Router>
    );
}