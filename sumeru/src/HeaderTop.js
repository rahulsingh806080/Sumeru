import React from "react";
import web from "../src/images/logo.jpeg";

const HeaderTop = (props) => {
  return (
    <>
      <header className="main-header style-one">
        <div className="header-top">
          <div className="large-container">
            <div className="top-inner clearfix">
              <div className="top-right pull-right clearfix">
                <div className="content-left-side" data-app-modern-menu="true">
                  <a
                    className="content-link link mbr-black text-white "
                    href="#"
                  >
                    <i className="fa fa-phone "></i>
                    <span className="mdi-communication-call mbr-iconfont mbr-iconfont-btn"></span>
                    &nbsp; Call Us Now: +91 7022545388
                  </a>
                  <a
                    className="content-link link mbr-black text-white "
                    href="#"
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span className="mdi-communication-email mbr-iconfont mbr-iconfont-btn"></span>
                    &nbsp; Email: connect@matrimeru.com
                  </a>
                </div>

                <ul className="social-links clearfix fl-right">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTop;
