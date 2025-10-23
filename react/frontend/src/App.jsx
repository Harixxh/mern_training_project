import { useState } from 'react'
import './App.css'
import Home from './home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function App(){
  
  return (
    <div>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
export default App

