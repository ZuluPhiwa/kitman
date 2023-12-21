import React, {useState} from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import kitman from '../assets/kitman.png'

import {Link} from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {

  
  const [nav, setNav] = useState(false);

  const HandleNav =()=> 
  {
      setNav (!nav);
      if(!setNav)
      {
        document.body.style.overflow = 'hidden'
      }
      else
      {
        document.body.style.overflow = 'scroll'
      }
  }
  const closeMenu =()=> setNav(false);
  return (
    <div className=' shadow-md p-4 '>
        <div className='hidden md:flex justify-around'>
           
       <Link to='/kitman/'><img src={kitman} alt=""  className=' h-12  '/></Link> 
            
            <ul className='hidden md:flex '>
            {/* <h1 className=' font-extrabold mx-8 text-lg uppercase font-vodan'>
                KitMan
            </h1> */}

           
              <Link to='/kitman/'><li className='mx-4 my-3 uppercase font-bold'>Home</li></Link>  
               <Link to='/kitman/shop'> <li className='mx-4 my-3 uppercase font-bold'>Shop</li></Link> 
               <Link to="/kitman/about"><li className='mx-4 my-3 uppercase font-bold'>About</li></Link> 
               <Link to="/kitman/contact"><li className='mx-4 my-3 uppercase font-bold'>Contact</li></Link> 
                
            </ul>
            <div className=' mx-4 my-3'>
            <Link to="/kitman/cart"><FaShoppingBag size={20}  className=' content-end'/></Link>
            </div>
        </div>

        <div onClick={HandleNav} className='block  md:hidden '>
              { nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={ 25}/>}
              
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 bg-[#000300] uppercase border-r w-[65%] border-r-gray-900 ease-in-out duration-500 z-10' : "fixed left-[-100%] z-10"}>
            <h1 className=' text-white mt-8 mx-6 font-bold font-krinkesregular text-3xl'>
       Kitman
        </h1>
            <ul className=' pt-24 font-bold text-white'>
               <Link to='/kitman/' onClick={closeMenu}><li className='mx-6 pb-4'> Home </li></Link> 
               <Link to="/kitman/about" onClick={closeMenu}><li className='mx-6 pb-4'>About </li></Link>
               <Link to="/kitman/contact" onClick={closeMenu}><li className='mx-6 pb-4'>Contact </li></Link> 
               <Link to="/kitman/cart" onClick={closeMenu}><li className='mx-6 pb-4'>Cart </li></Link> 
            </ul> 
            </div>
    </div>
  )
}

export default Navbar