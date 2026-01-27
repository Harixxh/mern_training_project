import React from 'react'
import { Link } from 'react-router'
import Profile from '../components/Profile'
import State from '../hooks/State'

import Parent from '../components/Parent'
const Home = () => {
  return (
    <>
    <div>Home</div>
     <Link to="/form">Go to Form  Page</Link>
        
    <Profile name="harish" age="20" skills={["HTML","CSS","JAVASCRIPT","JAVA"]}/>
    <State/>
    <Parent/>
    
    </>
  )
}

export default Home