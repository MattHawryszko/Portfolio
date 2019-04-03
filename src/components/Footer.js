import React, { Component } from 'react';
import "../styles/footer.css"


export default class App extends Component {
render() {
    return (
    <div className="container-fluid footer-bg">
        <div className="row justify-content-center">
            <h4 className="pt-5 text-center text-uppercase text-light-blue">Matt Hawryszko<div class="dash"></div></h4>
        </div>
        <div className="row justify-content-center">
            <q className="text-white">The best thing about a boolean is even if you are wrong, you are only off by a bit.</q>
        </div>
        <div className="row justify-content-center pb-5">
            <a href="https://github.com/MattHawryszko" className="text-white"><h4><i class="fab fa-github-square p-1"></i></h4></a>
            <a href="https://www.linkedin.com/" className="text-white"><h4><i class="fab fa-linkedin p-1"></i></h4></a>
        </div>
        
    </div>     
    );
  }
};

