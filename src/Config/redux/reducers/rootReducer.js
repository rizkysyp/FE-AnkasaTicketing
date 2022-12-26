import { combineReducers } from "redux";
import userReducer from "./user";
import profileReducer from "./profile";
import ticketsearch from "./ticketSearch";
import boockingTicketReducer from "./boockingTicket";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  ticket: ticketsearch,
  ticketbooking: boockingTicketReducer,
});

export default rootReducer;
