import React from "react";
import BookTicketForm from "../components/BookTicketForm";
import ViewTickets from "../components/ViewTickets";
import Header from "../components/Header";

export default function MainPage() {
  return (
    <>
      <div className="w-50">
        <Header />
      </div>
      <div className="d-flex">
        <div className="w-50">
          <BookTicketForm />
        </div>
        <div className="w-50">
          <ViewTickets />
        </div>
      </div>
    </>
  );
}
