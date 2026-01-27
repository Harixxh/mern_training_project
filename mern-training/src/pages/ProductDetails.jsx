import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
        const products=[
        {id:1,name:"laptop",price:"60000",description:'ASUS VIVOBOOK 16X INTEL i5 13th GEN NVIDIA GRAPHICS CARD RTX 3050'},
        {id:2,name:"Mobile Phone",price:"20000",description:'MOTO G86 POWER MEDIATEX DIMENSITY 7400 18GBRAM 1TB INTERNAL STORAGE'},
        {id:3,name:"TV",price:"60000",description:'SAMSUNG TV  OLED DISPLAY AND ANDROID WITH ALL FEATURES'},
        {id:4,name:"KeyBoard",price:"3000", description:'KEYBOARD WITH ALL KEYS AND RGB LIGHTS'}
    ]
    const {id}=useParams();
    const product=products.find((p)=>p.id === Number(id))
    console.log(product)
  return (
    <div>
        <h2>Product Details </h2>
        <h3> {product.name}</h3>
        <h4>{product.price}</h4>
        <p> {product.description}</p>
       
    </div>

  )
}

export default ProductDetails