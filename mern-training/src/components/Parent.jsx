import React from 'react'
import Child from './Child'
const Parent = () => {
    const getData=(data)=>{
        console.log("data received from child:",data)
    }
  return (
    <>
      <Child send={getData}/>
    </>
  )
}

export default Parent