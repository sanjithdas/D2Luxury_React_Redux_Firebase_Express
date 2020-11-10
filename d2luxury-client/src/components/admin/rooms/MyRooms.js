/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:48:22
 * @modify date 2020-11-06 21:40:13
 * @desc [Room component - listing all the rooms]
 */

// react stuff
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

// pro types
import PropTypes from "prop-types";

// jwt decode import
import jwtDecode from "jwt-decode";

/**
 * custom component insert
 */
import { getAllMyRooms } from "../../../actions/roomActions";
import MyRoom from "../../admin/rooms/MyRoom";

class MyRooms extends Component {
  // get all the rooms when the component mounted
  componentDidMount() {
    const token = localStorage.FBIdToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      this.props.getAllMyRooms(decodedToken.user_id);
    }
  }

  render() {
    const { rooms } = this.props;

    return (
      <section className="ftco-section bg-light ftco-room">
        <div className="container-fluid px-0">
          <div className="row no-gutters justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ">
              <span className="htl-title-text">
                <h3>D2Luxury Rooms</h3>
              </span>
              <h2 className="mb-4">Hotel Master's Rooms</h2>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="room-wrap">
                <div className="img d-flex align-items-center item-header-img1">
                  <div className="text text-center px-4 py-4">
                    <h2>
                      Welcome to{" "}
                      <a href="index.html" className="htl-title-text">
                        D2luxury
                      </a>{" "}
                      Hotel
                    </h2>
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
                // we are checking the room array for each of the room objects
                rooms.map((room) => (
                  // This passes the room object to the MyRoom
                  <MyRoom key={room.roomno} room={room} />
                ))
              }
            </Fragment>
          </div>
        </div>
      </section>
    );
  } // End of Render
} // End of Component MyRooms

// Prop declaration
MyRooms.propTypes = {
  //shortcut ptfr and ptar
  getAllMyRooms: PropTypes.func.isRequired,
  rooms: PropTypes.object.isRequired,
};

// map state to props
const mapStateToProps = (state) => ({
  rooms: state.room.rooms,
  authenticated: state.user.authenticated,
});

// connect to the global state and export
export default connect(mapStateToProps, { getAllMyRooms })(MyRooms);
