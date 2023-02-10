import React, { useState } from "react";

export default function EditTicketForm() {
  const [formInput, setFormInput] = useState({
    name: "",
    source: "",
    destination: "",
    airline: "",
    date: "",
    time: "",
  });

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput((prevFormInput) => ({ ...prevFormInput, [name]: value }));
  }

  function handleBook(event) {
    event.preventDefault();
    const formData = formInput;
    // console.log("submitted", new FormData(event.target));
    fetch(`http://localhost:3264/api/book`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch("Error motherfuclererrr!!");
  }
  console.log(formInput);
  return (
    <div className="container">
      <h1>HELLO THERE, BOOK YOUR NEXT FLIGHT WITH US !</h1>
      <form onSubmit={handleBook}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleInput}
            name="name"
            value={formInput.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="source">From:</label>
          <input
            type="text"
            className="form-control"
            id="source"
            onChange={handleInput}
            name="source"
            value={formInput.source}
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination">To:</label>
          <input
            type="text"
            className="form-control"
            id="destination"
            onChange={handleInput}
            name="destination"
            value={formInput.destination}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            onChange={handleInput}
            name="date"
            value={formInput.date}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            className="form-control"
            id="time"
            onChange={handleInput}
            name="time"
            value={formInput.time}
          />
        </div>

        <div className="form-group">
          <label htmlFor="airline">Airline:</label>
          <input
            type="text"
            className="form-control"
            id="airline"
            onChange={handleInput}
            name="airline"
            value={formInput.airline}
          />
        </div>

        <button type="submit" className="btn btn-success">
          SAVE  
        </button>
      </form>
    </div>
  );
}
