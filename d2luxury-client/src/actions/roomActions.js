/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 19:42:47
 * @modify date 2020-11-06 12:38:36
 * @desc [Actions - dispatch actions here , calls the appropriate actions, contact the server]
 */
import {
  GET_ROOMS,
  GET_ROOM,
  DELETE_ROOM,
  DEL_ERROR,
  ADD_ROOM,
  UPDATE_ROOM,
  GET_MY_ROOM,
} from "../actions/types";
import axios from "axios";

/**
 * fetch all the room details from the database through this API call
 */
export const getRooms = () => async (dispatch) => {
  const res = await axios.get(
    "http://localhost:5000/d2luxuryredux/us-central1/api/rooms"
  );
  dispatch({
    type: GET_ROOMS,
    payload: res.data,
  });
};
/**
 * get a room details with given id
 * @param {*} id
 */

export const getRoom = (roomno) => async (dispatch) => {
  console.log(roomno);
  const res = await axios.get(
    `http://localhost:5000/d2luxuryredux/us-central1/api/room/${roomno}`
  );

  dispatch({
    type: GET_ROOM,
    payload: res.data,
  });
  // console.log(res.data);
};

/**
 * get all the rooms of a user
 * @param {} id
 */

export const getAllMyRooms = (userId) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/d2luxuryredux/us-central1/api/myrooms/${userId}`
  );

  dispatch({
    type: GET_MY_ROOM,
    payload: res.data,
  });
  console.log(res.data);
};

/**
 * delete the room according to the id provided.
 * @param {} id
 */
export const deleteRoom = (id) => async (dispatch) => {
  console.log(id);
  try {
    await axios.delete(
      `http://localhost:5000/d2luxuryredux/us-central1/api/myroom/delete/${id}`
    );
    dispatch({
      type: DELETE_ROOM,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DEL_ERROR,
      payload: error,
    });
  }
};

/**
 * create a new room
 * @param {} room
 */

export const addRoom = (room) => async (dispatch) => {
  console.log(room);
  const res = await axios.post(
    `http://localhost:5000/d2luxuryredux/us-central1/api/room`,
    room
  );
  dispatch({
    type: ADD_ROOM,
    payload: res.data,
  });
  // history.push("/admin/room/show");
};

// upload image
export const addRoomImage = (roomImage, userId) => async (dispatch) => {
  // for (var pair of roomImage.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }
  const res = await axios({
    method: "post",
    url: `http://localhost:5000/d2luxuryredux/us-central1/api/room/image/${userId}`,
    data: roomImage,
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log(res);
};

/**
 * update the existing room
 * @param {
 * } contact
 */
export const updateRoom = (room) => async (dispatch) => {
  console.log(room);
  const res = await axios.put(
    `http://localhost:5000/d2luxuryredux/us-central1/api/myroom/update/${room.userId}`,
    room
  );
  dispatch({
    type: UPDATE_ROOM,
    payload: res.data,
  });
};
