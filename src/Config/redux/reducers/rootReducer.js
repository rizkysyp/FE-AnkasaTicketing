import { combineReducers } from "redux";
import userReducer from "./user";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
});

export default rootReducer;
