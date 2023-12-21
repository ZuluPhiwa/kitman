import React from 'react'
import {PRODUCTS} from "../products"
import Products from './Products'
const Shop = () => {
  return (
    <div>
        
        <h1 className=' text-center mx-auto  font-extrabold  justify-center  text-5xl py-3 px-4'>
          Shop.
        </h1>
        <h1 className='text-center mx-auto text-lg p-4'>
            items currently in stock
        </h1>
        <div  className='grid md:grid-cols-3 mx-8 my-4 max-w-full gap-8 '>
            {PRODUCTS.map((product)=> (<Products data= {product}/>))}
        </div>
    </div>
  )
}

export default Shop