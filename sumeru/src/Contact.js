import React from "react";
const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="com-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="FullName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Phone"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea4" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea4"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-secondary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
