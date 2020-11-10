/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 20:28:55
 * @modify date 2020-11-06 14:48:29
 * @desc [Reducer - update the state of the room]
 */

// import the action types
import {
  GET_ROOMS,
  GET_ROOM,
  DELETE_ROOM,
  DEL_ERROR,
  ADD_ROOM,
  UPDATE_ROOM,
  GET_MY_ROOM,
} from "../actions/types";

// setting initial state (global)
const initialState = {
  rooms: [],
  room: {},
  errors: {},
};

// check the action type and update the state
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };
    case GET_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case GET_MY_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };
    case DELETE_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter((rooms) => rooms.roomno !== action.payload),
      };
    case DEL_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case ADD_ROOM:
      return {
        ...state,
        rooms: [action.payload, ...state.rooms],
        room: action.payload,
      };
    case UPDATE_ROOM:
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room.id === action.payload.id ? (room = action.payload) : room
        ),
      };

    default:
      return state;
  }
}
