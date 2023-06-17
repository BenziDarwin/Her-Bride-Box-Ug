import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  return (
    <Router>
      <NavBar/>

      <Footer/>
    </Router>
  )
}

export default App