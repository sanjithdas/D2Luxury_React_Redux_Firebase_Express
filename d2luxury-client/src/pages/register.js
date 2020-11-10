/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 16:36:03
 * @modify date 2020-11-09 22:59:11
 * @desc [User Register Component]
 */
//redux stuff
import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";

// prop types
import PropTypes from "prop-types";

// bootstrap , fontawesome
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// custom components
import { signupUser } from "../actions/userActions";

class Register extends Component {
  // constructor initialise  the component state
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
  }
  // for submit action
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    // sign up method to let the user to sign in
    this.props.signupUser(newUserData, this.props.history);
  };
  // setting errors
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) this.setState({ errors: nextProps.UI.errors });
  }

  // on change , update the component state
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
                  <FontAwesomeIcon icon="loc" className="text-success" />{" "}
                  <span className="text-success">Register</span>
                </h1>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={this.onHandleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
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

                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.onHandleChange}
                    />

                    <span style={{ color: "red" }}>
                      {errors.confirmPassword}{" "}
                    </span>
                  </Form.Group>

                  {errors.general && (
                    <span style={{ color: "red" }}>{errors.general} </span>
                  )}

                  {errors.error === "auth/weak-password" && (
                    <span style={{ color: "red" }}>
                      Please use a strong password{" "}
                    </span>
                  )}

                  <Button
                    type="submit"
                    variant="black"
                    className="btn btn-block btn-success"
                  >
                    Signup
                    {loading && <div class="spinner-grow text-warning"></div>}
                  </Button>
                  <br></br>
                  <small>
                    {" "}
                    Already have an account ? login{" "}
                    <Link to="/login"> here </Link>
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

// Prop types defenition
Register.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};
// global state to props
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

// connect to the global state and export
export default connect(mapStateToProps, { signupUser })(Register);
