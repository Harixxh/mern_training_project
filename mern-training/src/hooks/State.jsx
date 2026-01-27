import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(1)
    const [like,setLikes]=useState(0)
  return (
    <>
    <div>State</div>
    <h1>count:{count}</h1>
    <button onClick={()=> setCount(count+1)}> click me </button>
    <h1>Likes:{like}</h1>
    <button onClick={()=> setLikes(like+1)}> 👍LIKE</button>
        <button onClick={()=> {if(like>0){setLikes(like-1)}}}> 👎DISLIKE</button>

    </>
  )
}

export default State