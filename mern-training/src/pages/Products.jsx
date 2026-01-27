import React from 'react'
import { Link } from 'react-router'

const Products = () => {
    const products=[
        {id:1,name:"laptop",price:"60000"},
        {id:2,name:"Mobile Phone",price:"20000"},
        {id:3,name:"TV",price:"60000"},
        {id:4,name:"KeyBoard",price:"3000"}
    ]
  return (
    <>
    <div>Products</div>
     {products.map((a)=>(
        <div key={a.id}>
            <h4>{a.name}</h4>
            <h5>{a.price}</h5>
            <Link to={`/products/${a.id}`}> View Details</Link>
        </div>
     ))}
    </>
  )
}

export default Products