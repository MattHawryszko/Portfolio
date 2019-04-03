import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


import "../styles/index.css";

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
