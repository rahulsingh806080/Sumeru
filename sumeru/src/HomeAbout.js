import React from "react";
import web from "../src/images/logo.jpeg";
import absa from "../src/images/absa.png";
import masa3 from "../src/images/masa3.png";
import shape1 from "../src/images/shape-1.png";
import websa12 from "../src/images/websa12.jpg";
import abc from "../src/images/abc.jpeg";

const HomeAbout = (props) => {
  return (
    <>
      <section className="about-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(./src/images/shape/shape.png" }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div id="image_block_one">
                <div className="image-box">
                  <div
                    className="pattern-layer"
                    style={{ backgroundImage: `url(${shape1})` }}
                  ></div>
                  <figure className="image image-1">
                    <img src={absa} alt="" />
                  </figure>
                  <figure className="image image-1">
                    <img src={absa} alt="" />
                  </figure>
                  <figure className="image image-3">
                    <img
                      style={{ marginLeft: 130 }}
                      src={masa3}
                      alt=""
                      className="rotate-me"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_one">
                <div className="content-box">
                  <div className="sec-title">
                    <h6>
                      <i className="flaticon-roof-1"></i>About Company
                    </h6>
                  </div>
                  <div className="text">
                    <p>
                      Matimoni is a leading startup Group .Macona is a
                      technology driven consultancy and organisation with strong
                      global presence in the field of{" "}
                      <strong>
                        Software engineering and software testing,Infrastructure
                        development, and business process outsourcing(BPO),
                      </strong>{" "}
                    </p>
                    <p>
                      Matrimeru as a techno-commerical organization utilize the
                      talent and expertise developed in the various organization
                      of Government of India and state Government and we also
                      work on out sourcing projects.
                    </p>
                  </div>
                  <div className="area-code"></div>
                  <h4>
                    or make a call to <a href="tel:18005556677">7022545388</a>
                  </h4>
                  <div className="btn-box clearfix">
                    <a href="about.php" className="theme-btn">
                      Read More<i className="flaticon-login"></i>
                    </a>
                    <a
                      href=""
                      className="lightbox-image video-btn"
                      data-caption=""
                    >
                      <i className="fas fa-play"></i>Video About IT &amp;
                      Software Developnment.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
