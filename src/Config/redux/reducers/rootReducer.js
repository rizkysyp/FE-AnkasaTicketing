import { combineReducers } from "redux";
import userReducer from "./user";
import profileReducer from "./profile";
import boockingTicketReducer from "./boockingTicket";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  ticketbooking: boockingTicketReducer,
});

export default rootReducer;
