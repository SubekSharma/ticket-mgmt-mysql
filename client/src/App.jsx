import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import './App.css'
import './Main_page'
import Main_page from "./Main_page"


function App() {

  return (
    <Router>
			
						<Routes>
							<Route path="/" element={<Main_page />} />
						</Routes>
					
		</Router>
  )
}

export default App
