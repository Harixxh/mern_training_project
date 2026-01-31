import React from 'react'
import Profile from './components/Profile'
import State from './hooks/State'
import Child from './components/Child'
import Parent from './components/Parent'
import Form from './hooks/Form'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>

    </Routes>
    <div>App</div>
    <Profile name="harish" age="20" skills={["HTML","CSS","JAVASCRIPT","JAVA"]}/>
    <State/>
    <Parent/>
    <Form/>
    </>
    
  )
}

export default App