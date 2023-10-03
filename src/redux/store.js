import { applyMiddleware, createStore } from "redux";
import { flightBookingReducer } from "./bookingData/flightBookingReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// const myLogger = (store) => (next) => (action) => {
//   let bookingList = store.getState();
//   if (bookingList.length <= 2) {
//     next(action);
//   } else {
//     alert("Can't book more than 3");
//     return;
//   }
// };

const store = createStore(
  flightBookingReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
