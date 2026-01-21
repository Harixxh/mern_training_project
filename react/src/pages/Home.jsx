import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/effect">Go to Effect Page</Link>
      </>
  )
}

export default Home;