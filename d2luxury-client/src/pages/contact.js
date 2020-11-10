/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-06 13:15:57
 * @modify date 2020-11-09 21:59:58
 * @desc [Contact page]
 */
import React, { Component } from "react";

import emailjs from "emailjs-com";
//init("user_JoXMOLyUnnZS9K58BUWGB");

/**
 * custom component insert
 */
import HeaderImage from "../components/HeaderImage";
// google map
import GoogleMap from "../components/gMap";

// joi validation
import reactJoiValidation from "react-joi-validation";
import Joi from "joi-browser";

reactJoiValidation.setJoi(Joi);

var schema = Joi.object().keys({
  name: Joi.string()
    .required()
    .label("Name")
    .error((errors) => {
      return {
        message: "Your name is required",
      };
    }),
  email: Joi.string()
    .required()
    .email()
    .min(5)
    .label("Email")
    .error((errors) => {
      return {
        message: "Email  is required and should be in the proper format ",
      };
    }),
  subject: Joi.string()
    .required()
    .error((errors) => {
      return {
        message: "Subject is required ",
      };
    }),
  message: Joi.string()
    .required()
    .min(20)
    .error((errors) => {
      return {
        message: "Message is required with min. 20 characters",
      };
    }),
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: "",
      text: "",
    };
  }

  // form validation on submit
  handleSubmit = (e) => {
    // alert(this.state.errors.name);
    alert(this);
    e.preventDefault();
    this.sendEmail(e);
  };

  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_bycrbsg",
        e.target,
        "user_JoXMOLyUnnZS9K58BUWGB"
      )
      .then(
        (result) => {
          console.log("success");
          //  window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    let {
      user: { name, email, subject, message },
      errors,
      changeHandler,
      validateHandler,
    } = this.props;
    return (
      <section className="bg-light mt-0 mb-0">
        <HeaderImage />

        <div className="container">
          <div className="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
            <div className="col-md-9  text-center d-flex align-items-end justify-content-center">
              <div className="text ">
                <h1 className="mt-5 bread text-success">Contact us</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-light">
          <div className="container">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h3 text-success">Contact Information</h2>
              </div>
              <div className="w-100"></div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p>
                    <span>Address:</span> 205 My street, Doveton Australia
                  </p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p>
                    <span class="nowrap">Phone:</span>{" "}
                    <a class="nowrap" href="tel://1234567920">
                      + 1235 2355 98
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="info bg-white p-4">
                  <p>
                    <span>Website</span> <a href="/">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="row block-9">
              <div className="col-md-6 order-md-last d-flex">
                <form
                  className="bg-white p-5 contact-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name={name}
                      value={name}
                      className="form-control"
                      placeholder="Your Name"
                      onChange={changeHandler("name")}
                      onBlur={validateHandler("name")}
                    />
                    <span style={{ color: "red" }}>{errors.name} </span>
                  </div>
                  <div className="form-group">
                    <input
                      value={email}
                      type="mail"
                      className="form-control"
                      placeholder="Your Email"
                      onChange={changeHandler("email")}
                      onBlur={validateHandler("email")}
                    />
                    <span style={{ color: "red" }}>{errors.email} </span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      value={subject}
                      className="form-control"
                      placeholder="Subject"
                      onChange={changeHandler("subject")}
                      onBlur={validateHandler("subject")}
                    />
                    <span style={{ color: "red" }}>{errors.subject} </span>
                  </div>
                  <div className="form-group">
                    <textarea
                      cols="30"
                      rows="7"
                      className="form-control"
                      value={message}
                      placeholder="Message"
                      onChange={changeHandler("message")}
                      onBlur={validateHandler("message")}
                    ></textarea>
                    <span style={{ color: "red" }}>{errors.message} </span>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-success py-3 px-5"
                    />
                  </div>
                </form>
              </div>

              <div className="col-md-6 d-flex">
                <div id="map" className="bg-white">
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section></section>

        <section>
          <br></br>
        </section>
      </section>
    );
  }
}
// validation option for JOI
var validationOptions = {
  joiSchema: schema,
  only: "user",
};

export default reactJoiValidation(Contact, validationOptions);
