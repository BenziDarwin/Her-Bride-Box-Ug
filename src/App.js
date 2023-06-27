import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import Products from './pages/Products'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import SignIn from './pages/Login'
import EditPage from './pages/EditPage'
import Auth from './Firebase/Authentication/auth'
import NotFoundPage from './pages/404'
import GuardedRoute from './Components/GuardedRoutes'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/contact" element={<Contacts/>}/>
        <Route exact path="/login" element={<SignIn/>}/>
        <Route exact path="/edit/:id" element={<EditPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App