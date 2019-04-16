import React, { Component } from 'react';

import "../styles/navbar.css";
import $ from "jquery";
import "bootstrap/js/dist/modal";

window.onscroll = function() {
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
var previousId
window.onmousedown = function(event){
  $("li").click(
    function(event) {
      event.preventDefault();
      var id = event.target.parentNode.className
      id = id.replace('active', '').trim()
      $('li').removeClass('active')
      $(event.target.parentNode).addClass('active')
      
      if(id !== previousId){
        $('html, body').animate({
          scrollTop: $("#"+id).offset().top
      }, 1000);
      previousId = id;
      }
      
       
    }
  );
  
}

export default class App extends Component {
render() {
    return (
      <div>
    <nav id="navbar">
    <ul className="d-none d-md-block">
      <li className="home active"><a href="/">HOME</a></li>
      <li className="about"><a href="/">ABOUT ME</a></li>
      <li className="skills"><a href="/">SKILLS</a></li>
      <li className="projects"><a href="/">PROJECTS</a></li>
      
      
    </ul>
      <div className="d-flex justify-content-between justify-content-md-end pt-2">
          <a href="#exampleModal" role="button" className="btn toggleNav pl-4 pt-1 pb-2 d-flex d-md-none" data-toggle="modal"><i className="p-0 m-0 fas fa-bars toggleNav"></i></a>
          <a className="text-uppercase pr-4 py-2 pb-3 py-md-0" href="resume.pdf" target="_blank"><span className="btn-text"><i className="fa fa-download"></i>cv</span></a>
      </div>
      
    </nav>    
   



<div className="modal fade p-0 m-0 w-100" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-bg" role="document">
    <div className="modal-content modal-bg p-0 m-0 ">
    <button type="button" className="close justify-content-end d-flex text-light-gray " data-dismiss="modal" aria-label="Close"><span className="h1" aria-hidden="true">&times;</span></button>
      <div className="modal-body modal-bg p-0 m-0 justify-content-center d-flex">
        <ul className="">
          <li className="home active"><a data-dismiss="modal" href="/" className="text-center">HOME</a></li>
          <li className="about"><a data-dismiss="modal" href="/" className="text-center">ABOUT ME</a></li>
          <li className="skills"><a data-dismiss="modal" href="/" className="text-center">SKILLS</a></li>
          <li className="projects"><a data-dismiss="modal" href="/" className="text-center">PROJECTS</a></li>
          
        </ul>
      </div>

    </div>
  </div>
</div>
  </div>
    );
  }
};

