/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-06 14:52:15
 * @modify date 2020-11-06 14:54:02
 * @desc [Authorization Rotes]
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

/**
 * if authenticated redirect to create room section, else the same component will load
 *  */
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? (
        <Redirect to="/admin/room/create" />
      ) : (
        <Component {...props} />
      )
    }
  />
);
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
