import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Body from './components/Body/Body.jsx';
import Footer from './components/Footer/Footer.jsx';
import { AppProvider } from './components/Context/AppContext.jsx';
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  )
}

export default App
