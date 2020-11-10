/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-11-09 22:26:17
 * @desc [Room component - listing all the rooms ,
 *  passing props to individual component]
 */
// React stuff
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"; //impt

/**
 * custom component insert
 */
import Room from "../pages/room";
import { getRooms } from "../actions/roomActions";

class Rooms extends Component {

  
  // get this rooms from the API
  componentDidMount() {
    this.props.getRooms();
  }

  render() {
    const { rooms } = this.props;
    return (
      <section className="ftco-section bg-light ftco-room">
        <div className="container-fluid px-0">
          <div className="row no-gutters justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ">
              <span className="htl-title-text">D2Luxury Rooms</span>
              <h2 className="mb-4">Hotel Master's Rooms</h2>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="room-wrap">
                <div className="img d-flex align-items-center item-header-img1">
                  <div className="text text-center px-4 py-4">
                    <h4>
                      Welcome to <a href="/" className="htl-title-text">D2luxury</a> Hotel
                    </h4>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Fragment>
              {
                // we are checking the contacts array for each of the contact objects
                rooms.map((room) => (
                  // This passes the contact object to the Contact component
                  // console.log(room)
                  <Room key={room.userId} room={room} />
                ))
              }
            </Fragment>
          </div>
        </div>
      </section>
    );
  } // End of Render
} // End of Component Rooms

// prop types 
Rooms.propTypes = {
  //shortcut ptfr and ptar
  getRooms: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
};

// mapping global state to props
const mapStateToProps = (state) => ({
  rooms: state.room.rooms,
  authenticated: state.user.authenticated,
})
// connect to the global state and export.
export default connect(mapStateToProps, { getRooms })(Rooms);
