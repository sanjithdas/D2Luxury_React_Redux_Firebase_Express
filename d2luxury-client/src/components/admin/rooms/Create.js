/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 16:36:03
 * @modify date 2020-11-09 22:59:44
 * @desc [Create New Room - Registered user only]
 */
//react Stuff
import { connect } from "react-redux";
import React, { Component } from "react";

// react bootstrap stuff
import { Row, Col, Form, Card, Button } from "react-bootstrap";

// Font/ styles

import classnames from "classnames";

// uuid - unique identifier create
import { v4 as uuidv4 } from "uuid";
// Prop types
import PropTypes from "prop-types";

// custom methods
import { addRoom, addRoomImage } from "../../../actions/roomActions";

class Create extends Component {
  // constructor , difine the componet state.

  constructor() {
    super();
    this.state = {
      roomno: "",
      roomType: "",
      occupants: "",
      bedType: "",
      roomRate: "",
      description: "",
      imageUrl: null,
      files: null,
      errors: {},
    };
  }
  // on change form set the component state

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /**
   * {validate data on submit the form}
   * @param  e
   */
  onSubmit = (e) => {
    const formData = new FormData();

    e.preventDefault();

    if (this.state.roomType === "") {
      this.setState({
        errors: { roomType: "Room type cannot be empty" },
      });
      return;
    }

    if (this.state.occupants === "") {
      this.setState({
        errors: { occupants: "Occupants cannot be empty" },
      });
      return;
    }
    if (this.state.bedType === "") {
      this.setState({
        errors: { bedType: "Bed type cannot be empty" },
      });
      return;
    }
    if (this.state.roomRate === "") {
      this.setState({
        errors: { roomRate: "Rate cannot be empty" },
      });
      return;
    }
    if (this.state.description === "") {
      this.setState({
        errors: { description: "Description cannot be empty" },
      });
      return;
    }

    const newRoom = {
      roomno: uuidv4(),
      roomType: this.state.roomType,
      occupants: this.state.occupants,
      bedType: this.state.bedType,
      roomRate: this.state.roomRate,
      description: this.state.description,
    };
    console.log(formData.entries());
    this.props.addRoom(newRoom);
    this.props.history.push("admin/../show");
  };

  render() {
    return (
      <div>
        <Row className="mt-5 mb-5">
          <Col md={3} className="mx-auto"></Col>
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Header>
                <span className="text-success">
                  <h3>Create Room</h3>
                </span>
              </Card.Header>
              <Card.Body>
                <form
                  onSubmit={this.onSubmit}
                  enctype="multipart/form-data"
                  method="post"
                >
                  {/* <Form.Group controlId="roomno">
                    <Form.Label>Room number</Form.Label>
                    <Form.Control
                      type="roomno"
                      placeholder="Enter room number"
                      name="roomno"
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.roomno,
                      })}
                      value={this.state.roomno}
                      onChange={this.onChange}
                    />
                    {this.state.errors.roomno && (
                      <div className="invalid-feedback">
                        {this.state.errors.roomno}
                      </div>
                    )}
                  </Form.Group> */}

                  <Form.Group controlId="roomType">
                    <Form.Label>Room Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter room type"
                      name="roomType"
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.roomType,
                      })}
                      value={this.state.roomType}
                      onChange={this.onChange}
                    />
                    {this.state.errors.roomType && (
                      <div className="invalid-feedback">
                        {this.state.errors.roomType}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="occupants">
                    <Form.Label>Max. Occupants</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Maximum Occupancy"
                      name="occupants"
                      value={this.state.occupants}
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.occupants,
                      })}
                    />
                    {this.state.errors.occupants && (
                      <div className="invalid-feedback">
                        {this.state.errors.occupants}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="bedType">
                    <Form.Label>Bed Types</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter bed type"
                      name="bedType"
                      value={this.state.bedType}
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.bedType,
                      })}
                    />
                    {this.state.errors.bedType && (
                      <div className="invalid-feedback">
                        {this.state.errors.bedType}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="roomRate">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter room rate"
                      name="roomRate"
                      value={this.state.roomRate}
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.roomRate,
                      })}
                    />
                    {this.state.errors.roomRate && (
                      <div className="invalid-feedback">
                        {this.state.errors.roomRate}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Enter the room description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      component={this.state.description}
                      value={this.state.description}
                      onChange={this.onChange}
                      className={classnames("form-control", {
                        "is-invalid": this.state.errors.description,
                      })}
                    />
                    {this.state.errors.description && (
                      <div className="invalid-feedback">
                        {this.state.errors.description}
                      </div>
                    )}
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="black"
                    className="btn-block btn-success"
                  >
                    Create Room
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mx-auto">
            <a className="btn btn-success text-white" href="/admin/room/show">
              My Rooms
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

// Proptypes defined

Create.propTypes = {
  addRoom: PropTypes.func.isRequired,
  addRoomImage: PropTypes.func.isRequired,
};

// mapping state to props
const mapStateToProps = (state) => ({
  user: state.user,
  authenticated: state.user.authenticated,
  room: state.room.room,
});

// action to props
const mapActionsToProps = {
  addRoom,
  addRoomImage,
};

// connect to the global state.
export default connect(mapStateToProps, mapActionsToProps)(Create);
