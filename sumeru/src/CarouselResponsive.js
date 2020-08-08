import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import digital from "../src/images/digitalmarketing.png";
import softwaredev from "../src/images/softwaredev.jpg";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay="false" transitionTime="" dynamicHeight="true">
        <div style={{ height: 300 }}>
          <img src={digital} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={softwaredev} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={softwaredev} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
