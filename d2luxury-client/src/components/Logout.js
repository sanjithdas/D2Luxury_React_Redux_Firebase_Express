/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-30 21:36:21
 * @modify date 2020-11-06 13:11:16
 * @desc [Logout component]
 */

// Redux
import React, { Component } from "react";
import { connect } from "react-redux";

// logout

import { logoutUser } from "../actions/userActions";

class Logout extends Component {
  // logout when the component mounted
  componentDidMount() {
    this.props.logoutUser();
    console.log("successfully loggedout");
    this.props.history.push("/login");
  }
  render() {
    return <div></div>;
  }
}

// map state to props
const mapStateToProps = (state) => ({
  user: state.user,
});

// map action to props
const mapActionsToProps = {
  logoutUser,
};

// connect the global state and export
export default connect(mapStateToProps, mapActionsToProps)(Logout);
