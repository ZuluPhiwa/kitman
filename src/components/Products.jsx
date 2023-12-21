import React, { useContext } from 'react'
import { ShopContext} from '../context/ShopContext'

const Products = (props) => {
    const {id, productName, price, productImage} =props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
  return (
    <div className="w-full rounded-lg  shadow-lg lg:max-w-sm">
    <img
        className="object-contain w-full h-80"
        src={productImage}
        alt="showing"
    />
    <div className="p-4 bg-gray-300 rounded-b-lg tracking-widest">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            {productName}
        </h4>
        <p className="mb-2 leading-normal  tracking-wider text-lg">
            E{price}
        </p>
        <button onClick={()=> addToCart(id)} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 tracking-widest rounded shadow uppercase">
            Bag {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    </div>
</div>
  )
}

export default Products