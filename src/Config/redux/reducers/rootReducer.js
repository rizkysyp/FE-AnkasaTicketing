import { combineReducers } from "redux";
import userReducer from "./user";
import profileReducer from "./profile";
import boockingTicketReducer from "./boockingTicket";
import airportReducer from "./airport";
import boockingTicketIdReducer from "./bookingId";
import ticketAllReducer from "./adminTicket";
import airlinesReducer from "./airlines";
import bookingReducer from "./bookingAdmin";
import airportAdminReducer from "./airportAdmin";
import paymentReducer from "./updatePayment";

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  ticket: boockingTicketReducer,
  airport: airportReducer,
  ticketId : boockingTicketIdReducer,
  adminTicket : ticketAllReducer,
  airlines : airlinesReducer,
  booking : bookingReducer,
  airportAdmin : airportAdminReducer,
  statusPayment : paymentReducer
});

export default rootReducer;
