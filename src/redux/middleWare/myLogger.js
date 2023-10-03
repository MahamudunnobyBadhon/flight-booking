import { ADDBOOKING, DELETEBOOKING } from "../bookingData/actionType";

const myLogger = (store) => (next) => (action) => {
  let bookingList = store.getState();

  const { from, to, date, noOfGuest, className } = action.payload;
  if (action.type === ADDBOOKING) {
    if (bookingList?.list?.length <= 2) {
      if (from === to) {
        return;
      } else {
        if (
          (from !== "") &
          (to !== "") &
          (date !== "") &
          (noOfGuest !== "") &
          (className !== "")
        ) {
          next(action);
        } else {
          alert("Please Fill all the field");
        }
      }
    }
    else {
        alert("Can't book more than 3");
        return;
      }
  } 
  else if(action.type===DELETEBOOKING){
    next(action)
  }
};

export default myLogger;
