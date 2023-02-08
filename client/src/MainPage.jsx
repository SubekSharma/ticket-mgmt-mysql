import React from "react"

export default function MainPage() {
    return (
        <div>
            <div class="container">
                <h1>HELLO THERE, BOOK YOUR NEXT FLIGHT WITH US !</h1>
                <form method="post" action='http://localhost:3264/api/book'>

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


                    <button type="submit" class="btn btn-primary">Save</button>

                </form>
                <div id="results"></div>
            </div>
        </div>



    )
}
