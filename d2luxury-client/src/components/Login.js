/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 16:36:03
 * @modify date 2020-11-09 22:56:33
 * @desc [Login Component]
 */
//react
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// styles
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// user action
import { loginUser } from "../actions/userActions";
//props
import PropTypes from "prop-types";

class Login extends Component {
  // initialise the local state
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  // update the UI - loading status
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) this.setState({ errors: nextProps.UI.errors });
  }

  // form submit
  onHandleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData, this.props.history);
  };
  // updating the current state
  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      UI: { loading },
    } = this.props;

    const { errors } = this.state;

    return (
      <div>
        <Row className="mt-5 mb-5">
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Header>
                <h1 className="pb-4, pt-3">
                  <FontAwesomeIcon icon="lock" className="text-success" />{" "}
                  <span className="text-success">Login</span>
                </h1>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={this.onHandleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={this.state.email}
                      onChange={this.onHandleChange}
                    />
                    <span style={{ color: "red" }}>{errors.email} </span>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>password</Form.Label>
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

                  <Button
                    type="submit"
                    variant="black"
                    className="btn-block btn-success"
                  >
                    Login
                    {loading && (
                      <div className="spinner-grow text-warning"></div>
                    )}
                  </Button>
                  <br></br>
                  <small>
                    {" "}
                    Don't have an account ? sign up{" "}
                    <Link to="/register"> here </Link>
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

// declare the prop types
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

// map state to props
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
  authenticated: state.user.authenticated,
});

// map action to props
const mapActionsToProps = {
  loginUser,
};

// connect to the globas state and export
export default connect(mapStateToProps, mapActionsToProps)(Login);
