import React, { Component } from 'react';
import "../styles/about.css"
import Image from "../img/self.jpg";
export default class App extends Component {
render() {
    return (
    <div className="container">
      <section id="about">
        <div className="py-5 row">
            <div className="col-md-6 d-none d-sm-block my-auto">
                <img src={Image} alt="Logo" className="w-100" />
            </div>
            <div className="col-md-6 col-12">
              <h2 className="py-5 text-center text-uppercase text-blue">About Me<div className="mx-auto dash-small"></div></h2>
              <div className="my-auto">
                <h5 className="text-blue pb-2">My name is Matt Hawryszko. I’m a self-taught web developer. </h5>
                <p className="text-gray">I build beautiful, usable web Applications using best practices and the latest W3C web standards. I specialize in front-end development, user experience using modern tools in the build process. I tasked myself to find a passion and that is how i got into Web Development. My goal is to work fully as a web developer in a team of amazing people who share the same passion, and work daily to fulfil it . I am ready to start working with you. </p>
              </div>
            </div>
        </div>
      </section>
    </div>     
    );
  }
};

