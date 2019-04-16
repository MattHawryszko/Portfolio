import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


import "../styles/index.css";
import "../styles/animate.css";
import wow from "wow.js"

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';



new wow(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       false,       // default
  live:         true        // default
  }
).init();


export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
      	<Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}
