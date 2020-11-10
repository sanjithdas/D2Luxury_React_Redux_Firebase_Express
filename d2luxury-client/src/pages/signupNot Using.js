/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 16:36:03
 * @modify date 2020-11-06 14:40:17
 * @desc [Signup Component]
 */
import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: {},
    };
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
    axios
      .post(
        "http://localhost:5000/d2luxuryredux/us-central1/api/login",
        userData
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false,
        });
      });
    // console.log("Submitted Auth");
  };

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //console.log("onchange Auth");
  };

  render() {
    const { errors, loading } = this.state;

    return (
      <div>
        <Row className="mt-5 mb-5">
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Body>
                <h1 className="text-center pb-4, pt-3">
                  <FontAwesomeIcon icon="lock" className="text-primary" />{" "}
                  <span className="text-black">Login</span>
                </h1>

                <Form onSubmit={this.onHandleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onHandleChange}
                    />
                    <span style={{ color: "red" }}>{errors.email} </span>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>password wewr</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onHandleChange}
                    />

                    <span style={{ color: "red" }}>{errors.password} </span>
                  </Form.Group>
                  {errors.general && (
                    <span style={{ color: "red" }}>{errors.general} </span>
                  )}

                  <Button type="submit" variant="black" className="btn-block">
                    Login
                    {loading && <div class="spinner-grow text-warning"></div>}
                  </Button>
                  <br></br>
                  <small>
                    {" "}
                    Don't have an account ? sign up{" "}
                    <Link to="/signup"> here </Link>
                  </small>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Signup;
