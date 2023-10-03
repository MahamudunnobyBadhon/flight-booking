import React from "react";
import "../App.css";
import TableList from "./TableList";
import { useSelector } from "react-redux";
export default function Table() {
  const data = useSelector((state) => state.list);
  console.log({ data });
  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">className=</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {data?.map((d, i) => {
            return(
            <TableList
              key={i}
              from={d?.from}
              to={d?.to}
              date={d?.date}
              noOfGuest={d?.noOfGuest}
              className={d?.className}
              index={i}
            />)
          })}
        </tbody>
      </table>
    </div>
  );
}
