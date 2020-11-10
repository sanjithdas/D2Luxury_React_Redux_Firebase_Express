/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-02 10:30:31
 * @modify date 2020-11-06 14:24:29
 * @desc [listing all  rooms (home) , update room and delete room too]
 */

// react stuff
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// proptyped
import PropTypes from "prop-types";

// custom action component to delete room
import { deleteRoom } from "../actions/roomActions";

class Room extends Component {
  onShowClick = (e) => {
    console.log("OnShowClick");
    this.setState({ showRoomInfo: !this.state.showRoomInfo });
  };

  delClick = (id) => {
    this.props.deleteRoom(id);
  };

  render() {
    // pull the variables from the props (as this is passed from the  component)

    const { roomno, imageUrl, roomType, roomRate } = this.props.room;

    return (
      <div className="col-lg-6">
        <div className="room-wrap d-md-flex p-2 ">
          <a
            href="/"
            style={{ backgroundImage: "url(" + imageUrl + ")" }}
            className="img"
          >
            &nbsp;
          </a>
          <div className="half left-arrow d-flex align-items-center">
            <div className="text p-4 p-xl-5 text-center">
              <p className="star mb-0">
                <span className="ion-ios-star"></span>
                <span className="ion-ios-star"></span>
                <span className="ion-ios-star"></span>
                <span className="ion-ios-star"></span>
                <span className="ion-ios-star"></span>
              </p>
              <p className="mb-0">
                <span className="price mr-1">${roomRate}</span>{" "}
                <span className="per">per night</span>
              </p>
              <h3 className="mb-3">
                <Link to={`/room/details/${roomno}`}>{roomType}</Link>
              </h3>
              <p className="pt-1">
                <Link
                  to={`/room/details/${roomno}`}
                  className="btn-custom px-3 py-2"
                >
                  View Room Details{" "}
                  <span className="icon-long-arrow-right"></span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// proptypes declared
Room.propTypes = {
  room: PropTypes.object.isRequired,
};

// map state to props
const mapStateToProps = (state) => ({
  rooms: state.room.rooms,
  authenticated: state.user.authenticated,
});

// connect to the global state.
export default connect(mapStateToProps, { deleteRoom })(Room);

//export default Room
