import { ADDBOOKING, DELETEBOOKING } from "./actionType";

export const addBooking = (value) => {
  return {
    type: ADDBOOKING,
    payload: {
      from: value.from,
      to: value.to,
      date: value.date,
      noOfGuest: value.noOfGuest,
      className: value.className,
    },
  };
};

export const deleteBooking = (value) => {
  return {
    type: DELETEBOOKING,
    payload: {
      id: value,
    },
  };
};
