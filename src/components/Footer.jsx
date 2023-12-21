import React from 'react'
import {FaWhatsapp,FaFacebook,FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div >
       
     <div className='items-center mt-5 p-8'>

            <ul className=' justify-center mx-auto flex'>
              <a href="http://wa.me/26876274147" target="_blank" rel="noopener noreferrer"><li className='mx-4'><FaWhatsapp size={30}/></li></a>  
                <li className='mx-4'><FaFacebook size={30}/></li>
               <a href="http://www.YouTube.com/@gamersztv100" target="_blank" rel="noopener noreferrer"><li className='mx-4'><FaYoutube size={30}/></li></a> 
            </ul>
     </div>
 <hr className=' border-black' />

 <div className=' items-center uppercase'>
    <ul className='grid md:flex justify-center'>
    <li className='m-4'>About</li> 
    <li className='m-4'>Contact</li>
      <li className='m-4'>Gallery</li> 
       <li className='m-4'>Privacy Policy</li> 
    </ul>
 </div>

    <p className='text-center pb-4'>
       &copy; {new Date().getFullYear()} KITMAN 10
    </p>
    </div>
  )
}

export default Footer