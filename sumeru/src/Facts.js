import React from "react";
import web from "../src/images/logo.jpeg";
import line1 from "../src/images/line-1.png";
import line2 from "../src/images/line-2.png";
const Facts = (props) => {
  return (
    <>
      <section className="funfact-section">
        <div className="auto-container">
          <div
            className="inner-container clearfix wow fadeInLeft animated animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
            style={{
              visibility: "visible",
              animationDuration: 1500,
              animationDelay: 0,
              animationName: "fadeInLeft",
            }}
          >
            <div className="counter-block-one">
              <div className="inner-box">
                <div
                  className="shap-box"
                  style={{ backgroundImage: `url(${line1})` }}
                ></div>
                <div className="icon-box">
                  <i className="flaticon-roof-2"></i>
                </div>
                <div className="count-outer count-box counted">
                  <span className="count-text" data-speed="1500" data-stop="29">
                    29
                  </span>
                  <span></span>
                </div>
                <h3>Projects Competed Successfully</h3>
              </div>
            </div>
            <div className="counter-block-one">
              <div className="inner-box">
                <div
                  className="shap-box"
                  style={{ backgroundImage: `url(${line2})` }}
                ></div>

                <div className="count-outer count-box counted">
                  <span
                    className="count-text"
                    data-speed="1500"
                    data-stop="130"
                  >
                    130
                  </span>
                </div>
                <h3>Professional Workers in Company</h3>
              </div>
            </div>
            <div className="counter-block-one">
              <div className="inner-box">
                <div
                  className="shap-box"
                  style={{ backgroundImage: `url(${line2})` }}
                ></div>

                <div className="count-outer count-box counted">
                  <span className="count-text" data-speed="1500" data-stop="2">
                    2
                  </span>
                  <span>+</span>
                </div>
                <h3>Customers Benefit Every Day</h3>
              </div>
            </div>
            <div className="counter-block-one">
              <div className="inner-box">
                <div
                  className="shap-box"
                  style={{ backgroundImage: `url(${line1})` }}
                ></div>
                <div className="icon-box">
                  <i className="flaticon-medal"></i>
                </div>
                <div className="count-outer count-box counted">
                  <span>0</span>
                  <span className="count-text" data-speed="1500" data-stop="5">
                    5
                  </span>
                </div>
                <h3>Received Awards &amp; Certifications</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facts;
