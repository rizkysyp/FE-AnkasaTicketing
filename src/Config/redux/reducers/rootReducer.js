import { combineReducers } from "redux";
import userReducer from "./user";
import profileReducer from "./profile";
import detailFlightReducer from "./detailFlight";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  detailFlight: detailFlightReducer,
});

export default rootReducer;
