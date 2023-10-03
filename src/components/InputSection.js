import React, { useState } from "react";
import "../App.css";
import frameIcon from "../img/icons/Frame.svg";
import vectorIcon1 from "../img/icons/Vector (1).svg";
import vectorIcon3 from "../img/icons/Vector (3).svg";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/bookingData/action";
export default function InputSection() {
  const [state, setState] = useState({
    from: "",
    to: "",
    date: "",
    noOfGuest: "",
    className: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("called");
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBooking(state));
  };


  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform">
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frameIcon} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frameIcon} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              onChange={(e) => {
                handleChange(e);
              }}
              id="lws-date"
              required
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={vectorIcon1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="noOfGuest"
                onChange={(e) => {
                  handleChange(e);
                }}
                id="lws-guests"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>className=</p>
            <div className="flex flex-row">
              <img src={vectorIcon3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="className"
                id="lws-ticketclassName="
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            onClick={(e) =>handleAddBook(e)}
            className="addCity"
            type="submit"
            id="lws-addCity"
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}
