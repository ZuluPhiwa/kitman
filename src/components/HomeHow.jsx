import React from 'react'

import united from '../assets/united.jpg'
import {FaApple,FaFacebookF,FaAmazon,FaGoogle, } from 'react-icons/fa'
const HomeHow = () => {
  return (
    <div className='py-8'>
        
        <div className='rounded-md p-4 bg-[#3c193d] grid md:grid-cols-2 gap-4 '>

        <div>
        <h1 className='font-bryson pb-4 text-2xl md:text-4xl text-[#d18ecc]'>
                    Get your kit delivered to your doorstep
            </h1>
            <p className=' text-justify text-white'>
            Due to our extensive and strong relationships that have been developed with manufacturers here and abroad, we are able to supply our customers with high quality products at incredibly low factory prices. 
            <br /><br />
            We are totally committed to working with business wholesalers all over the world to ensure the best possible deals. If you are interested in our products, please feel free to contact us at any time. 

            </p>
        </div>

            <div className='p-2 justify-end '>
            <img src={united} alt="" className=' rounded-md shadow-md   bg-contain '/>
            </div>
        
        </div>

            <p className='pt-8'></p>
        <div className=' bg-green-950  p-8 rounded-md'>
        <div className='  '>

<div  className='items-center mx-auto'>
<p className='font-bryson text-4xl text-green-300 text-center'>
    Our Investors
</p>
<p className='text-center text-white '>
    BlankFace, River, Fruit, Search
</p>
</div>

<center>
<div className=' flex space-x-8 p-4 justify-center text-white  mx-auto'>
<FaFacebookF size={30}/>
<FaAmazon size={30}/>
<FaApple size={30}/>
<FaGoogle size={30}/>
</div>
</center>
</div>

        </div>
       
    </div>
  )
}

export default HomeHow