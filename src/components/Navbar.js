import React, { Component } from 'react';

import "../styles/navbar.css";

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  document.getElementById("navbar").style.opacity = "0";
  if(window.pageYOffset < 800){
    document.getElementById("navbar").style.opacity = "1";
  }
}
window.onmousemove = function(event){
  if(event.clientY < 60){
    document.getElementById("navbar").style.opacity = "1";
  }else if(window.pageYOffset < 800){
    document.getElementById("navbar").style.opacity = "1";
  }else{
    document.getElementById("navbar").style.opacity = "0";
  }
}

export default class App extends Component {
render() {
    return (
    <div id="navbar">
    <ul>
      <li className="active"><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
      
      <div className="row justify-content-end">
          <a class="btn btn--cv text-uppercase" href="mailto:matthawryszko@gmail.com"><span className="btn-text">cv</span></a>
        </div>
    </div>    
    );
  }
};

