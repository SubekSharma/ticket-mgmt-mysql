import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import './App.css'
import './MainPage'
import MainPage from "./MainPage"


function App() {

  return (
    <Router>
			
						<Routes>
							<Route path="/" element={<MainPage />} />
						</Routes>
					
		</Router>   
  )
}

export default App
