import React, {useContext} from 'react'
import { ShopContext} from '../context/ShopContext'
const CartIem = (props) => {
    const {id, productName, price, productImage} =props.data;

    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='p-4 items-center justify-center'>
    <div
    className="flex flex-col rounded-lg  shadow-lg dark:bg-gray-300  md:flex-row">
    <img
      className="h-80 w-full rounded-t-lg object-contain md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src={productImage}
      alt="" />
    <div className="flex flex-col justify-start p-6 mx-8">
      <h5
        className="mb-2 text-xl font-bebasneuebold font-medium text-blue-600 ">
        {productName}
      </h5>
      <p className="mb-4 text-black font-bebasneuebold tracking-widest text-lg">
        E{price}
      </p>
      <p className=" text-black">
        <button className=' rounded-sm shadow-sm font-bold pb-1 text-2xl px-2 mx-2' onClick={()=> removeFromCart(id)}> - </button>
        <input className='w-10 font-bold text-center rounded' value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
        <button className=' rounded-sm shadow-sm pb-1 font-bold  text-2xl px-2 mx-2' onClick={()=> addToCart(id)}> + </button>
        
      </p>
    </div>
  </div>

    </div>

  )
}

export default CartIem