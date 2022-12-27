import { combineReducers } from "redux";
import userReducer from "./user";
import profileReducer from "./profile";
import boockingTicketReducer from "./boockingTicket";
import airportReducer from "./airport";
import boockingTicketIdReducer from "./bookingId";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  ticket: boockingTicketReducer,
  airport: airportReducer,
  ticketId: boockingTicketIdReducer,
});

export default rootReducer;
