import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function EditTicketForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formInput, setFormInput] = useState({
    name: "",
    source: "",
    destination: "",
    airline: "",
    date: "",
    time: "",
    price: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3264/api/ticket/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormInput(data);
      });
  }, []);

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput((prevFormInput) => ({ ...prevFormInput, [name]: value }));
  }

  function handleUpdate(event) {
    event.preventDefault();
    const formData = formInput;
    console.log("edited", formData);
    fetch(`http://localhost:3264/api/ticket/${id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch("Error editing ticket!");
  }
  return (
    <div className="container">
      <form onSubmit={handleUpdate}>
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
            value={formInput.date.split("T")[0]}
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

        <button type="submit" className="btn btn-success my-2">
          SAVE
        </button>
      </form>
    </div>
  );
}
