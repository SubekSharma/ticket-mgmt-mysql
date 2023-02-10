import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function ViewTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3264/api/ticket")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const ticketsEl = tickets.map((ticket, index) => (
    <Ticket key={index} data={ticket} />
  ));

  return <div>{ticketsEl}</div>;
}
