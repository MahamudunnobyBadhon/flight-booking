import { applyMiddleware, createStore } from "redux";
import { flightBookingReducer } from "./bookingData/flightBookingReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { ADDBOOKING } from "./bookingData/actionType";
import myLogger from "./middleWare/myLogger";


const store = createStore(
  flightBookingReducer,
  composeWithDevTools(applyMiddleware(myLogger, logger))
);

export default store;
