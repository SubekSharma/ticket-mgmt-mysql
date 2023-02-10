import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function BookTicketForm() {
  const emptyForm = {
    name: "",
    source: "",
    destination: "",
    airline: "",
    date: "",
    time: "",
    price: "",
  };

  const [formInput, setFormInput] = useState(emptyForm);

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput((prevFormInput) => ({ ...prevFormInput, [name]: value }));
  }

  function handleBook(event) {
    event.preventDefault();
    const formData = formInput;
    formData.ticket_id = nanoid();
    console.log("submitted", formData);
    fetch(`http://localhost:3264/api/ticket/book`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.clear();
        console.log(data);
        setFormInput(emptyForm);
      })

      .catch("Error!!");
  }
  // console.log(formInput);
  return (
    <div className="container">
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            onChange={handleInput}
            name="price"
            value={formInput.price}
            required
          />
        </div>

        <button type="submit" className="btn btn-success" onSubmit={handleBook}>
          BOOK
        </button>
      </form>
    </div>
  );
}
