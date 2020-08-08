import React from "react";
import line7 from "../src/images/shape-7.png";
import line2 from "../src/images/line-2.png";
import sae from "../src/images/sae12.jpg";
import logo from "../src/images/logo.jpeg";
const Footer = () => {
  return (
    <>
      <footer className="main-footer style-one">
        <div className="footer-top bg-color-1">
          <figure
            className="image-layer wow slideInLeft animated animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
            //   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: slideInLeft;"
          >
            <img src="assets/images/resource/house-2.png" alt="" />
          </figure>
          <div className="auto-container">
            <div className="widget-section">
              <div
                className="pattern-scale"
                //     style="background-image: url(assets/images/shape/shape-7.png);"
                style={{ backgroundImage: `url(${line7})` }}
              ></div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget logo-widget">
                    <div className="">
                      <figure className="logo">
                        <a href="index.php">
                          <img
                            style={{ height: 150, marginLeft: 70 }}
                            src={logo}
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="text">
                      <p>
                        Matrimeru is a leading startup Group. Matrimeru as a
                        techno-commerical organization utilize the talent and
                        expertise developed in the various organization.
                      </p>
                    </div>
                    <div className="subscribe-box">
                      <h4>Subscribe Us</h4>
                      <form action="" method="post" className="subscribe-form">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address ..."
                            required=""
                          />
                          <button type="submit">
                            <i className="flaticon-send"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3>Useful Links</h3>
                    </div>
                    <div className="widget-content clearfix">
                      <ul className="list clearfix">
                        <li>
                          <a href="index.php">Home</a>
                        </li>
                        <li>
                          <a href="about.php">About</a>
                        </li>
                        <li>
                          <a href="webdesign.php">IT &amp; Software</a>
                        </li>

                        <li>
                          <a href="careers.php">Careers</a>
                        </li>
                        <li>
                          <a href="contact.php">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <div
                        className="pattern-layer"
                        //   style="background-image: url(assets/images/shape/line-2.png);"
                        style={{ backgroundImage: `url(${line2})` }}
                      ></div>

                      <h3>Need Help? Contact Us</h3>
                    </div>
                    <div className="widget-content clearfix">
                      <ul className="info-list clearfix">
                        <li>
                          <h5>Mobile:</h5>
                          <p>
                            <b>+91 &nbsp;7022545338 </b>
                          </p>
                        </li>
                        <li>
                          <h5>Email:</h5>
                          <p>
                            <strong>connect@matrimeru.com</strong>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget post-widget">
                    <div className="widget-title">
                      <h3>Project</h3>
                    </div>
                    <div className="widget-content">
                      <div className="post-inner">
                        <div className="post">
                          <figure className="image-box">
                            <a href="">
                              <img src={sae} alt="" />
                            </a>
                          </figure>
                          <h4>
                            <a href="">Ecommerce Website </a>
                          </h4>
                          <span className="post-date">
                            <i className="far fa-calendar"></i>March 21, 2020
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-box clearfix">
              <div className="copyright pull-left">
                <p>
                  Copyright © 2020 All Rights Reserved by{" "}
                  <a href="index.php">Matrimeru Pvt Ltd 2020</a>.
                </p>
              </div>
              <ul className="social-links pull-right">
                <li>
                  <a href="index.php">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="index.php">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="index.php">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="index.php">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
