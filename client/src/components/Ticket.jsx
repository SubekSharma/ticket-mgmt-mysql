import React from "react";

export default function Ticket(props) {
  const { data } = props;
  const { source, destination, airline, price, time, date, name, ticket_id } =
    data;

  return (
    <div className="d-flex justify-content-between align-items-center py-2 px-4 mb-4 border border-4 bg-dark border-primary bg-opacity-25 rounded-3">
      <div>
        <h4>{name}</h4>
        <div>
          <p>
            FROM: <span className="font-bold">{source}</span> TO:{" "}
            <span className="font-bold">{destination}</span>
          </p>
        </div>
        <h6>{airline}</h6>
        <h5>
          DATE: {date.split("T")[0]} <span className="font-italic">{time}</span>
        </h5>
      </div>
      <div className="d-flex flex-column gap-4">
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
