import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="bg-light-gray">
      <section id="skills">
        <div className="container">
          <div className="row justify-content-center">   
            <h2 className="py-5 text-center text-uppercase text-blue">Skills<div className="mx-auto dash-small"></div></h2>
          </div>
          <div className="row pb-5 justify-content-center">
              <div className="wow slideInLeft faster col-lg-4 col-md-6 pb-2">
                <i className="text-blue h1 fas fa-code pb-2 d-flex justify-content-center"></i>
                <h6 className="text-blue text-center">Front-end Web development<div className="mt-1 dash-xs mx-auto"></div></h6>
                <p className="text-gray text-center">HTML5, Css (Sass)<br/>JavaScript(Es6) & JQuery <br/>React And Redux<br/> Bootstrap<br/> Node</p>
              </div>
              <div className="wow bounceIn col-lg-4 col-md-6 pb-2">
                <i className="text-blue h1 fas fa-server pb-2 d-flex justify-content-center"></i>
                <h6 className="text-blue text-center">Back-end Web development<div className="mt-1 dash-xs mx-auto"></div></h6>
                <p className="text-gray text-center">Express<br/>Mongoose <br/>MongoDB<br/>MySQL<br/> PHP</p>
              </div>
              <div className="wow slideInRight faster col-lg-4 col-md-4 pb-2">
                <i className="text-blue h1 fas fa-cogs pb-2 d-flex justify-content-center"></i>
                <h6 className="text-blue text-center">Development Tools<div className="mt-1 dash-xs mx-auto"></div></h6>
                <p className="text-gray text-center">NPM<br/>Git, Github <br/>Webpack , Babel<br/> PHPmyAdmin<br/> Gulp </p>
              </div>
          </div>
        </div>
        </section>     
      </div>   
    );
  }
};