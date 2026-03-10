import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import SharkDetails from "./pages/SharkDetails"

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shark/:id" element={<SharkDetails />} />

      </Routes>

    </Router>
  )
}

export default App