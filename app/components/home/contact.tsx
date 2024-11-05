import React from "react";

const Contact = () => {
  return (
    <div className="contact-outer">
      <div id="contact" className="smooth">
        <div className="contact-inner">
          <div className="column1">
            <h1>CONTACT</h1>
            <p>
              I hope you enjoyed my site. If you have any further questions, or
              have a position open, I would love to hear from you!
            </p>
          </div>
          <div className="column2">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputFirstName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputLastName"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputText">Comments</label>
                {/* <input type="text" className="form-control" id="exampleInputText"> */}
                <textarea
                  className="form-control"
                  id="exampleInputText"
                  rows={3}
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
