import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import EditTicketForm from "./components/EditTicketForm";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit-ticket/:id" element={<EditTicketForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
