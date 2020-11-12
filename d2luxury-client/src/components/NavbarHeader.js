/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-21 21:28:35
 * @modify date 2020-11-13 01:15:03
 * @desc [NavBar Component]
 */

// import react stuff
import React, { Component } from "react";
import { connect } from "react-redux";

// import bootstrap Nav
import { Nav, Navbar } from "react-bootstrap";

// to style the componet
import styled from "styled-components";

// Decode token
import jwtDecode from "jwt-decode";

const Styles = styled.div`
  .Navbar {
    background-color: #fff;
    position: sticky !important;
    top: 0;
  }
  .Navbar fixed-top {
    position: fixed !important;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    font-size: 1.3rem;

    &:hover {
      color: red;
    }
  }
`;

class NavbarHeader extends Component {
  state = {
    token: null,
  };
  render() {
    const authenticated = this.props.authenticated;
    const token = localStorage.FBIdToken;
    let decodedToken;
    if (token) {
      decodedToken = jwtDecode(token);
      console.log(decodedToken.email);
    }

    return (
      <Styles>
        <Navbar
          style={{ backgroundColor: "#fff", position: "sticky", fixed: "top" }}
          expand="lg"
          fixed="top"
          className="text-success"
        >
          <Navbar.Brand href="/" className="htl-title-text">
            <h3>D2Luxury </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/" className="text-success mr-2">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/rooms" className="text-success  mr-2">
                  Rooms
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about" className="text-success  mr-2">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact" className="text-success  mr-2">
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {authenticated ? (
                  <Nav.Link href="/register" className="text-success mr-2">
                    Create Room
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/register" className="text-success  mr-2">
                    Register
                  </Nav.Link>
                )}
              </Nav.Item>
              <Nav.Item>
                {authenticated ? (
                  <Nav.Link href="/logout" className="text-success  mr-2">
                    {decodedToken.email}
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/login" className="text-success  mr-2">
                    Login
                  </Nav.Link>
                )}

                {/* <Nav.Link href="/login">{ authenticated  ? 'Logout' : 'Login'} </Nav.Link> */}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

// map the global state (authenticated ) to the props.
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user,
});

// connect to the global state and export the component.
export default connect(mapStateToProps)(NavbarHeader);
