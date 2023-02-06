import React from "react"

export default function Main_page() {
    return (
        <div>
            <div class="container">
                <h1>Flight Ticket Booking</h1>
                <form>

                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name"/>
                    </div>

                    <div class="form-group">
                        <label for="souce">From:</label>
                        <input type="text" class="form-control" id="source"/>
                    </div>

                    <div class="form-group">
                        <label for="dest">To:</label>
                        <input type="text" class="form-control" id="dest"/>
                    </div>

                    <div class="form-group">
                        <label for="date">Date:</label>
                        <input type="date" class="form-control" id="date"/>
                    </div>

                    <div class="form-group">
                        <label for="time">Time:</label>
                        <input type="time" class="form-control" id="time"/>
                    </div>

                    <div class="form-group">
                        <label for="airline">Airline:</label>
                        <input type="text" class="form-control" id="airline"/>
                    </div>


                    <button type="submit" class="btn btn-primary">Search</button>

                </form>
                <div id="results"></div>
            </div>
        </div>



    )
}
