import React from "react";
import BookTicketForm from "../components/BookTicketForm";
import ViewTickets from "../components/ViewTickets";

export default function MainPage() {
  return (
    <div className="d-flex">
      <div className="w-50">
        <BookTicketForm />
      </div>
      <div className="w-50">
        <ViewTickets />
      </div>
    </div>
  );
}
