import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import Products from './pages/Products'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import SignIn from './pages/Login'
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/contact" element={<Contacts/>}/>
        <Route exact path="/login" element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App