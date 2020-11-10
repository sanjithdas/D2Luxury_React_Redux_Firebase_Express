/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-06 14:45:13
 * @modify date 2020-11-06 14:47:08
 * @desc [Root Reducer - combine room, user, UI reducers]
 */
// redux import
import { combineReducers } from "redux";

// reducers import
import roomReducer from "./roomReducer";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";

// combine the reducers and export it
export default combineReducers({
  room: roomReducer,
  user: userReducer,
  UI: uiReducer,
});
