import React, { Component } from 'react';

import "../styles/home.css"

export default class App extends Component {
render() {
    return (
    <div className="container-fluid home-bg vh-100 vertical-center">
      <div className="col-12 my-auto">
        <div className="row justify-content-center ">
            <h3 className="pt-5 text-center text-uppercase text-blue">Matt Hawryszko<div class="dash-white"></div></h3>
        </div>
        
        <div className="row justify-content-center pb-2">
            <a href="https://github.com/MattHawryszko" className="text-white"><h4><i class="fab fa-github-square p-1"></i></h4></a>
            <a href="https://www.linkedin.com/" className="text-white"><h4><i class="fab fa-linkedin p-1"></i></h4></a>
        </div>
        <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <p className="text-white text-center text-uppercase">Hi my names Matt,<br/>Im a fullstack web developer from the Greater Toronto Area and I aspire to build <span className="text-blue">elegant and functional</span> Web Applications with the goal of a <span className="text-blue">flawless</span> user experience</p>

        </div>
                    </div>
        <div className="row justify-content-center">
          <a class="btn--default btn--contact text-uppercase" href="mailto:matthawryszko@gmail.com">contact me</a>
        </div>
        
      </div>
        
      
    </div>       
    );
  }
};

