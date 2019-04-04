import React, { Component } from 'react';
import '../styles/project.css'


var leftOrRight = 0;
export default class App extends Component {
    
    componentWillMount(){
        if(leftOrRight === 0){
            leftOrRight = 1;
        }else{
            leftOrRight = 0;
        }
    }
    render() {
        if(leftOrRight === 0){
            return (
                <div>
                    <div className="row py-5">
                        <div className="col-12 col-md-6">
                        <img src={this.props.image} alt="Logo" className="w-100" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="pt-2 text-center text-uppercase text-blue">{this.props.title}<div className="dash-xs mx-auto"></div></h5>
                            <p className="text-center text-gray px-5 h6 pb-1">{this.props.text}</p>
                            <p className="text-center text-gray px-5 h6"><span className="text-blue">Build Tools :</span> {this.props.tools}</p>
                            <div className="row justify-content-center">
                                <button class="btn-projects d-flex">View Live Demo</button>                 
                            </div>
                            <div className="row justify-content-center">
                                <button class="btn-projects d-flex">View On Github</button>
                            </div>
                        </div>
                        
                    </div>
            
                </div>     
                );
        }else{
            return (
                <div>
                    <div className="row py-5">
                        
                        <div className="col-12 col-md-6">
                            <h5 className="pt-2 text-center text-uppercase text-blue">{this.props.title}<div className="dash-xs mx-auto"></div></h5>
                            <p className="text-center text-gray px-5 h6 pb-1">{this.props.text}</p>
                            <p className="text-center text-gray px-5 h6"><span className="text-blue">Build Tools :</span> {this.props.tools}</p>
                            <div className="row justify-content-center">
                                <button class="btn-projects d-flex">View Live Demo</button>                 
                            </div>
                            <div className="row justify-content-center">
                                <button class="btn-projects d-flex">View On Github</button>
                            </div>
                            
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={this.props.image} alt="Logo" className="w-100" />
                        </div>
                    </div>
            
                </div>     
                );
        }
    
  }
};

