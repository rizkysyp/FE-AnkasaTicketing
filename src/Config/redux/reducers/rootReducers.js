import { combineReducers } from "redux";
import detailFlightReducer from "./detailFlight";

const rootReducer = combineReducers({
  detailFlight: detailFlightReducer,
});

export default rootReducer;
