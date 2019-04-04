import React, { Component } from 'react';

import Project from './Project';

import Image1 from "../img/website1.jpeg";
import Image2 from "../img/website2.jpeg";

export default class App extends Component {
  render() {
    return (
    <div className="container">
      <section id="projects">
        <div className="row justify-content-center">   
          <h2 className="py-5 text-center text-uppercase text-gray">Projects<div className="mx-auto dash-small"></div></h2>
        </div>
        <div className="row">
            <Project title="E Commerce" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus at eros pharetra pharetra in laoreet diam. Vivamus vel mollis sapien. Sed sagittis lectus vitae blandit fringilla. Quisque in eleifend ligula. Morbi tempus placerat magna. In et sagittis purus, vitae egestas eros. Cras facilisis lacinia enim, ut pharetra turpis." tools="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tellus nec ex bibendum gravida quis vitae eros. Vestibulum sagittis erat diam, et ultrices lectus consectetur vitae. Mauris mi ex." image={Image1} />
            <Project title="E Commerce Backend" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus at eros pharetra pharetra in laoreet diam. Vivamus vel mollis sapien. Sed sagittis lectus vitae blandit fringilla. Quisque in eleifend ligula. Morbi tempus placerat magna. In et sagittis purus, vitae egestas eros. Cras facilisis lacinia enim, ut pharetra turpis." tools="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tellus nec ex bibendum gravida quis vitae eros. Vestibulum sagittis erat diam, et ultrices lectus consectetur vitae. Mauris mi ex." image={Image2} />
            <Project title="Small Business" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus at eros pharetra pharetra in laoreet diam. Vivamus vel mollis sapien. Sed sagittis lectus vitae blandit fringilla. Quisque in eleifend ligula. Morbi tempus placerat magna. In et sagittis purus, vitae egestas eros. Cras facilisis lacinia enim, ut pharetra turpis." tools="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tellus nec ex bibendum gravida quis vitae eros. Vestibulum sagittis erat diam, et ultrices lectus consectetur vitae. Mauris mi ex." image={Image1}  />
            <Project title="Realestate" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus at eros pharetra pharetra in laoreet diam. Vivamus vel mollis sapien. Sed sagittis lectus vitae blandit fringilla. Quisque in eleifend ligula. Morbi tempus placerat magna. In et sagittis purus, vitae egestas eros. Cras facilisis lacinia enim, ut pharetra turpis." tools="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tellus nec ex bibendum gravida quis vitae eros. Vestibulum sagittis erat diam, et ultrices lectus consectetur vitae. Mauris mi ex." image={Image2} />
            <Project title="Resterant" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus at eros pharetra pharetra in laoreet diam. Vivamus vel mollis sapien. Sed sagittis lectus vitae blandit fringilla. Quisque in eleifend ligula. Morbi tempus placerat magna. In et sagittis purus, vitae egestas eros. Cras facilisis lacinia enim, ut pharetra turpis." tools="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tellus nec ex bibendum gravida quis vitae eros. Vestibulum sagittis erat diam, et ultrices lectus consectetur vitae. Mauris mi ex." image={Image1} />
            <Project title="Digital agency" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus at eros pharetra pharetra in laoreet diam. Vivamus vel mollis sapien. Sed sagittis lectus vitae blandit fringilla. Quisque in eleifend ligula. Morbi tempus placerat magna. In et sagittis purus, vitae egestas eros. Cras facilisis lacinia enim, ut pharetra turpis." tools="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tellus nec ex bibendum gravida quis vitae eros. Vestibulum sagittis erat diam, et ultrices lectus consectetur vitae. Mauris mi ex." image={Image2} />
        </div>
      </section>
    </div>     
    );
  }
};

