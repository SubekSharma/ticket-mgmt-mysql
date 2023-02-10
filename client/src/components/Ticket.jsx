import React from "react";
import { useNavigate } from "react-router-dom";

export default function Ticket(props) {
  const navigate = useNavigate();
  const { data } = props;
  const { source, destination, airline, time, date, name, ticket_id } = data;

  function handleTicketDelete() {
    fetch(`http://localhost:3264/api/ticket/${ticket_id}`, {
      method: "DELETE",
    })
      // .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  }

  function handleTicketEdit() {
    navigate(`/edit-ticket/${ticket_id}`);
  }

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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleTicketEdit}
        >
          Edit
        </button>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={handleTicketDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
