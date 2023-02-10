import React from "react";

export default function Ticket() {
  return (
    <div className="d-flex p-4 mb-4 border border-4">
      <h2>Hari Bahadur</h2>
      <div>
        <span>PKR</span>
        <span>BHW</span>
      </div>
      <h4>2022-12-04</h4>
      <h5>13:00</h5>
      <h5>Yeti Airlines</h5>
      <button type="submit" className="btn btn-primary" >
         Edit
        </button>
        <button type="submit" className="btn btn-danger" >
          Delete
        </button>
    </div>
  );
}
