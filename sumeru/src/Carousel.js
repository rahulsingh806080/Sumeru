import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "./CarouselBootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import digital from "../src/images/digitalmarketing.png";
import softwaredev from "../src/images/softwaredev.jpg";

const styles = { height: 600, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: false,
    };
  }
  _onSelect = (active, direction) => {};
  _visiableOnSelect = (active) => {};
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div
        className="container-fluid paddingnone"
        style={{ paddingBottom: 20 }}
      >
        <Row>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={this.slider}
              version={4}
            >
              <div>
                <img style={{ width: "100%", height: "100%" }} src={digital} />
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div
                style={{ ...styles, backgroundImage: `url(${softwaredev})` }}
              >
                {/* <img
                  style={{ width: "100%", height: "100%" }}
                  src={softwaredev}
                /> */}
                <div className="carousel-center">We are into Development</div>
                <div className="carousel-caption">Software Development</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightpink" }}>
                <img style={{ width: "100%", height: "100%" }} src={digital} />
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={softwaredev}
                />
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Carousel;
