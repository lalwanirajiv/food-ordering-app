/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart/Cart'
import PlaceOrder from '../pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import AppDownload from './Components/AppDownload/AppDownload'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  )
}

export default App