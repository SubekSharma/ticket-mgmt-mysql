import React from "react";
import ViewTickets from "../components/ViewTickets";
import Header from "../components/Header";
import BookTicketForm from "../components/BookTicketForm";

export default function MainPage() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div
          className="w-25 my-4 position-fixed"
          style={{ marginRight: "50%" }}
        >
          <Header />
          <BookTicketForm />
        </div>
        <div className="w-50 my-4" style={{ marginLeft: "50%" }}>
          <ViewTickets />
        </div>
      </div>
    </div>
  );
}
