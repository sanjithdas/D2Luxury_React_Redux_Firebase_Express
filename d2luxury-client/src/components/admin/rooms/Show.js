/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-11-06 12:49:53
 * @desc [Room component - listing all the rooms of a registered user]
 */
// React stuff

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/**
 * custom component insert
 */
import MyRoomsPage from "../../admin/rooms/MyRooms";
import { getRooms, getAllMyRooms } from "../../../actions/roomActions";
import HeaderImage from "../../HeaderImage";

class Show extends Component {
  render() {
    
    return (
      <section className="bg-light mt-0">
        <HeaderImage />
        
        <MyRoomsPage />
      </section>
    );
  } // End of Render
}
// Prop types declaration
Show.propTypes = {
  //shortcut ptfr and ptar
  getRooms: PropTypes.func.isRequired,
  getAllMyRooms: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
};

//mapping state to props
const mapStateToProps = (state) => ({
  rooms: state.room.rooms,
  authenticated: state.user.authenticated,
});

// mapping action to props
const mapActionsToProps = {
  getRooms,
  getAllMyRooms,
};

// connect to global state and export
export default connect(mapStateToProps, mapActionsToProps)(Show);
