import { ADDBOOKING, DELETEBOOKING } from "./actionType";
const initialState = { list: [] };
export const flightBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOKING:
      return {
        ...state,
        list: [
          ...state.list,
          {
            from: action.payload.from,
            to: action.payload.to,
            date: action.payload.date,
            noOfGuest: action.payload.noOfGuest,
            className: action.payload.className,
          },
        ],
      };

    case DELETEBOOKING:
      return {
        ...state,
        list: state.list.filter((booking,i) => {
          return i !== action.payload.id
        })
      }

    default:
      return state;
  }
};
