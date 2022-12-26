import { combineReducers } from "redux";
import userReducer from "./user";
import profileReducer from "./profile";
import ticketsearch from "./ticketSearch";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  ticket: ticketsearch,
});

export default rootReducer;
