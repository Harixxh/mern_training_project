import React from 'react'

import Home from './pages/Home.jsx'
import {Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Effect from './hooks/Effect.jsx'
import NavBar from './components/NavBar.jsx'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />   
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/effect' element={<Effect />} />
      </Routes>
    </>
  )
}

export default App