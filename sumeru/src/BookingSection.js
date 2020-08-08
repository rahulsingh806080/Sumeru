import React from "react";
import web from "../src/images/logo.jpeg";

const BookingSection = (props) => {
  return (
    <>
      <section className="booking-section">
        <div className="auto-container auto-container1 ">
          <div className="inner-box">
            <div className="upper-box clearfix">
              <div className="title-inner pull-left">
                <h2>Lets's Disscuss Your Next Project Here</h2>
                <p>
                  <span>*</span>Your project will require some professional
                  attention for long live.
                </p>
              </div>
              <div className="link-box pull-right">
                <a href="contact.php">
                  Get call back from us<i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
            <form action="quote.php" method="get" className="booking-form">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                  <div className="field-input">
                    <i className="far fa-user"></i>
                    <input
                      type="text"
                      name="form_name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                  <div className="field-input">
                    <i className="fas fa-headphones"></i>
                    <input
                      type="text"
                      name="form_mobile"
                      placeholder="Your Mobile"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                  <div className="field-input">
                    <i className="fas fa-map-marker-alt"></i>
                    <input
                      type="text"
                      name="form_address"
                      placeholder="Address"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                  <div className="field-input">
                    <i className="far fa-calendar-alt"></i>
                    <input
                      type="text"
                      name="form_date"
                      id="datepicker"
                      placeholder="Metting Date"
                      required=""
                      className="hasDatepicker"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                  <div className="field-input">
                    <i className="far fa-clock"></i>
                    <input
                      type="text"
                      name="form_time"
                      placeholder="Comfortable Time"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 form-group message-btn">
                  <button type="submit" name="submit" className="theme-btn">
                    Book for Metting<i className="flaticon-login"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSection;
