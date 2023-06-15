import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Body from './components/Body/Body.jsx';
import Footer from './components/Footer/Footer.jsx';
import { AppProvider } from './components/Context/AppContext.jsx';
import './App.css'

function App() {
  

  return (
    <div className='App'>
      <AppProvider>
        <Navbar />
        <Body />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App
