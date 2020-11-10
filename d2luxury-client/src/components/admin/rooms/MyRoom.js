/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-03 13:28:05
 * @modify date 2020-11-06 23:29:43
 * @desc [Get all the rooms belongs to the logged in users]
 */
// import react stuff
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// prop types
import PropTypes from "prop-types";

// jwt token decode import
import jwtDecode from "jwt-decode";

// import
import { deleteRoom } from "../../../actions/roomActions";
import { getAllMyRooms } from "../../../actions/roomActions";

// font awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MyRoom extends Component {
  // delete a room on clicking the delete
  delClick = (id) => {
    let confirmFlag = window.confirm("Do you want to delete this record?");
    console.log(confirmFlag);
    if (confirmFlag) this.props.deleteRoom(id);
    const token = localStorage.FBIdToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      this.props.getAllMyRooms(decodedToken.user_id);
    }
  };
  // listing all the rooms belongs to the user
  componentDidMount() {
    const token = localStorage.FBIdToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      this.props.getAllMyRooms(decodedToken.user_id);
    }
    this.setState({
      roomRate: this.props.room.roomRate,
    });
  }

  render() {
    console.log(this.props.room.userId);
    const { roomno, imageUrl, roomType, roomRate, userId } = this.props.room;

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
                <span className="per">per night </span>
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
              <p className="pt-1">
                <Link
                  to={`/admin/room/edit/${roomno}`}
                  className="btn btn-custom px-3 py-2"
                >
                  <FontAwesomeIcon
                    icon="pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "primary",
                      position: "relative",
                    }}
                  ></FontAwesomeIcon>
                </Link>{" "}
                <div
                  className="ml-0 btn"
                  style={{
                    left: -30,
                    width: "50px",
                    height: "35px",
                    cursor: "pointer",
                    float: "right",
                    color: "red",
                    background: "#fff",
                    border: "1px  grey",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                >
                  <FontAwesomeIcon
                    icon="times"
                    style={{
                      cursor: "pointer",
                      color: "red",
                      position: "absolute",
                      top: "10px",
                      left: "20px",
                    }}
                    onClick={this.delClick.bind(this, userId)}
                  ></FontAwesomeIcon>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// prop types declaration
MyRoom.propTypes = {
  room: PropTypes.object.isRequired,
  deleteRoom: PropTypes.func.isRequired,
};

// map action to props.
const mapActionsToProps = {
  deleteRoom,
  getAllMyRooms,
};

// connect to the global state
export default connect(null, mapActionsToProps)(MyRoom);
